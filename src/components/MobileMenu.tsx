'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'

export default function MobileMenu() {
  const t = useTranslations('Nav')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <button
        className="flex flex-col items-center justify-center gap-1.5 md:hidden p-2"
        aria-label={open ? t('closeMenu') : t('openMenu')}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-72 p-0"
          style={{ background: '#0B0B0E', border: 'none', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
        >
          <SheetTitle className="sr-only">{t('menuLabel')}</SheetTitle>
          <nav className="flex flex-col gap-1 px-6 pt-8">
            <Link
              href="/"
              onClick={close}
              className="py-3 text-base font-medium border-b"
              style={{ color: 'var(--fg-1)', borderColor: 'var(--line-1)' }}
            >
              {t('home')}
            </Link>

            <div className="py-3 border-b" style={{ borderColor: 'var(--line-1)' }}>
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-3)' }}
              >
                {t('presencial')}
              </span>
              <div className="mt-2 flex flex-col gap-1">
                <Link
                  href="/silc-presencial/proximos-seminarios"
                  onClick={close}
                  className="py-2 pl-3 text-sm transition-colors"
                  style={{ color: 'var(--fg-2)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--red-500)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
                >
                  {t('upcoming')}
                </Link>
                <Link
                  href="/silc-presencial/seminarios-anteriores"
                  onClick={close}
                  className="py-2 pl-3 text-sm transition-colors"
                  style={{ color: 'var(--fg-2)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--red-500)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
                >
                  {t('past')}
                </Link>
              </div>
            </div>

            <Link
              href="/silc-online"
              onClick={close}
              className="py-3 text-base font-medium border-b transition-colors"
              style={{ color: 'var(--fg-1)', borderColor: 'var(--line-1)' }}
            >
              {t('online')}
            </Link>

            <Link
              href="/sobre-o-silc"
              onClick={close}
              className="py-3 text-base font-medium border-b transition-colors"
              style={{ color: 'var(--fg-1)', borderColor: 'var(--line-1)' }}
            >
              {t('about')}
            </Link>

            <Link
              href="/contato"
              onClick={close}
              className="py-3 text-base font-medium border-b transition-colors"
              style={{ color: 'var(--fg-1)', borderColor: 'var(--line-1)' }}
            >
              {t('contact')}
            </Link>

            <Link
              href="/silc-presencial/proximos-seminarios"
              onClick={close}
              className="mt-6 rounded-lg py-3 text-center text-sm font-semibold"
              style={{ background: 'var(--red-500)', color: '#fff' }}
            >
              {t('cta')}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
