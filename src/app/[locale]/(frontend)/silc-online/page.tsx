import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getOnlineContent } from '@/application/queries/getGlobals'
import { RegistrationCTA } from '@/components/RegistrationCTA'
import TestimonialList from '@/components/TestimonialList'
import RichTextRenderer from '@/components/RichTextRenderer'
import { Fragment } from 'react'
import { Link } from '@/i18n/navigation'

const FALLBACK_VISUAL = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=70'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Online' })
  return { title: `${t('eyebrow')} – SILC` }
}

function getFeatures(locale: string) {
  if (locale === 'en') {
    return [
      {
        icon: '▶',
        title: '32 video teachings in HD',
        desc: 'The full SILC curriculum. Lifetime access — watch at your own pace.',
      },
      {
        icon: '📖',
        title: 'Digital workbook + physical book',
        desc: 'Physical material shipped across Brazil. Digital version available immediately.',
      },
      {
        icon: '👥',
        title: 'Monthly live sessions',
        desc: 'Q&A with the central team every last Saturday of the month.',
      },
      {
        icon: '💬',
        title: 'WhatsApp support',
        desc: 'Counsellors available to pray and answer questions throughout your journey.',
      },
      {
        icon: '✓',
        title: '7-week guided track',
        desc: 'Same structure as the 7 in-person days, spread across 7 weeks of immersion.',
      },
      {
        icon: '♥',
        title: 'Participant community',
        desc: 'Closed prayer group with others doing SILC alongside you.',
      },
    ]
  }
  return [
    {
      icon: '▶',
      title: '32 ministrações em vídeo HD',
      desc: 'Toda a grade do SILC presencial. Acesso vitalício, assista no seu ritmo.',
    },
    {
      icon: '📖',
      title: 'Apostila digital + livro físico',
      desc: 'Material físico enviado para todo o Brasil. Versão digital disponível imediatamente.',
    },
    {
      icon: '👥',
      title: 'Encontros mensais ao vivo',
      desc: 'Q&A em grupo com a equipe central, todo último sábado do mês.',
    },
    {
      icon: '💬',
      title: 'Suporte por WhatsApp',
      desc: 'Conselheiros disponíveis para orar e responder dúvidas durante seu percurso.',
    },
    {
      icon: '✓',
      title: 'Trilha guiada de 7 semanas',
      desc: 'Mesma estrutura dos 7 dias presenciais, em 7 semanas de imersão.',
    },
    {
      icon: '♥',
      title: 'Comunidade de participantes',
      desc: 'Grupo fechado de oração com pessoas fazendo o SILC junto com você.',
    },
  ]
}

function getCompareRows(locale: string) {
  if (locale === 'en') {
    return [
      ['Format', '7 immersive days at a hotel', '7 weeks at your own pace'],
      ['Personal 1:1 ministry', 'Yes — Day 4 dedicated', 'Via video call, on demand'],
      ['Materials', 'Workbook + prayer book', 'Digital workbook + physical book shipped'],
      ['Investment', 'From R$ 1,450', 'R$ 497 · or 6× R$ 89'],
      ['Start', 'Fixed dates (see schedule)', 'Whenever you want — today'],
    ]
  }

  return [
    ['Formato', '7 dias imersivos em hotel', '7 semanas no seu ritmo'],
    ['Ministração pessoal 1:1', 'Sim — Dia 4 dedicado', 'Por chamada de vídeo, sob demanda'],
    ['Material', 'Apostila + livro de orações', 'Apostila digital + livro físico enviado'],
    ['Investimento', 'A partir de R$ 1.450', 'R$ 497 · ou 6× R$ 89'],
    ['Início', 'Datas fixas (ver agenda)', 'Quando quiser, hoje mesmo'],
  ]
}

export default async function SilcOnlinePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Online')

  const content = await getOnlineContent(locale).catch(() => null)
  const testimonials = (content?.testimonials ?? []) as Array<{
    id: string
    name: string
    quote: string
  }>

  const features = getFeatures(locale)
  const compareRows = getCompareRows(locale)
  const visualUrl =
    ((content as Record<string, unknown>)?.heroImageUrl as string | undefined) ?? FALLBACK_VISUAL

  const richSections = [
    { key: 'introduction', label: t('sectionIntro') },
    { key: 'howItWorks', label: t('sectionHow') },
    { key: 'whatIsIncluded', label: t('sectionIncluded') },
    { key: 'differenceFromPresencial', label: t('sectionDiff') },
  ] as const

  return (
    <>
      {/* ── HERO ── */}
      <section className="online-hero">
        <div className="container">
          <div className="online-hero__inner">
            <div>
              <span className="eyebrow">{t('eyebrow')}</span>
              <h1 className="display" style={{ marginTop: 20, fontSize: 'clamp(40px,5.4vw,84px)' }}>
                {locale === 'en' ? (
                  <>
                    Do SILC
                    <br />
                    <span className="red-italic">from wherever you are.</span>
                  </>
                ) : (
                  <>
                    Faça o SILC
                    <br />
                    <span className="red-italic">de onde estiver.</span>
                  </>
                )}
              </h1>
              <p className="lead" style={{ marginTop: 24 }}>
                {t('description')}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                {content?.registrationFormUrl ? (
                  <a href="#inscricao" className="btn btn--lg">
                    {t('heroCta')} →
                  </a>
                ) : null}
                {content?.videoUrl ? (
                  <a href="#video" className="btn btn--ghost">
                    ▶ {t('heroCtaVideo')}
                  </a>
                ) : null}
              </div>
            </div>

            <div
              className="online-hero__visual"
              style={{ backgroundImage: `url(${visualUrl})` }}
              role="img"
              aria-label={t('title')}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow eyebrow--plain">{t('featuresEyebrow')}</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                {t('featuresTitle')}
              </h2>
            </div>
          </div>
          <div className="online-features">
            {features.map((f) => (
              <div key={f.title} className="online-feat">
                <div className="online-feat__icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      {content?.videoUrl && (
        <section className="evd-section" id="video">
          <div className="container">
            <div className="detail-video__embed">
              <iframe
                src={content.videoUrl as string}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={t('eyebrow')}
              />
            </div>
          </div>
        </section>
      )}

      {/* ── RICH-TEXT CMS SECTIONS ── */}
      {richSections.map(({ key, label }) => {
        const value = content?.[key as keyof typeof content]
        if (!value) return null
        return (
          <section key={key} className="evd-section">
            <div className="container">
              <div className="evd-grid-aux">
                <div>
                  <div className="evd-label">{label}</div>
                </div>
                <RichTextRenderer content={value} />
              </div>
            </div>
          </section>
        )
      })}

      {/* ── COMPARE TABLE ── */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div>
              <span className="eyebrow eyebrow--plain">{t('compareEyebrow')}</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                {t('compareTitle')}
              </h2>
            </div>
            <Link href="/silc-presencial/proximos-seminarios" className="btn btn--ghost btn--sm">
              {t('compareCta')} →
            </Link>
          </div>
          <div className="compare-wrap">
            <div className="compare">
              <div className="col-head">&nbsp;</div>
              <div className="col-head">{locale === 'en' ? 'In-Person' : 'Presencial'}</div>
              <div className="col-head">Online</div>
              {compareRows.map(([label, presencial, online]) => (
                <Fragment key={label}>
                  <div className="col-cell">{label}</div>
                  <div className="col-cell">{presencial}</div>
                  <div className="col-cell">
                    <strong>{online}</strong>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {testimonials.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ marginBottom: 40 }}>
              <span className="eyebrow">{t('sectionTestimonials')}</span>
            </div>
            <TestimonialList testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* ── REGISTRATION CTA ── */}
      {content?.registrationFormUrl && (
        <section className="section" id="inscricao">
          <div className="container" style={{ maxWidth: 720 }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="eyebrow eyebrow--plain">
                {locale === 'en' ? 'Registration' : 'Inscrição'}
              </span>
              <h2 className="display" style={{ marginTop: 20, fontSize: 'clamp(36px,4.6vw,64px)' }}>
                {t('ctaTitle')}
              </h2>
              <p className="lead" style={{ margin: '16px auto 0', maxWidth: '52ch' }}>
                {t('ctaNote')}
              </p>
            </div>
            <div style={{ maxWidth: 360, margin: '0 auto' }}>
              <RegistrationCTA href={content.registrationFormUrl as string} label={t('ctaLabel')} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
