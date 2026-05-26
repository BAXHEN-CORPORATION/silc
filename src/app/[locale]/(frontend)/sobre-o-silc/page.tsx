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
      <section className="bg-[#1a2c4e] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            {t('eyebrow')}
          </span>
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t('title')}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-[800px] px-6 py-16">
        {Boolean(content?.intro) && (
          <section className="mb-12">
            <RichTextRenderer content={content!.intro} />
          </section>
        )}

        {Boolean(content?.howTheWeekWorks) && (
          <section className="mb-12">
            <div className="mb-2 h-0.5 w-12 bg-[#c9a84c]" aria-hidden="true" />
            <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionWeek')}</h2>
            <RichTextRenderer content={content!.howTheWeekWorks} />
          </section>
        )}

        {Boolean(content?.roles) && (
          <section className="mb-12">
            <div className="mb-2 h-0.5 w-12 bg-[#c9a84c]" aria-hidden="true" />
            <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionRoles')}</h2>
            <RichTextRenderer content={content!.roles} />
          </section>
        )}

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <Link
            href="/silc-presencial/proximos-seminarios"
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <span className="font-semibold text-[#1a2c4e]">{t('ctaUpcoming')}</span>
            </div>
            <span className="text-[#c9a84c]">→</span>
          </Link>
          <Link
            href="/silc-online"
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💻</span>
              <span className="font-semibold text-[#1a2c4e]">{t('ctaOnline')}</span>
            </div>
            <span className="text-[#c9a84c]">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}
