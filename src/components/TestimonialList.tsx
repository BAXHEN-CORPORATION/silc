interface Testimonial {
  id: string
  name: string
  quote: string
}

interface TestimonialListProps {
  testimonials: Testimonial[]
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  if (!testimonials.length) return null

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <blockquote
          key={t.id}
          className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
        >
          <span className="font-serif text-4xl leading-none text-[#c9a84c]" aria-hidden="true">
            &ldquo;
          </span>
          <p className="flex-1 text-sm leading-relaxed text-gray-600">{t.quote}</p>
          <footer className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#c9a84c]/30" aria-hidden="true" />
            <cite className="not-italic text-xs font-semibold uppercase tracking-widest text-[#1a2c4e]">
              {t.name}
            </cite>
          </footer>
        </blockquote>
      ))}
    </div>
  )
}
