import { Suspense } from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getUpcomingEvents, getUpcomingEventCountries } from '@/application/queries/getEvents'
import EventCard from '@/components/EventCard'
import CountryFilter from '@/components/CountryFilter'

interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ country?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Upcoming' })
  return { title: `${t('title')} – SILC` }
}

export default async function UpcomingPage({ params, searchParams }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const { country } = await searchParams
  const t = await getTranslations('Upcoming')

  const [events, countries] = await Promise.all([
    getUpcomingEvents(locale, country).catch(() => []),
    getUpcomingEventCountries(locale).catch(() => []),
  ])

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
            {events.length > 0
              ? locale === 'pt-BR'
                ? `${events.length} edição${events.length !== 1 ? 'ões' : ''} confirmada${events.length !== 1 ? 's' : ''} para 2026.`
                : `${events.length} edition${events.length !== 1 ? 's' : ''} confirmed for 2026.`
              : null}{' '}
            {locale === 'pt-BR' ? (
              <>
                Não encontrou uma cidade próxima?{' '}
                <Link href="/silc-online">Faça o SILC Online.</Link>
              </>
            ) : (
              <>
                Didn't find a city near you? <Link href="/silc-online">Try SILC Online.</Link>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Toolbar + grid */}
      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          {countries.length > 0 && (
            <div className="events-toolbar">
              <Suspense>
                <CountryFilter
                  countries={countries}
                  selectedCountry={country}
                  totalCount={events.length}
                />
              </Suspense>
              <span style={{ fontSize: 13, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
                {events.length} evento{events.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}

          {events.length > 0 ? (
            <div className="events">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  slug={event.slug as string}
                  city={event.city}
                  country={event.country}
                  startDate={event.startDate as string}
                  endDate={event.endDate as string}
                  shortDescription={event.shortDescription}
                  status="upcoming"
                  photo={event.photos?.[0]?.photo?.url ?? null}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '96px 0', color: 'var(--fg-3)' }}>
              <div style={{ fontSize: 48, marginBottom: 24 }} aria-hidden="true">
                📅
              </div>
              <p style={{ maxWidth: 400, margin: '0 auto', fontSize: 16, lineHeight: 1.6 }}>
                {country ? t('emptyWithFilter', { country }) : t('emptyAll')}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
