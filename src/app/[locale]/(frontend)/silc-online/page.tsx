import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getOnlineContent } from '@/application/queries/getGlobals'
import { RegistrationCTA } from '@/components/RegistrationCTA'
import TestimonialList from '@/components/TestimonialList'
import RichTextRenderer from '@/components/RichTextRenderer'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Online' })
  return { title: `${t('eyebrow')} – SILC` }
}

export default async function SilcOnlinePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Online')

  const content = await getOnlineContent(locale).catch(() => null)
  const testimonials = ((content?.testimonials ?? []) as Array<{ id: string; name: string; quote: string }>)

  const sections = [
    { key: 'introduction', title: t('sectionIntro') },
    { key: 'howItWorks', title: t('sectionHow') },
    { key: 'whatIsIncluded', title: t('sectionIncluded') },
    { key: 'differenceFromPresencial', title: t('sectionDiff') },
  ] as const

  return (
    <>
      <section className="bg-[#1a2c4e] px-6 py-24" data-testid="online-hero">
        <div className="mx-auto max-w-[1200px]">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            {t('eyebrow')}
          </span>
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t('title')}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">{t('description')}</p>
          {content?.registrationFormUrl && (
            <div className="mt-8 max-w-xs">
              <RegistrationCTA href={content.registrationFormUrl as string} label={t('ctaLabel')} />
            </div>
          )}
        </div>
      </section>

      {(content?.format || content?.duration) && (
        <div className="border-b bg-[#faf8f3]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap divide-x divide-gray-200">
            {content.format && (
              <div className="flex flex-col items-center px-10 py-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{t('format')}</span>
                <span className="mt-1 text-base font-semibold text-[#1a2c4e]">{content.format}</span>
              </div>
            )}
            {content.duration && (
              <div className="flex flex-col items-center px-10 py-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{t('duration')}</span>
                <span className="mt-1 text-base font-semibold text-[#1a2c4e]">{content.duration}</span>
              </div>
            )}
            <div className="flex flex-col items-center px-10 py-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{t('access')}</span>
              <span className="mt-1 text-base font-semibold text-[#1a2c4e]">{t('global')}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[800px] px-6 py-16">
        {Boolean(content?.videoUrl) && (
          <div className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <iframe
                src={content!.videoUrl as string}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={t('eyebrow')}
                className="absolute inset-0 size-full"
              />
            </div>
          </div>
        )}

        {sections.map(({ key, title }) => {
          const value = content?.[key as keyof typeof content]
          if (!Boolean(value)) return null
          return (
            <section key={key} className="mb-12">
              <div className="mb-2 h-0.5 w-12 bg-[#c9a84c]" aria-hidden="true" />
              <h2 className="mb-4 font-serif text-2xl font-semibold text-[#1a2c4e]">{title}</h2>
              <RichTextRenderer content={value} />
            </section>
          )
        })}

        {testimonials.length > 0 && (
          <section className="mb-12">
            <div className="mb-2 h-0.5 w-12 bg-[#c9a84c]" aria-hidden="true" />
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#1a2c4e]">{t('sectionTestimonials')}</h2>
            <TestimonialList testimonials={testimonials} />
          </section>
        )}

        {content?.registrationFormUrl && (
          <div className="rounded-2xl bg-[#1a2c4e] p-10 text-center" data-testid="registration-cta">
            <h2 className="font-serif text-2xl font-bold text-white">{t('ctaTitle')}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{t('ctaNote')}</p>
            <div className="mt-8 mx-auto max-w-xs">
              <RegistrationCTA href={content.registrationFormUrl as string} label={t('ctaLabel')} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
