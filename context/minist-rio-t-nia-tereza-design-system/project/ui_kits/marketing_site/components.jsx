/* eslint-disable */
/* ===========================================================
   v2 Components — primitives + chrome (Nav, Footer)
   =========================================================== */

const { useState, useEffect, useRef, useMemo } = React

const cx = (...xs) => xs.filter(Boolean).join(' ')

/* ----------------------------- ICONS ---------------------------------
   Inline SVGs (Lucide-style, 1.75 stroke). Keep tiny — only what we need.
   --------------------------------------------------------------- */

const Icon = ({ name, size = 18, className }) => {
  const P = ICONS[name]
  if (!P) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {P}
    </svg>
  )
}

const ICONS = {
  'arrow-right': (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  'arrow-up-right': (
    <>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </>
  ),
  'arrow-left': (
    <>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  play: <polygon points="5 3 19 12 5 21 5 3" />,
  video: (
    <>
      <path d="m22 8-6 4 6 4V8z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  x: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  filter: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <polyline points="21 15 16 10 5 21" />
    </>
  ),
  upload: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </>
  ),
  edit: (
    <>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </>
  ),
  trash: (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </>
  ),
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  heart: (
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  ),
  sparkles: (
    <>
      <path d="M12 3 9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5L12 3z" />
      <path d="M4 4v4M4 4h4M18 19v3M18 19h3" />
    </>
  ),
  shield: <path d="M12 2 4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6l-8-4z" />,
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  'list-checks': (
    <>
      <path d="M10 5h12" />
      <path d="M10 12h12" />
      <path d="M10 19h12" />
      <path d="m3 5 2 2 3-3" />
      <path d="m3 12 2 2 3-3" />
      <path d="m3 19 2 2 3-3" />
    </>
  ),
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  'chevron-down': <polyline points="6 9 12 15 18 9" />,
  'chevron-right': <polyline points="9 18 15 12 9 6" />,
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  'log-out': (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </>
  ),
  'external-link': (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
}

/* ---------------------------- BUTTON ----------------------------- */

function Button({
  children,
  variant = 'primary',
  size = 'md',
  block,
  href,
  onClick,
  type = 'button',
  disabled,
  className,
}) {
  const cls = cx(
    'btn',
    variant === 'ghost' && 'btn--ghost',
    variant === 'link' && 'btn--link',
    variant === 'dark' && 'btn--dark',
    size === 'lg' && 'btn--lg',
    size === 'sm' && 'btn--sm',
    block && 'btn--block',
    className,
  )
  if (href)
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    )
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

/* ----------------------------- NAV ------------------------------- */

function Nav({ route, go }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isPresencial =
    route.startsWith('/proximos') || route.startsWith('/anteriores') || route.startsWith('/evento')

  return (
    <nav className={cx('nav', scrolled && 'is-scrolled')}>
      <div className="container nav__row">
        <a className="nav__brand" onClick={() => go('/')}>
          <span className="nav__brand-mark">
            SILC<span className="dot">.</span>
          </span>
          <span className="nav__brand-sub hide-mobile">
            Seminário Intensivo
            <br />
            de Libertação e Cura
          </span>
        </a>

        <div className="nav__links">
          <a
            className={cx('nav__link nav__primary', route === '/' && 'is-active')}
            onClick={() => go('/')}
          >
            Início
          </a>

          <div className="nav__drop">
            <a className={cx('nav__link has-caret', isPresencial && 'is-active')}>
              SILC Presencial
            </a>
            <div className="nav__drop-menu">
              <div className="nav__drop-item" onClick={() => go('/proximos')}>
                <strong>Próximos Seminários</strong>
                <span className="desc">Lista de eventos futuros, filtre por país</span>
              </div>
              <div className="nav__drop-item" onClick={() => go('/anteriores')}>
                <strong>Seminários Anteriores</strong>
                <span className="desc">Arquivo de edições passadas com fotos</span>
              </div>
            </div>
          </div>

          <a
            className={cx('nav__link', route === '/online' && 'is-active')}
            onClick={() => go('/online')}
          >
            SILC Online
          </a>
          <a
            className={cx('nav__link', route === '/sobre' && 'is-active')}
            onClick={() => go('/sobre')}
          >
            Sobre o SILC
          </a>
          <a
            className={cx('nav__link', route === '/contato' && 'is-active')}
            onClick={() => go('/contato')}
          >
            Contato
          </a>
        </div>

        <div className="nav__cta">
          <a className="nav__lang hide-mobile">BR · PT</a>
          <Button size="sm" onClick={() => go('/proximos')}>
            Inscreva-se <Icon name="arrow-right" size={14} className="arrow" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

/* ----------------------------- FOOTER ---------------------------- */

function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__grid">
          <div>
            <div className="foot__mark">
              SILC<span className="dot">.</span>
            </div>
            <p className="foot__byline">
              Seminário Intensivo de Libertação e Cura — fundado pela Pastora Tânia Tereza, sediado
              no Brasil, ministrado em todo o mundo.
            </p>
          </div>

          <div className="foot__col">
            <h5>SILC Presencial</h5>
            <ul>
              <li>
                <a onClick={() => go('/proximos')}>Próximos Seminários</a>
              </li>
              <li>
                <a onClick={() => go('/anteriores')}>Seminários Anteriores</a>
              </li>
              <li>
                <a onClick={() => go('/evento/silc-bh-2026')}>Página de evento (exemplo)</a>
              </li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>SILC Online</h5>
            <ul>
              <li>
                <a onClick={() => go('/online')}>Sobre o curso</a>
              </li>
              <li>
                <a onClick={() => go('/online#inscricao')}>Inscreva-se</a>
              </li>
              <li>
                <a onClick={() => go('/sobre')}>Sobre o SILC</a>
              </li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>Equipe central</h5>
            <ul>
              <li>
                <a onClick={() => go('/contato')}>Contato · WhatsApp</a>
              </li>
              <li>
                <a href="mailto:ajuda@pastorataniatereza.com">ajuda@pastorataniatereza.com</a>
              </li>
              <li>
                <a onClick={() => go('/admin')}>Área administrativa</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <span>
            © {new Date().getFullYear()} Ministério Tânia Tereza · CNPJ 28.047.524/0001-57
          </span>
          <span>
            SILC <em className="italic-serif">·</em> Sete dias que podem mudar uma vida.
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------- SHARED ---------------------------- */

function Eyebrow({ children, plain }) {
  return <span className={cx('eyebrow', plain && 'eyebrow--plain')}>{children}</span>
}

function SectionHead({ eyebrow, title, action }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && (
          <div style={{ marginBottom: 16 }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h2 className="h2">{title}</h2>
      </div>
      {action}
    </div>
  )
}

/* Country chip with flag (emoji proxy is acceptable in prototype) */
function CountryChip({ code, name, active, count, onClick, size = 'md' }) {
  return (
    <button className={cx('chip', active && 'is-active')} onClick={onClick}>
      <span className="flag-chip__emoji">{FLAGS[code] || '🌎'}</span>
      <span>{name}</span>
      {count != null && <span className="chip__count">{count}</span>}
    </button>
  )
}
const FLAGS = {
  BR: '🇧🇷',
  US: '🇺🇸',
  PT: '🇵🇹',
  AR: '🇦🇷',
  DE: '🇩🇪',
  AO: '🇦🇴',
  MZ: '🇲🇿',
  PY: '🇵🇾',
  IT: '🇮🇹',
  JP: '🇯🇵',
  ALL: '🌎',
}

/* Expose globals */
Object.assign(window, {
  cx,
  Icon,
  Button,
  Nav,
  Footer,
  Eyebrow,
  SectionHead,
  CountryChip,
  FLAGS,
})
