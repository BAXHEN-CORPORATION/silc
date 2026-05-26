import { Suspense } from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
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
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
          {t('eyebrow')}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-bold text-[#1a2c4e]">{t('title')}</h1>
      </header>

      {countries.length > 0 && (
        <div className="mb-8">
          <Suspense>
            <CountryFilter countries={countries} selectedCountry={country} />
          </Suspense>
        </div>
      )}

      {events.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="events-grid">
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
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-24 text-center text-gray-500">
          <span className="text-5xl" aria-hidden="true">📅</span>
          <p className="max-w-sm text-base">
            {country ? t('emptyWithFilter', { country }) : t('emptyAll')}
          </p>
        </div>
      )}
    </div>
  )
}
