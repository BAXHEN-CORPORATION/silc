import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getContactContent } from '@/application/queries/getGlobals'
import ContactForm from '@/components/ContactForm'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Contact' })
  return { title: `${t('title')} – SILC` }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Contact')

  const content = await getContactContent(locale).catch(() => null)

  return (
    <section style={{ padding: '180px 0 120px' }}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <span className="eyebrow">{t('eyebrow')}</span>
        <h1
          className="h1"
          style={{ marginTop: 20 }}
        >
          {locale === 'en' ? (
            <>Get in touch with the <span className="red-italic">central team</span>.</>
          ) : (
            <>Fale com a <span className="red-italic">equipe central</span>.</>
          )}
        </h1>
        <p className="lead" style={{ marginTop: 16, maxWidth: '60ch' }}>
          {locale === 'en'
            ? 'For questions about registrations, past editions or SILC Online support. The team responds within 24 hours during the week.'
            : 'Para dúvidas sobre inscrições, edições passadas ou suporte do SILC Online. A equipe responde em até 24 horas durante a semana.'}
        </p>

        <div className="contact-grid">
          {/* ── FORM ── */}
          <ContactForm
            labels={{
              formTitle: t('formTitle'),
              fieldName: t('fieldName'),
              fieldEmail: t('fieldEmail'),
              fieldSubject: t('fieldSubject'),
              fieldMessage: t('fieldMessage'),
              placeholderName: t('placeholderName'),
              placeholderEmail: t('placeholderEmail'),
              placeholderSubject: t('placeholderSubject'),
              placeholderMessage: t('placeholderMessage'),
              submit: t('submit'),
            }}
          />

          {/* ── CONTACT INFO ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {content?.email && (
              <a
                href={`mailto:${content.email}`}
                className="surface"
                style={{ padding: 24, display: 'block', textDecoration: 'none' }}
              >
                <div className="contact-icon">✉</div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 16,
                    color: 'var(--fg-0)',
                    marginBottom: 6,
                  }}
                >
                  {t('emailLabel')}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--fg-2)',
                    borderBottom: '1px solid var(--line-2)',
                    paddingBottom: 2,
                    display: 'inline',
                  }}
                >
                  {content.email}
                </p>
              </a>
            )}

            {content?.whatsapp && (
              <a
                href={`https://wa.me/${String(content.whatsapp).replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="surface"
                style={{ padding: 24, display: 'block', textDecoration: 'none' }}
              >
                <div className="contact-icon">💬</div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 16,
                    color: 'var(--fg-0)',
                    marginBottom: 6,
                  }}
                >
                  {t('whatsappLabel')}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--fg-2)',
                  }}
                >
                  {content.whatsapp as string}
                </p>
                <p style={{ marginTop: 6, fontSize: 12, color: 'var(--fg-3)' }}>
                  {locale === 'en' ? 'Mon–Fri, 9am–6pm (BRT)' : 'Seg–Sex, 09h–18h (BRT)'}
                </p>
              </a>
            )}

            <div className="surface" style={{ padding: 24 }}>
              <div className="contact-icon">📍</div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 16,
                  color: 'var(--fg-0)',
                  marginBottom: 6,
                }}
              >
                {locale === 'en' ? 'Headquarters' : 'Sede'}
              </h4>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                Tania Tereza Carvalho &amp; Cia
                <br />
                Palestras e Publicações LTDA
                <br />
                CNPJ 28.047.524/0001-57
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
