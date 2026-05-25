import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getEventBySlug } from '@/application/queries/getEvents'
import { RegistrationCTA } from '@/components/RegistrationCTA'
import PhotoGallery from '@/components/PhotoGallery'
import TestimonialList from '@/components/TestimonialList'
import RichTextRenderer from '@/components/RichTextRenderer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Link } from '@/i18n/navigation'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const event = await getEventBySlug(slug).catch(() => null)
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

  const event = await getEventBySlug(slug).catch(() => null)
  if (!event) notFound()

  const isUpcoming = event.status === 'upcoming'
  const photos = (event.photos ?? []) as Array<{
    photo: { url: string; alt: string; width?: number; height?: number }
    caption?: string
  }>
  const testimonials = ((event.testimonials ?? []) as Array<{ id: string; name: string; quote: string }>)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2c4e] px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <nav className="mb-8 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              {t('breadcrumbHome')}
            </Link>
            <span>/</span>
            <Link
              href={isUpcoming ? '/silc-presencial/proximos-seminarios' : '/silc-presencial/seminarios-anteriores'}
              className="hover:text-[#c9a84c] transition-colors"
            >
              {isUpcoming ? t('breadcrumbUpcoming') : t('breadcrumbPast')}
            </Link>
            <span>/</span>
            <span className="text-white/70">{event.title}</span>
          </nav>

          <Badge
            className={isUpcoming
              ? 'bg-[#c9a84c] text-[#1a2c4e] hover:bg-[#c9a84c] mb-4'
              : 'bg-white/10 text-white/70 hover:bg-white/10 mb-4'
            }
          >
            {isUpcoming ? t('statusUpcoming') : t('statusPast')}
          </Badge>

          <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {event.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-6">
            <span className="flex items-center gap-2 text-sm text-white/70">
              <span>📍</span>{event.city}, {event.country}
            </span>
            <span className="flex items-center gap-2 text-sm text-white/70">
              <span>📅</span>
              {formatDate(event.startDate as string, locale)} – {formatDate(event.endDate as string, locale)}
            </span>
            {event.mainSpeaker && (
              <span className="flex items-center gap-2 text-sm text-white/70">
                <span>🎤</span>{event.mainSpeaker}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-12">
          {Boolean(event.description) && (
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionAbout')}</h2>
              <RichTextRenderer content={event.description} />
            </section>
          )}
          {Boolean(event.scheduleOverview) && (
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionSchedule')}</h2>
              <RichTextRenderer content={event.scheduleOverview} />
            </section>
          )}
          {photos.length > 0 && (
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionPhotos')}</h2>
              <PhotoGallery photos={photos} />
            </section>
          )}
          {testimonials.length > 0 && (
            <section>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionTestimonials')}</h2>
              <TestimonialList testimonials={testimonials} />
            </section>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
                {t('practicalInfo')}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium uppercase text-gray-400">{t('dates')}</span>
                  <span className="text-sm text-[#1a2c4e]">
                    {formatDate(event.startDate as string, locale)} – {formatDate(event.endDate as string, locale)}
                  </span>
                </div>
                <Separator />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium uppercase text-gray-400">{t('location')}</span>
                  <span className="text-sm text-[#1a2c4e]">{event.city}, {event.country}</span>
                </div>
                {event.venue && (
                  <>
                    <Separator />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium uppercase text-gray-400">{t('venue')}</span>
                      <span className="text-sm text-[#1a2c4e]">{event.venue}</span>
                    </div>
                  </>
                )}
                {event.price && (
                  <>
                    <Separator />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium uppercase text-gray-400">{t('price')}</span>
                      <span className="text-sm text-[#1a2c4e]">{event.price}</span>
                    </div>
                  </>
                )}
                {event.mainSpeaker && (
                  <>
                    <Separator />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium uppercase text-gray-400">{t('speaker')}</span>
                      <span className="text-sm text-[#1a2c4e]">{event.mainSpeaker}</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {isUpcoming && event.registrationFormUrl ? (
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
                  {t('registrationTitle')}
                </p>
                <div className="flex flex-col gap-3">
                  <RegistrationCTA href={event.registrationFormUrl as string} />
                  <p className="text-center text-[0.7rem] text-gray-400">{t('registrationNote')}</p>
                </div>
              </CardContent>
            </Card>
          ) : !isUpcoming ? (
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600">
              {t.rich('pastNotice', {
                link: (chunks) => (
                  <Link
                    href="/silc-presencial/proximos-seminarios"
                    className="font-semibold text-[#1a2c4e] hover:text-[#c9a84c]"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </div>
          ) : null}
        </aside>
      </div>

      {event.videoUrl && (
        <div className="mx-auto mb-16 max-w-[1200px] px-6">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <iframe
              src={event.videoUrl as string}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={t('videoTitle', { title: event.title })}
              className="absolute inset-0 size-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
