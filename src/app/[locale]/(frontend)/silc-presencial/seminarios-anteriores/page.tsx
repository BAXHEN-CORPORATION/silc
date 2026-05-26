import { Suspense } from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getPastEvents, getPastEventYears, getPastEventCountries } from '@/application/queries/getEvents'
import EventCard from '@/components/EventCard'
import CountryFilter from '@/components/CountryFilter'
import { cn } from '@/lib/utils'

interface Props {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ year?: string; country?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Past' })
  return { title: `${t('title')} – SILC` }
}

export default async function PastPage({ params, searchParams }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const { year: yearStr, country } = await searchParams
  const year = yearStr ? parseInt(yearStr, 10) : undefined
  const t = await getTranslations('Past')

  const [events, years, countries] = await Promise.all([
    getPastEvents(locale, year, country).catch(() => []),
    getPastEventYears(locale).catch(() => []),
    getPastEventCountries(locale).catch(() => []),
  ])

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
          {t('eyebrow')}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-bold text-[#1a2c4e]">{t('title')}</h1>
      </header>

      {years.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-gray-600">{t('yearFilter')}</span>
          <div className="flex flex-wrap gap-2">
            <a
              href="?"
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors border',
                !year
                  ? 'bg-[#1a2c4e] text-white border-[#1a2c4e]'
                  : 'border-gray-200 text-gray-600 hover:border-[#1a2c4e] hover:text-[#1a2c4e]',
              )}
            >
              {t('all')}
            </a>
            {years.map((y) => (
              <a
                key={y}
                href={`?year=${y}${country ? `&country=${country}` : ''}`}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors border',
                  year === y
                    ? 'bg-[#1a2c4e] text-white border-[#1a2c4e]'
                    : 'border-gray-200 text-gray-600 hover:border-[#1a2c4e] hover:text-[#1a2c4e]',
                )}
              >
                {y}
              </a>
            ))}
          </div>
        </div>
      )}

      {countries.length > 0 && (
        <div className="mb-8">
          <Suspense>
            <CountryFilter countries={countries} selectedCountry={country} />
          </Suspense>
        </div>
      )}

      {events.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="past-events-grid">
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
              status="past"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-24 text-center text-gray-500">
          <span className="text-5xl" aria-hidden="true">📷</span>
          <p className="max-w-sm text-base">{t('empty')}</p>
        </div>
      )}
    </div>
  )
}
