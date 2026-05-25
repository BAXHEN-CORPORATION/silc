import type { Testimonial } from '../shared/types'

export interface OnlineContent {
  introduction?: unknown
  howItWorks?: unknown
  whatIsIncluded?: unknown
  format?: string | null
  duration?: string | null
  differenceFromPresencial?: unknown
  videoUrl?: string | null
  registrationFormUrl?: string | null
  testimonials?: Testimonial[] | null
}
