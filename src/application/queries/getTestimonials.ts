import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Testimonial } from '@/domain/shared/types'

export async function getTestimonials(locale: string, limit = 3): Promise<Testimonial[]> {
  const payload = await getPayload({ config: configPromise })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await (payload as any).find({
    collection: 'testimonials',
    limit,
    depth: 0,
    locale,
  })
  return result.docs as Testimonial[]
}
