export interface Testimonial {
  id: string
  name: string
  quote: string
  eventType?: 'presencial' | 'online'
}

export interface MediaFile {
  id: string
  url?: string | null
  alt: string
  width?: number | null
  height?: number | null
  filename?: string | null
}
