import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { OnlineContent } from '@/domain/online/types'

// NOTE: GlobalSlug will include these after running pnpm generate:types.
// Until then, we bypass the type with any since these are valid runtime slugs.

interface AboutContent {
  intro?: unknown
  howTheWeekWorks?: unknown
  roles?: unknown
}

interface ContactContent {
  email?: string | null
  whatsapp?: string | null
  intro?: unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findGlobal<T>(slug: string, locale: string, depth = 1): Promise<T> {
  const payload = await getPayload({ config: configPromise })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (payload as any).findGlobal({ slug, depth, locale }) as Promise<T>
}

export async function getOnlineContent(locale: string): Promise<OnlineContent> {
  return findGlobal<OnlineContent>('online-content', locale, 2)
}

export async function getAboutContent(locale: string): Promise<AboutContent> {
  return findGlobal<AboutContent>('about-content', locale, 1)
}

export async function getContactContent(locale: string): Promise<ContactContent> {
  return findGlobal<ContactContent>('contact-content', locale, 1)
}
