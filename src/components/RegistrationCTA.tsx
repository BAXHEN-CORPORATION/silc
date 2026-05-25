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
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1a2c4e] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#243d6a] hover:shadow-lg active:scale-[0.98]"
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
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#c9a84c] px-6 py-3.5 text-sm font-semibold text-[#1a2c4e] transition-all hover:bg-[#c9a84c] hover:text-[#1a2c4e] active:scale-[0.98]"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  )
}
