'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

interface CountryFilterProps {
  countries: string[]
  selectedCountry?: string
}

export default function CountryFilter({ countries, selectedCountry }: CountryFilterProps) {
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
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-600">{t('label')}</span>
      <div className="flex flex-wrap gap-2">
        <button
          className={cn(
            'rounded-full px-4 py-1.5 text-sm font-medium transition-colors border',
            !selectedCountry
              ? 'bg-[#1a2c4e] text-white border-[#1a2c4e]'
              : 'border-gray-200 text-gray-600 hover:border-[#1a2c4e] hover:text-[#1a2c4e]',
          )}
          onClick={() => handleSelect(null)}
          aria-pressed={!selectedCountry}
        >
          {t('all')}
        </button>
        {countries.map((country) => (
          <button
            key={country}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors border',
              selectedCountry === country
                ? 'bg-[#1a2c4e] text-white border-[#1a2c4e]'
                : 'border-gray-200 text-gray-600 hover:border-[#1a2c4e] hover:text-[#1a2c4e]',
            )}
            onClick={() => handleSelect(country)}
            aria-pressed={selectedCountry === country}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  )
}
