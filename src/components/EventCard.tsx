import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

interface EventCardProps {
  title: string
  slug: string
  city: string
  country: string
  startDate: string
  endDate: string
  shortDescription?: string | null
  status: 'upcoming' | 'past'
  photo?: string | null
}

const COUNTRY_FLAGS: Record<string, string> = {
  BR: '🇧🇷', PT: '🇵🇹', US: '🇺🇸', AR: '🇦🇷',
  AO: '🇦🇴', MZ: '🇲🇿', DE: '🇩🇪', IT: '🇮🇹',
  BE: '🇧🇪', FR: '🇫🇷', ES: '🇪🇸',
}

const COUNTRY_NAMES: Record<string, { pt: string; en: string }> = {
  BR: { pt: 'Brasil', en: 'Brazil' },
  PT: { pt: 'Portugal', en: 'Portugal' },
  US: { pt: 'Estados Unidos', en: 'United States' },
  AR: { pt: 'Argentina', en: 'Argentina' },
  AO: { pt: 'Angola', en: 'Angola' },
  MZ: { pt: 'Moçambique', en: 'Mozambique' },
  DE: { pt: 'Alemanha', en: 'Germany' },
  IT: { pt: 'Itália', en: 'Italy' },
  BE: { pt: 'Bélgica', en: 'Belgium' },
  FR: { pt: 'França', en: 'France' },
  ES: { pt: 'Espanha', en: 'Spain' },
}

function formatDateRange(start: string, end: string, locale: string): string {
  const s = new Date(start)
  const e = new Date(end)
  const lang = locale === 'pt-BR' ? 'pt-BR' : 'en'
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()
  if (sameMonth) {
    const endFmt = e.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' })
    return `${s.getDate()}–${endFmt}`
  }
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  return `${s.toLocaleDateString(lang, opts)} – ${e.toLocaleDateString(lang, opts)}`
}

const FALLBACK_PHOTO = 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=60'

export default async function EventCard({
  title,
  slug,
  city,
  country,
  startDate,
  endDate,
  shortDescription,
  status,
  photo,
}: EventCardProps) {
  const t = await getTranslations('EventCard')
  const flag = COUNTRY_FLAGS[country] ?? '🌍'
  const countryName = COUNTRY_NAMES[country]?.pt ?? country
  const dateStr = formatDateRange(startDate, endDate, 'pt-BR')
  const bgPhoto = photo ?? FALLBACK_PHOTO

  return (
    <Link href={`/silc-presencial/${slug}`} className="evt">
      <div className="evt__photo" style={{ backgroundImage: `url(${bgPhoto})` }}>
        <span className="flag-chip evt__flag">
          <span className="flag-chip__emoji">{flag}</span>
          <span>{countryName}</span>
        </span>
        <span className={`evt__status ${status === 'upcoming' ? 'is-open' : 'is-closed'}`}>
          {status === 'upcoming' ? t('upcoming') : t('past')}
        </span>
      </div>
      <div className="evt__body">
        <div className="evt__date">{dateStr}</div>
        <h3 className="evt__title">{title}</h3>
        <div className="evt__where">{city}</div>
        {shortDescription && <p className="evt__desc">{shortDescription}</p>}
        <div className="evt__foot">
          <span>5 dias</span>
          <span className="evt__detail-link">
            {t('viewDetails')} →
          </span>
        </div>
      </div>
    </Link>
  )
}
