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
async function findGlobal<T>(slug: string, depth = 1): Promise<T> {
  const payload = await getPayload({ config: configPromise })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (payload as any).findGlobal({ slug, depth }) as Promise<T>
}

export async function getOnlineContent(): Promise<OnlineContent> {
  return findGlobal<OnlineContent>('online-content', 2)
}

export async function getAboutContent(): Promise<AboutContent> {
  return findGlobal<AboutContent>('about-content', 1)
}

export async function getContactContent(): Promise<ContactContent> {
  return findGlobal<ContactContent>('contact-content', 1)
}
