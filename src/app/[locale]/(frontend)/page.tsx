import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getUpcomingEvents } from '@/application/queries/getEvents'
import EventCard from '@/components/EventCard'
import { Link } from '@/i18n/navigation'

interface Props {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('Home')
  const upcomingEvents = await getUpcomingEvents(locale).catch(() => [])
  const nextEvents = upcomingEvents.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[90vh] items-center bg-[#1a2c4e] px-6 py-24"
        data-testid="hero"
      >
        <div className="mx-auto max-w-[1200px] w-full">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            {t('eyebrow')}
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t('description')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/silc-presencial/proximos-seminarios"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c9a84c] px-7 py-3.5 text-sm font-semibold text-[#1a2c4e] transition-all hover:bg-[#e2c878] active:scale-[0.98]"
            >
              {t('ctaPresencial')}
            </Link>
            <Link
              href="/silc-online"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              {t('ctaOnline')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#c9a84c]" aria-label="SILC em números">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-px bg-[#a88930] sm:grid-cols-4">
          {[
            { number: '30+', label: t('statsCountries') },
            { number: '40+', label: t('statsYears') },
            { number: '100k+', label: t('statsParticipants') },
            { number: 'Online', label: t('statsOnline') },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-[#c9a84c] py-8 px-4">
              <span className="font-serif text-3xl font-bold text-[#1a2c4e]">{stat.number}</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-[#1a2c4e]/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming events preview */}
      {nextEvents.length > 0 && (
        <section className="py-20 px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                {t('upcomingEyebrow')}
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2c4e] sm:text-4xl">
                {t('upcomingTitle')}
              </h2>
              <p className="mt-3 max-w-xl text-base text-gray-600">{t('upcomingDescription')}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nextEvents.map((event) => (
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
            <div className="mt-10 text-center">
              <Link
                href="/silc-presencial/proximos-seminarios"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a2c4e] hover:text-[#c9a84c] transition-colors"
              >
                {t('upcomingViewAll')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SILC Online feature */}
      <section className="bg-[#faf8f3] py-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                {t('onlineEyebrow')}
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a2c4e] sm:text-4xl">
                {t('onlineTitle')}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {t('onlineDescription')}
              </p>
              <Link
                href="/silc-online"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2c4e] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#243d6a]"
              >
                {t('onlineCta')}
              </Link>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-[#1a2c4e] p-12 text-center">
              <p className="font-serif text-xl font-semibold italic leading-relaxed text-white">
                {t('onlineQuote')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
