import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getContactContent } from '@/application/queries/getGlobals'
import RichTextRenderer from '@/components/RichTextRenderer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

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
    <>
      <section className="bg-[#1a2c4e] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            {t('eyebrow')}
          </span>
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t('title')}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            {Boolean(content?.intro) && (
              <div className="mb-8">
                <RichTextRenderer content={content!.intro} />
              </div>
            )}
            <div className="flex flex-col gap-4">
              {content?.email && (
                <a
                  href={`mailto:${content.email}`}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">{t('emailLabel')}</p>
                    <p className="text-sm font-semibold text-[#1a2c4e]">{content.email}</p>
                  </div>
                </a>
              )}
              {content?.whatsapp && (
                <a
                  href={`https://wa.me/${content.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">{t('whatsappLabel')}</p>
                    <p className="text-sm font-semibold text-[#1a2c4e]">{content.whatsapp}</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('formTitle')}</h2>
            <form className="flex flex-col gap-5" data-testid="contact-form">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">{t('fieldName')}</Label>
                <Input id="name" name="name" type="text" required placeholder={t('placeholderName')} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">{t('fieldEmail')}</Label>
                <Input id="email" name="email" type="email" required placeholder={t('placeholderEmail')} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">{t('fieldSubject')}</Label>
                <Input id="subject" name="subject" type="text" placeholder={t('placeholderSubject')} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">{t('fieldMessage')}</Label>
                <Textarea id="message" name="message" required rows={5} placeholder={t('placeholderMessage')} />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1a2c4e] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#243d6a] active:scale-[0.98]"
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
