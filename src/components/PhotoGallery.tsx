'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface Photo {
  photo: {
    url: string
    alt: string
    width?: number | null
    height?: number | null
  }
  caption?: string | null
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const t = useTranslations('Gallery')
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const prev = () => setActive((i) => (i !== null && i > 0 ? i - 1 : i))
  const next = () => setActive((i) => (i !== null && i < photos.length - 1 ? i + 1 : i))

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (active === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  if (!photos.length) return null

  const current = active !== null ? photos[active] : null

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((item, i) => (
          <button
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
            onClick={() => setActive(i)}
            aria-label={t('viewPhoto', { alt: item.photo.alt })}
          >
            <Image
              src={item.photo.url}
              alt={item.photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            {item.caption && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs text-white">{item.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {active !== null && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label={t('label')}
          onClick={close}
        >
          <div
            className="relative max-h-[85vh] max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.photo.url}
              alt={current.photo.alt}
              width={current.photo.width ?? 1200}
              height={current.photo.height ?? 800}
              className="max-h-[80vh] w-full rounded-lg object-contain"
              priority
            />
            {current.caption && (
              <p className="mt-3 text-center text-sm text-white/70">{current.caption}</p>
            )}
            <p className="mt-2 text-center text-xs text-white/50">
              {active + 1} / {photos.length}
            </p>
          </div>

          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition-colors"
            onClick={close}
            aria-label={t('close')}
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); prev() }}
            disabled={active === 0}
            aria-label={t('prev')}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); next() }}
            disabled={active === photos.length - 1}
            aria-label={t('next')}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
