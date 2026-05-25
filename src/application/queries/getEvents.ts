import { getPayload } from 'payload'
import type { Where } from 'payload'
import configPromise from '@payload-config'
import type { SilcEvent } from '@/domain/events/types'

// NOTE: 'events' will be a valid CollectionSlug after running pnpm generate:types.
// The eslint-disable-next-line below is intentional until types are regenerated.
async function findEvents(where: Where, sort: string, limit: number): Promise<SilcEvent[]> {
  const payload = await getPayload({ config: configPromise })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await (payload as any).find({ collection: 'events', where, sort, limit, depth: 2 })
  return result.docs as SilcEvent[]
}

export async function getUpcomingEvents(country?: string): Promise<SilcEvent[]> {
  const where: Where = { status: { equals: 'upcoming' } }
  if (country) where['country'] = { equals: country }
  return findEvents(where, 'startDate', 100)
}

export async function getPastEvents(year?: number, country?: string): Promise<SilcEvent[]> {
  const andClauses: Where[] = [{ status: { equals: 'past' } }]

  if (year) {
    andClauses.push({ startDate: { greater_than_equal: `${year}-01-01T00:00:00.000Z` } })
    andClauses.push({ startDate: { less_than: `${year + 1}-01-01T00:00:00.000Z` } })
  }
  if (country) andClauses.push({ country: { equals: country } })

  return findEvents({ and: andClauses }, '-startDate', 200)
}

export async function getEventBySlug(slug: string): Promise<SilcEvent | null> {
  const events = await findEvents({ slug: { equals: slug } }, 'startDate', 1)
  return events[0] ?? null
}

export async function getUpcomingEventCountries(): Promise<string[]> {
  const events = await findEvents({ status: { equals: 'upcoming' } }, 'country', 1000)
  return [...new Set(events.map((e) => e.country))].filter(Boolean).sort()
}

export async function getPastEventYears(): Promise<number[]> {
  const events = await findEvents({ status: { equals: 'past' } }, 'startDate', 1000)
  const years = [...new Set(events.map((e) => new Date(e.startDate).getFullYear()).filter((y) => !isNaN(y)))]
  return years.sort((a, b) => b - a)
}

export async function getPastEventCountries(): Promise<string[]> {
  const events = await findEvents({ status: { equals: 'past' } }, 'country', 1000)
  return [...new Set(events.map((e) => e.country))].filter(Boolean).sort()
}

