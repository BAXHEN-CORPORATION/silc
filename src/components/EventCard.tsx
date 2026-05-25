import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface EventCardProps {
  title: string
  slug: string
  city: string
  country: string
  startDate: string
  endDate: string
  shortDescription?: string | null
  status: 'upcoming' | 'past'
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start)
  const e = new Date(end)
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()
  if (sameMonth) {
    return `${s.getDate()}–${e.toLocaleDateString('pt-BR', opts)}`
  }
  return `${s.toLocaleDateString('pt-BR', opts)} – ${e.toLocaleDateString('pt-BR', opts)}`
}

export default async function EventCard({
  title,
  slug,
  city,
  country,
  startDate,
  endDate,
  shortDescription,
  status,
}: EventCardProps) {
  const t = await getTranslations('EventCard')

  return (
    <Card className="group flex flex-col overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-lg">
      <CardContent className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-2">
          {status === 'upcoming' ? (
            <Badge className="bg-[#1a2c4e] text-white hover:bg-[#1a2c4e] text-[0.7rem] font-medium">
              {t('upcoming')}
            </Badge>
          ) : (
            <Badge variant="secondary" className="text-[0.7rem] font-medium">
              {t('past')}
            </Badge>
          )}
        </div>

        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          <span>📍</span>
          <span>{city}, {country}</span>
        </p>

        <h3 className="font-serif text-lg font-semibold text-[#1a2c4e] leading-snug group-hover:text-[#c9a84c] transition-colors">
          {title}
        </h3>

        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          <span>📅</span>
          <span>{formatDateRange(startDate, endDate)}</span>
        </p>

        {shortDescription && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{shortDescription}</p>
        )}
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        <Link
          href={`/silc-presencial/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2c4e] hover:text-[#c9a84c] transition-colors"
        >
          {t('viewDetails')}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </CardFooter>
    </Card>
  )
}
