import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import MobileMenu from './MobileMenu'

export default async function Navbar() {
  const t = await getTranslations('Nav')

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a2c4e] shadow-lg">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 h-16">
        <Link href="/" aria-label="SILC – Página inicial" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-widest text-white">SILC</span>
          <span className="text-[0.6rem] font-medium tracking-[0.2em] text-[#c9a84c] uppercase">
            Seminar International
          </span>
        </Link>

        <nav aria-label={t('menuLabel')} className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-[#c9a84c]">
                {t('home')}
              </Link>
            </li>

            <li className="group relative">
              <span
                className="flex cursor-pointer items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-[#c9a84c]"
                role="button"
                tabIndex={0}
              >
                {t('presencial')}
                <svg
                  className="size-3 transition-transform group-hover:rotate-180"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="invisible absolute left-0 top-full mt-2 w-52 rounded-lg bg-white py-2 shadow-xl opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <Link
                  href="/silc-presencial/proximos-seminarios"
                  className="block px-4 py-2 text-sm text-[#1a2c4e] hover:bg-[#1a2c4e]/5 hover:text-[#c9a84c]"
                >
                  {t('upcoming')}
                </Link>
                <div className="my-1 h-px bg-gray-100" />
                <Link
                  href="/silc-presencial/seminarios-anteriores"
                  className="block px-4 py-2 text-sm text-[#1a2c4e] hover:bg-[#1a2c4e]/5 hover:text-[#c9a84c]"
                >
                  {t('past')}
                </Link>
              </div>
            </li>

            <li>
              <Link href="/silc-online" className="text-sm font-medium text-white/80 transition-colors hover:text-[#c9a84c]">
                {t('online')}
              </Link>
            </li>

            <li>
              <Link href="/sobre-o-silc" className="text-sm font-medium text-white/80 transition-colors hover:text-[#c9a84c]">
                {t('about')}
              </Link>
            </li>

            <li>
              <Link
                href="/contato"
                className="rounded-md border border-[#c9a84c] px-4 py-1.5 text-sm font-medium text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-[#1a2c4e]"
              >
                {t('contact')}
              </Link>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}
