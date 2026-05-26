'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { useTranslations } from 'next-intl'

interface CountryFilterProps {
  countries: string[]
  selectedCountry?: string
  totalCount?: number
}

const COUNTRY_FLAGS: Record<string, string> = {
  BR: '🇧🇷', PT: '🇵🇹', US: '🇺🇸', AR: '🇦🇷',
  AO: '🇦🇴', MZ: '🇲🇿', DE: '🇩🇪', IT: '🇮🇹',
  BE: '🇧🇪', FR: '🇫🇷', ES: '🇪🇸',
}

export default function CountryFilter({ countries, selectedCountry, totalCount }: CountryFilterProps) {
  const t = useTranslations('CountryFilter')
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSelect = useCallback(
    (country: string | null) => {
      const params = new URLSearchParams(searchParams.toString())
      if (country) {
        params.set('country', country)
      } else {
        params.delete('country')
      }
      router.push(`?${params.toString()}`, { scroll: false })
    },
    [router, searchParams],
  )

  return (
    <div className="chips">
      <button
        className={`chip${!selectedCountry ? ' is-active' : ''}`}
        onClick={() => handleSelect(null)}
        aria-pressed={!selectedCountry}
      >
        {t('all')}
        {totalCount != null && <span className="chip__count">{totalCount}</span>}
      </button>
      {countries.map((country) => (
        <button
          key={country}
          className={`chip${selectedCountry === country ? ' is-active' : ''}`}
          onClick={() => handleSelect(country)}
          aria-pressed={selectedCountry === country}
        >
          {COUNTRY_FLAGS[country] ?? ''} {country}
        </button>
      ))}
    </div>
  )
}
