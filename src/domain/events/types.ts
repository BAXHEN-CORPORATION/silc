import type { Testimonial, MediaFile } from '../shared/types'

export type EventStatus = 'upcoming' | 'past'

export interface EventPhoto {
  id?: string | null
  photo: MediaFile
  caption?: string | null
}

export interface SilcEvent {
  id: string
  title: string
  slug: string
  status: EventStatus
  startDate: string
  endDate: string
  city: string
  country: string
  shortDescription?: string | null
  description?: unknown
  mainSpeaker?: string | null
  scheduleOverview?: unknown
  price?: string | null
  venue?: string | null
  videoUrl?: string | null
  registrationFormUrl?: string | null
  photos?: EventPhoto[] | null
  testimonials?: Testimonial[] | null
}
