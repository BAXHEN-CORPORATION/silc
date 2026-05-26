'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isPresencial =
    pathname.startsWith('/silc-presencial') || pathname.startsWith('/silc-presencial')

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__row">
        {/* Brand */}
        <Link href="/" aria-label={t('brandAriaLabel')} className="nav__brand">
          <span className="nav__brand-mark">
            SILC<span className="dot">.</span>
          </span>
          <span className="nav__brand-sub">
            {t('brandSubLine1')}<br />{t('brandSubLine2')}
          </span>
        </Link>

        {/* Desktop links */}
        <nav aria-label={t('menuLabel')} className="nav__links">
          <Link href="/" className={`nav__link${pathname === '/' ? ' is-active' : ''}`}>
            {t('home')}
          </Link>

          <div className="nav__drop">
            <span
              className={`nav__link${isPresencial ? ' is-active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {t('presencial')} <span style={{ opacity: 0.5, fontSize: 11 }}>⌄</span>
            </span>
            <div className="nav__drop-menu">
              <Link href="/silc-presencial/proximos-seminarios" className="nav__drop-item">
                <strong>{t('upcoming')}</strong>
                <span className="desc">{t('upcomingDesc')}</span>
              </Link>
              <Link href="/silc-presencial/seminarios-anteriores" className="nav__drop-item">
                <strong>{t('past')}</strong>
                <span className="desc">{t('pastDesc')}</span>
              </Link>
            </div>
          </div>

          <Link
            href="/silc-online"
            className={`nav__link${pathname === '/silc-online' ? ' is-active' : ''}`}
          >
            {t('online')}
          </Link>

          <Link
            href="/sobre-o-silc"
            className={`nav__link${pathname === '/sobre-o-silc' ? ' is-active' : ''}`}
          >
            {t('about')}
          </Link>

          <Link
            href="/contato"
            className={`nav__link${pathname === '/contato' ? ' is-active' : ''}`}
          >
            {t('contact')}
          </Link>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="nav__cta">
          <Link
            href="/silc-presencial/proximos-seminarios"
            className="nav__btn"
            aria-label={t('cta')}
          >
            {t('cta')} <span aria-hidden="true">→</span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
