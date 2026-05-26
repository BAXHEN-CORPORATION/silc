import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getEventBySlug } from '@/application/queries/getEvents'
import { RegistrationCTA } from '@/components/RegistrationCTA'
import PhotoGallery from '@/components/PhotoGallery'
import TestimonialList from '@/components/TestimonialList'
import RichTextRenderer from '@/components/RichTextRenderer'
import { Link } from '@/i18n/navigation'

const FALLBACK_PHOTO =
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=70'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const event = await getEventBySlug(slug, locale).catch(() => null)
  if (!event) return {}
  return {
    title: `${event.title} – SILC`,
    description: event.shortDescription ?? undefined,
  }
}

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale === 'en' ? 'en-GB' : 'pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function EventDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations('EventDetail')

  const event = await getEventBySlug(slug, locale).catch(() => null)
  if (!event) notFound()

  const isUpcoming = event.status === 'upcoming'
  const photos = (event.photos ?? []) as Array<{
    photo: { url: string; alt: string; width?: number; height?: number }
    caption?: string
  }>
  const testimonials = (event.testimonials ?? []) as Array<{
    id: string
    name: string
    quote: string
  }>

  const startDate = formatDate(event.startDate as string, locale)
  const endDate = formatDate(event.endDate as string, locale)
  const dateRange = `${startDate} – ${endDate}`
  const heroPhoto = photos[0]?.photo?.url ?? FALLBACK_PHOTO

  return (
    <>
      {/* ── HERO ── */}
      <section className="evd-hero">
        <div className="container">
          <div className="evd-hero__row">
            <div>
              <span className="eyebrow">
                {isUpcoming ? t('eyebrowUpcoming') : t('eyebrowPast')}
              </span>
              <h1 className="display evd-hero__title">{event.title}</h1>
              <div className="evd-hero__where">
                <strong>
                  {event.city}, {event.country}
                </strong>{' '}
                · {dateRange}
              </div>
              <div className="evd-hero__cta">
                {isUpcoming ? (
                  <>
                    {event.registrationFormUrl && (
                      <a href="#inscricao" className="btn">
                        {t('ctaRegister')} →
                      </a>
                    )}
                    {event.videoUrl && (
                      <a href="#video" className="btn btn--ghost">
                        ▶ {t('ctaVideo')}
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      href="/silc-presencial/proximos-seminarios"
                      className="btn btn--ghost"
                    >
                      {t('ctaNextSilcs')} →
                    </Link>
                    {photos.length > 0 && (
                      <a href="#photos" className="btn btn--link">
                        {t('ctaGallery')}
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            <div
              className="evd-hero__photo"
              style={{ backgroundImage: `url(${heroPhoto})` }}
              role="img"
              aria-label={event.title}
            />
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      {Boolean(event.description) && (
        <section className="evd-section">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="evd-label">{t('sectionAbout')}</div>
              </div>
              <RichTextRenderer content={event.description} />
            </div>
          </div>
        </section>
      )}

      {/* ── SCHEDULE ── */}
      {Boolean(event.scheduleOverview) && (
        <section className="evd-section">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="evd-label">{t('sectionSchedule')}</div>
                <h2 className="h2" style={{ marginTop: 12 }}>
                  {t('h2Week')}
                </h2>
              </div>
              <RichTextRenderer content={event.scheduleOverview} />
            </div>
          </div>
        </section>
      )}

      {/* ── PRACTICAL INFO ── */}
      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="evd-label">{t('practicalInfo')}</div>
              <h2 className="h2" style={{ marginTop: 12 }}>
                {t('h2Info')}
              </h2>
            </div>
            <div className="spec-list">
              <div>
                <span className="spec-list__label">{t('dates')}</span>
                <span className="spec-list__value">{dateRange}</span>
              </div>
              <div>
                <span className="spec-list__label">{t('location')}</span>
                <span className="spec-list__value">
                  {event.city}, {event.country}
                </span>
              </div>
              {event.venue && (
                <div>
                  <span className="spec-list__label">{t('venue')}</span>
                  <span className="spec-list__value">{event.venue as string}</span>
                </div>
              )}
              {event.price && (
                <div>
                  <span className="spec-list__label">{t('price')}</span>
                  <span className="spec-list__value">{event.price as string}</span>
                </div>
              )}
              {event.mainSpeaker && (
                <div>
                  <span className="spec-list__label">{t('speaker')}</span>
                  <span className="spec-list__value">{event.mainSpeaker as string}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      {photos.length > 0 && (
        <section className="evd-section" id="photos">
          <div className="container">
            <div className="evd-grid-aux" style={{ marginBottom: 32 }}>
              <div>
                <div className="evd-label">{t('sectionPhotos')}</div>
                <h2 className="h2" style={{ marginTop: 12 }}>
                  {t('h2Gallery', { title: event.title })}
                </h2>
              </div>
            </div>
            <PhotoGallery photos={photos} />
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      {testimonials.length > 0 && (
        <section className="evd-section">
          <div className="container">
            <div style={{ marginBottom: 40 }}>
              <span className="eyebrow">{t('sectionTestimonials')}</span>
            </div>
            <TestimonialList testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* ── REGISTRATION ── */}
      {isUpcoming && event.registrationFormUrl && (
        <section className="evd-section" id="inscricao">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="evd-label">{t('registrationTitle')}</div>
                <h2 className="h2" style={{ marginTop: 12 }}>
                  {t('h2Registration')}
                </h2>
                <p className="body" style={{ marginTop: 16, maxWidth: '30ch' }}>
                  {t('registrationNote')}
                </p>
              </div>
              <div>
                <RegistrationCTA href={event.registrationFormUrl as string} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PAST NOTICE ── */}
      {!isUpcoming && (
        <section className="evd-section">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="evd-label">{t('registrationTitle')}</div>
              </div>
              <div className="detail-past">
                {t.rich('pastNotice', {
                  link: (chunks) => (
                    <Link href="/silc-presencial/proximos-seminarios">{chunks}</Link>
                  ),
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── VIDEO ── */}
      {event.videoUrl && (
        <section className="evd-section" id="video">
          <div className="container">
            <div className="detail-video__embed">
              <iframe
                src={event.videoUrl as string}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={t('videoTitle', { title: event.title })}
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
