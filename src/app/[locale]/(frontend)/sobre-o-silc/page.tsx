import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getAboutContent } from '@/application/queries/getGlobals'
import RichTextRenderer from '@/components/RichTextRenderer'
import { Link } from '@/i18n/navigation'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'About' })
  return { title: `${t('title')} – SILC` }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('About')

  const content = await getAboutContent(locale).catch(() => null)

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '180px 0 60px' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h1 className="display" style={{ marginTop: 20 }}>
            {locale === 'en' ? (
              <>
                What is <span className="red-italic">SILC</span>.
              </>
            ) : (
              <>
                O que é o <span className="red-italic">SILC</span>.
              </>
            )}
          </h1>
          {Boolean(content?.intro) && (
            <div style={{ marginTop: 28 }}>
              <RichTextRenderer content={content!.intro} />
            </div>
          )}
        </div>
      </section>

      {/* ── HOW THE WEEK WORKS ── */}
      {Boolean(content?.howTheWeekWorks) && (
        <section className="evd-section">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="evd-label">{t('sectionWeek')}</div>
                <h2 className="h2" style={{ marginTop: 12 }}>
                  {t('h2Week')}
                </h2>
              </div>
              <RichTextRenderer content={content!.howTheWeekWorks} />
            </div>
          </div>
        </section>
      )}

      {/* ── TEAM ROLES ── */}
      {Boolean(content?.roles) && (
        <section className="evd-section">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="evd-label">{t('sectionRoles')}</div>
                <h2 className="h2" style={{ marginTop: 12 }}>
                  {t('h2Roles')}
                </h2>
              </div>
              <RichTextRenderer content={content!.roles} />
            </div>
          </div>
        </section>
      )}

      {/* ── CTA PATH CARDS ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow eyebrow--plain">{t('ctaEyebrow')}</span>
            <h2
              className="display"
              style={{ marginTop: 20, fontSize: 'clamp(36px,4.6vw,64px)' }}
            >
              {t('ctaTitle')}
            </h2>
          </div>
          <div className="path-cards" style={{ maxWidth: 920, margin: '0 auto' }}>
            <Link href="/silc-presencial/proximos-seminarios" className="path-card is-primary">
              <div className="path-card__title">{t('ctaUpcoming')}</div>
              <span className="path-card__cta">{t('ctaPresencialCta')} →</span>
            </Link>
            <Link href="/silc-online" className="path-card">
              <div className="path-card__title">{t('ctaOnline')}</div>
              <span className="path-card__cta">{t('ctaOnlineCta')} →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
