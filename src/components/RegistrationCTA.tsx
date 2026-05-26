interface RegistrationCTAProps {
  href: string
  label?: string
}

export function RegistrationCTA({ href, label = 'Inscreva-se agora' }: RegistrationCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      style={{ width: '100%' }}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  )
}

export function RegistrationCTASecondary({ href, label = 'Saiba mais' }: RegistrationCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn--ghost"
      style={{ width: '100%' }}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  )
}
