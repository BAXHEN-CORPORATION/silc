import { Suspense } from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getPastEvents, getPastEventCountries } from '@/application/queries/getEvents'
import CountryFilter from '@/components/CountryFilter'
import type { SilcEvent } from '@/domain/events/types'

interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ country?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Past' })
  return { title: `${t('title')} – SILC` }
}

const FALLBACK_THUMB = 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&q=50'

function formatMonthYear(dateStr: string, locale: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString(locale === 'pt-BR' ? 'pt-BR' : 'en', {
    month: 'short',
    year: 'numeric',
  })
}

function groupByYear(events: SilcEvent[]): { year: number; items: SilcEvent[] }[] {
  const map = new Map<number, SilcEvent[]>()
  for (const e of events) {
    const y = new Date(e.startDate).getFullYear()
    if (!map.has(y)) map.set(y, [])
    map.get(y)!.push(e)
  }
  return [...map.entries()]
    .map(([year, items]) => ({ year, items }))
    .sort((a, b) => b.year - a.year)
}

export default async function PastPage({ params, searchParams }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const { country } = await searchParams
  const t = await getTranslations('Past')

  const [events, countries] = await Promise.all([
    getPastEvents(locale, undefined, country).catch(() => []),
    getPastEventCountries(locale).catch(() => []),
  ])

  const groups = groupByYear(events)

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h1
            className="h2"
            style={{
              marginTop: 20,
              fontSize: 'clamp(32px,4vw,52px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            {t('title')}
          </h1>
          <p className="lead page-hero__lead">
            {locale === 'pt-BR'
              ? 'Encontre o SILC que você participou. Veja datas, cidade e galeria de fotos da edição.'
              : 'Find the SILC you attended. See dates, city, and photo gallery for each edition.'}
          </p>

          {/* Toolbar inside hero */}
          {countries.length > 0 && (
            <div className="events-toolbar" style={{ marginTop: 48, marginBottom: 0 }}>
              <Suspense>
                <CountryFilter countries={countries} selectedCountry={country} />
              </Suspense>
            </div>
          )}
        </div>
      </section>

      {/* Archive groups */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          {groups.length > 0 ? (
            groups.map(({ year: y, items }) => (
              <div key={y} className="archive-year">
                <div className="archive-year__num">{y}</div>
                <div className="archive-year__list">
                  {items.map((event) => {
                    const thumb = event.photos?.[0]?.photo?.url ?? FALLBACK_THUMB
                    const dateStr = formatMonthYear(event.startDate, locale)
                    return (
                      <Link
                        key={event.id}
                        href={`/silc-presencial/${event.slug}#photos`}
                        className="archive-card"
                      >
                        <div
                          className="archive-card__thumb"
                          style={{ backgroundImage: `url(${thumb})` }}
                        />
                        <div className="archive-card__body">
                          <div className="archive-card__where">{event.city}</div>
                          <div className="archive-card__date">{dateStr}</div>
                          <span className="archive-card__link">
                            {locale === 'pt-BR' ? 'Ver fotos' : 'View photos'} →
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '96px 0', color: 'var(--fg-3)' }}>
              <div style={{ fontSize: 48, marginBottom: 24 }} aria-hidden="true">
                📷
              </div>
              <p style={{ maxWidth: 400, margin: '0 auto', fontSize: 16, lineHeight: 1.6 }}>
                {t('empty')}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
