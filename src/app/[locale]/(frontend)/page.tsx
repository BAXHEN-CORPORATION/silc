import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getUpcomingEvents } from '@/application/queries/getEvents'
import { getTestimonials } from '@/application/queries/getTestimonials'
import { Link } from '@/i18n/navigation'

interface Props {
  params: Promise<{ locale: string }>
}

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=2000&q=70'

const HERO_SIDE_PHOTO =
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=70'

const FEATURED_FALLBACK_PHOTO =
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=70'

const PAST_CITIES = [
  'São Paulo', 'Lisboa', 'Frankfurt', 'Luanda', 'Buenos Aires',
  'Maputo', 'Miami', 'Belo Horizonte', 'Roma', 'Brasília',
]

const COUNTRY_FLAGS: Record<string, string> = {
  BR: '🇧🇷', PT: '🇵🇹', US: '🇺🇸', AR: '🇦🇷', DE: '🇩🇪',
  AO: '🇦🇴', MZ: '🇲🇿', PY: '🇵🇾', IT: '🇮🇹', JP: '🇯🇵',
}

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale === 'en' ? 'en-US' : 'pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('Home')
  const tf = await getTranslations('Footer')

  const [upcomingEvents, testimonials] = await Promise.all([
    getUpcomingEvents(locale).catch(() => []),
    getTestimonials(locale, 3).catch(() => []),
  ])

  const featuredEvent = upcomingEvents[0] ?? null

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" />
        <div
          className="hero__bg-photo"
          style={{ backgroundImage: `url(${HERO_PHOTO})` }}
        />

        <div className="container hero__grid">
          {/* Left: headline + path cards */}
          <div>
            <div className="hero__since">
              <span className="dash" />
              <span>{t('heroSince')}</span>
            </div>

            <h1 className="display hero__title">
              {t.rich('heroTitle', {
                accent: (chunks) => <span className="red-italic">{chunks}</span>,
              })}
            </h1>

            <p className="lead hero__lead">{t('heroLead')}</p>

            <div className="path-cards">
              <Link
                href="/silc-presencial/proximos-seminarios"
                className="path-card is-primary"
              >
                <div className="path-card__kind">
                  <span className="path-card__kind-label">{t('heroPathPresencialKind')}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="path-card__title">{t('heroPathPresencialTitle')}</div>
                <div className="path-card__desc">{t('heroPathPresencialDesc')}</div>
                <div className="path-card__foot">
                  <span>
                    {t('heroPathPresencialFoot', { count: upcomingEvents.length })}
                  </span>
                  <span className="path-card__cta">
                    {t('heroPathPresencialCta')} →
                  </span>
                </div>
              </Link>

              <Link href="/silc-online" className="path-card">
                <div className="path-card__kind">
                  <span className="path-card__kind-label">{t('heroPathOnlineKind')}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="path-card__title">{t('heroPathOnlineTitle')}</div>
                <div className="path-card__desc">{t('heroPathOnlineDesc')}</div>
                <div className="path-card__foot">
                  <span>{t('heroPathOnlineFoot')}</span>
                  <span className="path-card__cta">
                    {t('heroPathOnlineCta')} →
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: photo + quote */}
          <aside className="hero__side">
            <div className="hero__photo">
              <img src={HERO_SIDE_PHOTO} alt="" />
            </div>
            {testimonials[0] ? (
              <>
                <blockquote className="hero__quote">{testimonials[0].quote}</blockquote>
                <div className="hero__quote-cite">
                  {testimonials[0].name}
                </div>
              </>
            ) : (
              <>
                <blockquote className="hero__quote">
                  {t('heroQuote')}
                </blockquote>
                <div className="hero__quote-cite">{t('heroQuoteCite')}</div>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────── */}
      <section className="stats">
        <div className="container stats__grid">
          <div>
            <div className="stat__num">30<span className="unit">+</span></div>
            <div className="stat__label">{t('statsYears')}</div>
          </div>
          <div>
            <div className="stat__num">100<span className="unit">k+</span></div>
            <div className="stat__label">{t('statsParticipants')}</div>
          </div>
          <div>
            <div className="stat__num">50<span className="unit">+</span></div>
            <div className="stat__label">{t('statsCountries')}</div>
          </div>
          <div>
            <div className="stat__num">{upcomingEvents.length || '—'}</div>
            <div className="stat__label">{t('statsCities')}</div>
          </div>
        </div>
      </section>

      {/* ── O QUE É O SILC ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{t('oQueEyebrow')}</span>
              <h2 className="h2" style={{ marginTop: 16 }}>{t('oQueTitle')}</h2>
            </div>
            <Link href="/sobre-o-silc" className="btn btn--ghost" style={{ whiteSpace: 'nowrap' }}>
              {t('oQueAction')} →
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="three-cols">
            <div>
              <div className="three-cols__num">01 · {t('col1Num')}</div>
              <h3 className="h3 three-cols__title">{t('col1Title')}</h3>
              <p className="body-text three-cols__body">{t('col1Body')}</p>
            </div>
            <div>
              <div className="three-cols__num">02 · {t('col2Num')}</div>
              <h3 className="h3 three-cols__title">{t('col2Title')}</h3>
              <p className="body-text three-cols__body">{t('col2Body')}</p>
            </div>
            <div>
              <div className="three-cols__num">03 · {t('col3Num')}</div>
              <h3 className="h3 three-cols__title">{t('col3Title')}</h3>
              <p className="body-text three-cols__body">{t('col3Body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT ───────────────────────────────────────── */}
      {featuredEvent && (
        <section className="section section--tight">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">{t('featuredEyebrow')}</span>
                <h2 className="h2" style={{ marginTop: 16 }}>
                  {featuredEvent.city} · {new Date(featuredEvent.startDate).toLocaleDateString(
                    locale === 'en' ? 'en-US' : 'pt-BR',
                    { month: 'long', year: 'numeric' }
                  )}
                </h2>
              </div>
              <Link href="/silc-presencial/proximos-seminarios" className="btn btn--link">
                {t('featuredViewAll', { count: upcomingEvents.length })} →
              </Link>
            </div>

            <div className="featured">
              <div
                className="featured__photo"
                style={{ backgroundImage: `url(${FEATURED_FALLBACK_PHOTO})` }}
              >
                <div className="featured__photo-meta">
                  {COUNTRY_FLAGS[featuredEvent.country] && (
                    <span className="flag-chip">
                      <span className="flag-chip__emoji">{COUNTRY_FLAGS[featuredEvent.country]}</span>
                      <span>{featuredEvent.country}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="featured__body">
                <div className="featured__date">
                  {formatDate(featuredEvent.startDate, locale).toUpperCase()}
                  {featuredEvent.endDate && featuredEvent.endDate !== featuredEvent.startDate
                    ? ` – ${formatDate(featuredEvent.endDate, locale).toUpperCase()}`
                    : ''}
                </div>
                <h3 className="h2 featured__title">{featuredEvent.title}</h3>
                {featuredEvent.shortDescription && (
                  <p className="body-text featured__body-text">
                    {featuredEvent.shortDescription}
                  </p>
                )}
                <div className="featured__meta">
                  {featuredEvent.city && (
                    <div className="featured__meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <strong>{featuredEvent.city}</strong>
                    </div>
                  )}
                  {featuredEvent.venue && (
                    <div className="featured__meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      <strong>{featuredEvent.venue}</strong>
                    </div>
                  )}
                </div>
                <div className="featured__cta">
                  <Link
                    href={`/silc-presencial/${featuredEvent.slug}`}
                    className="btn"
                  >
                    {t('featuredCta')} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <section className="section--bleed" style={{ paddingBlock: 0 }}>
        <div className="container" style={{ paddingBottom: 24, paddingTop: 80 }}>
          <span className="eyebrow">{t('whereMinistered')}</span>
        </div>
        <div className="marquee__wrap">
          <div className="marquee">
            {/* doubled for seamless loop */}
            <span>
              {PAST_CITIES.map((c) => <span key={c}>{c}</span>)}
            </span>
            <span aria-hidden="true">
              {PAST_CITIES.map((c) => <span key={`${c}-2`}>{c}</span>)}
            </span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">{t('testimoniosEyebrow')}</span>
                <h2 className="h2" style={{ marginTop: 16 }}>{t('testimoniosTitle')}</h2>
              </div>
            </div>
            <div className="grid--3">
              {testimonials.map((tst) => (
                <div key={tst.id} className="tcard">
                  <p className="tcard__quote">{tst.quote}</p>
                  <div className="tcard__person">
                    <div
                      className="tcard__avatar"
                      style={{ background: 'var(--bg-3)' }}
                    />
                    <div>
                      <div className="tcard__name">{tst.name}</div>
                      {tst.eventType && (
                        <div className="tcard__place">
                          {tst.eventType === 'online' ? 'SILC Online' : 'SILC Presencial'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow eyebrow--plain"
              style={{ justifyContent: 'center' }}>
              {t('ctaEyebrow')}
            </span>
            <h2
              className="display"
              style={{ marginTop: 20, fontSize: 'clamp(36px,4.6vw,72px)' }}
            >
              {t('ctaTitle')}
            </h2>
          </div>

          <div className="path-cards" style={{ maxWidth: 920, margin: '0 auto' }}>
            <Link
              href="/silc-presencial/proximos-seminarios"
              className="path-card is-primary"
            >
              <div className="path-card__kind">
                <span className="path-card__kind-label">{t('heroPathPresencialKind')}</span>
              </div>
              <div className="path-card__title">{t('heroPathPresencialTitle')}</div>
              <span className="path-card__cta">
                {t('heroPathPresencialCta')} →
              </span>
            </Link>

            <Link href="/silc-online" className="path-card">
              <div className="path-card__kind">
                <span className="path-card__kind-label">{t('heroPathOnlineKind')}</span>
              </div>
              <div className="path-card__title">{t('heroPathOnlineTitle')}</div>
              <span className="path-card__cta">
                {t('heroPathOnlineCta')} →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
