import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function Footer() {
  const t = await getTranslations('Footer')

  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__grid">
          {/* Brand column */}
          <div>
            <div className="foot__mark">
              SILC<span className="dot">.</span>
            </div>
            <p className="foot__byline">
              {t('byline')}
            </p>
          </div>

          {/* SILC Presencial */}
          <div className="foot__col">
            <h5>{t('presencial')}</h5>
            <ul>
              <li><Link href="/silc-presencial/proximos-seminarios">{t('upcoming')}</Link></li>
              <li><Link href="/silc-presencial/seminarios-anteriores">{t('past')}</Link></li>
            </ul>
          </div>

          {/* SILC Online + Sobre */}
          <div className="foot__col">
            <h5>{t('online')}</h5>
            <ul>
              <li><Link href="/silc-online">{t('onlineAbout')}</Link></li>
              <li><Link href="/sobre-o-silc">{t('about')}</Link></li>
            </ul>
          </div>

          {/* Equipe Central */}
          <div className="foot__col">
            <h5>{t('team')}</h5>
            <ul>
              <li><Link href="/contato">{t('contact')}</Link></li>
              <li>
                <a href="mailto:ajuda@pastorataniatereza.com">
                  {t('email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <span>{t('copyright', { year: new Date().getFullYear() })}</span>
          <span className="italic-serif">SILC · {t('tagline')}</span>
        </div>
      </div>
    </footer>
  )
}
