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
        <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-72 bg-[#1a2c4e] border-0 p-0">
          <SheetTitle className="sr-only">{t('menuLabel')}</SheetTitle>
          <nav className="flex flex-col gap-1 px-6 pt-8">
            <Link
              href="/"
              onClick={close}
              className="py-3 text-base font-medium text-white/80 border-b border-white/10 hover:text-[#c9a84c] transition-colors"
            >
              {t('home')}
            </Link>

            <div className="py-3 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
                {t('presencial')}
              </span>
              <div className="mt-2 flex flex-col gap-1">
                <Link
                  href="/silc-presencial/proximos-seminarios"
                  onClick={close}
                  className="py-2 pl-3 text-sm text-white/70 hover:text-[#c9a84c] transition-colors"
                >
                  {t('upcoming')}
                </Link>
                <Link
                  href="/silc-presencial/seminarios-anteriores"
                  onClick={close}
                  className="py-2 pl-3 text-sm text-white/70 hover:text-[#c9a84c] transition-colors"
                >
                  {t('past')}
                </Link>
              </div>
            </div>

            <Link
              href="/silc-online"
              onClick={close}
              className="py-3 text-base font-medium text-white/80 border-b border-white/10 hover:text-[#c9a84c] transition-colors"
            >
              {t('online')}
            </Link>

            <Link
              href="/sobre-o-silc"
              onClick={close}
              className="py-3 text-base font-medium text-white/80 border-b border-white/10 hover:text-[#c9a84c] transition-colors"
            >
              {t('about')}
            </Link>

            <Link
              href="/contato"
              onClick={close}
              className="mt-4 rounded-md border border-[#c9a84c] py-2.5 text-center text-sm font-medium text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a2c4e] transition-colors"
            >
              {t('contact')}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
