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
    <div className="grid--3">
      {testimonials.map((item) => (
        <div key={item.id} className="tcard">
          <p className="tcard__quote">{item.quote}</p>
          <div className="tcard__person">
            <div>
              <p className="tcard__name">{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
