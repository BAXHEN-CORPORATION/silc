/* eslint-disable */
/* ===========================================================
   Ministério Tânia Tereza — Marketing Site UI Kit
   Component primitives, ported from Material Kit Pro's vocabulary
   onto the legacy SILC dark/red theme.
   =========================================================== */

const { useState, useEffect, useRef } = React;

/* ----------------------------------------------------------- */
/* Utilities                                                   */
/* ----------------------------------------------------------- */

const cx = (...xs) => xs.filter(Boolean).join(" ");

/* ----------------------------------------------------------- */
/* Grid — simplified MKP GridContainer / GridItem              */
/* ----------------------------------------------------------- */

function GridContainer({ children, justify, align, gap = 24, style, ...rest }) {
  return (
    <div
      className="mkp-grid"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify || "flex-start",
        alignItems: align || "stretch",
        margin: `0 ${-gap / 2}px`,
        rowGap: gap,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

function GridItem({ children, xs = 12, sm, md, lg, gap = 24, style, ...rest }) {
  const span = lg ?? md ?? sm ?? xs;
  const pct = (span / 12) * 100;
  return (
    <div
      style={{
        flex: `0 0 ${pct}%`,
        maxWidth: `${pct}%`,
        padding: `0 ${gap / 2}px`,
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------- */
/* Button — MKP-shape (uppercase, small text, raised shadow)   */
/* color: default | primary | danger | info | success | warning | white | transparent */
/* size:  sm | md | lg                                         */
/* round | block | simple | justIcon | outlined                */
/* ----------------------------------------------------------- */

function Button({
  children,
  color = "default",
  size = "md",
  round,
  block,
  simple,
  justIcon,
  outlined,
  disabled,
  onClick,
  style,
  className,
  type = "button",
  as = "button",
  href,
  ...rest
}) {
  const Tag = href ? "a" : as;
  const classes = cx(
    "mkp-btn",
    `mkp-btn--${color}`,
    `mkp-btn--${size}`,
    round && "mkp-btn--round",
    block && "mkp-btn--block",
    simple && "mkp-btn--simple",
    justIcon && "mkp-btn--justIcon",
    outlined && "mkp-btn--outlined",
    disabled && "mkp-btn--disabled",
    className
  );
  return (
    <Tag
      className={classes}
      onClick={disabled ? undefined : onClick}
      style={style}
      href={href}
      type={href ? undefined : type}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------- */
/* Card — MKP raised card with optional colored shadow image   */
/* ----------------------------------------------------------- */

function Card({ children, raised = true, plain, className, style }) {
  return (
    <div
      className={cx("mkp-card", raised && "mkp-card--raised", plain && "mkp-card--plain", className)}
      style={style}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, image, color, className, style }) {
  return (
    <div
      className={cx("mkp-card__header", image && "mkp-card__header--image", color && `mkp-card__header--${color}`, className)}
      style={style}
    >
      {children}
    </div>
  );
}

function CardBody({ children, className, style }) {
  return <div className={cx("mkp-card__body", className)} style={style}>{children}</div>;
}

function CardFooter({ children, className, style }) {
  return <div className={cx("mkp-card__footer", className)} style={style}>{children}</div>;
}

/* Colored-shadow image — MKP signature: image is duplicated below itself,
   blurred, to create a colored glow matching the image's tones. */
function ColoredShadowImage({ src, alt, radius = "var(--mkp-radius-card)", style }) {
  return (
    <div className="mkp-img-shadow" style={{ borderRadius: radius, ...style }}>
      <img src={src} alt={alt || ""} style={{ borderRadius: radius }} />
      <div className="mkp-img-shadow__glow" style={{ backgroundImage: `url(${src})`, borderRadius: radius }} />
    </div>
  );
}

/* ----------------------------------------------------------- */
/* InfoArea — MKP feature block (icon + title + description)   */
/* ----------------------------------------------------------- */

function InfoArea({ icon, iconColor = "primary", title, description, vertical = true }) {
  return (
    <div className={cx("mkp-info", vertical && "mkp-info--vertical")}>
      <div className={cx("mkp-info__icon", `mkp-info__icon--${iconColor}`)}>
        <i data-lucide={icon}></i>
      </div>
      <div className="mkp-info__body">
        <h4 className="mkp-info__title">{title}</h4>
        <p className="mkp-info__desc">{description}</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- */
/* CustomInput — MKP underline label input                     */
/* ----------------------------------------------------------- */

function CustomInput({ label, id, type = "text", multiline, rows = 4, value, onChange, fullWidth = true }) {
  const [focus, setFocus] = useState(false);
  const filled = !!value;
  const cls = cx("mkp-input", (focus || filled) && "mkp-input--active", fullWidth && "mkp-input--fw");
  return (
    <div className={cls}>
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea
          id={id} rows={rows} value={value || ""} onChange={onChange}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        />
      ) : (
        <input
          id={id} type={type} value={value || ""} onChange={onChange}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        />
      )}
      <span className="mkp-input__bar" />
    </div>
  );
}

/* ----------------------------------------------------------- */
/* Badge — MKP small pill                                      */
/* ----------------------------------------------------------- */

function Badge({ children, color = "primary" }) {
  return <span className={cx("mkp-badge", `mkp-badge--${color}`)}>{children}</span>;
}

/* ----------------------------------------------------------- */
/* Header — fixed top, color changes on scroll                 */
/* ----------------------------------------------------------- */

function Header({ links, brand, brandLogo, fixed = true, changeColorOnScroll = 200 }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > changeColorOnScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [changeColorOnScroll]);

  return (
    <header className={cx("mkp-header", fixed && "mkp-header--fixed", scrolled && "mkp-header--scrolled")}>
      <div className="mkp-container mkp-header__inner">
        <a href="#" className="mkp-header__brand" aria-label="Ministério Tânia Tereza — Início">
          {brandLogo
            ? <img src={brandLogo} alt={brand} style={{ height: 38, width: "auto" }} />
            : <span>{brand}</span>}
        </a>
        <nav className="mkp-header__links">{links}</nav>
      </div>
    </header>
  );
}

function HeaderLinks({ active = "inicio" }) {
  const items = [
    ["inicio", "Início"],
    ["seminarios", "Seminários"],
    ["cursos", "Cursos"],
    ["livros", "Livros"],
    ["dizimos", "Dízimos e Ofertas"],
    ["agenda", "Agenda"],
  ];
  return (
    <ul className="mkp-nav">
      {items.map(([id, label]) => (
        <li key={id}>
          <a href={`#${id}`} className={cx("mkp-nav__link", active === id && "is-active")}>{label}</a>
        </li>
      ))}
      <li><span className="mkp-nav__divider" /></li>
      <li>
        <button className="mkp-nav__lang" aria-label="Idioma">
          <span>BR</span><span className="mkp-nav__lang-name">Português</span>
        </button>
      </li>
      <li><Button color="white" simple justIcon size="sm" aria-label="Conta"><i data-lucide="user"></i></Button></li>
      <li><Button color="white" simple justIcon size="sm" aria-label="Carrinho"><i data-lucide="shopping-cart"></i></Button></li>
    </ul>
  );
}

/* ----------------------------------------------------------- */
/* Parallax — full-bleed hero with dark filter                 */
/* ----------------------------------------------------------- */

function Parallax({ image, filter = "dark", children, minHeight = "92vh" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.backgroundPosition = `50% ${y * 0.3}px`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      ref={ref}
      className={cx("mkp-parallax", `mkp-parallax--${filter}`)}
      style={{ backgroundImage: `url(${image})`, minHeight }}
    >
      <div className="mkp-parallax__filter" />
      <div className="mkp-container mkp-parallax__content">{children}</div>
    </div>
  );
}

/* ----------------------------------------------------------- */
/* Footer — MKP-flavored three column                          */
/* ----------------------------------------------------------- */

function Footer({ logoSrc, BrandIcon }) {
  return (
    <footer className="mkp-footer">
      <div className="mkp-container">
        <div className="mkp-footer__grid">
          <div className="mkp-footer__col">
            <img src={logoSrc} alt="Ministério Tânia Tereza" style={{ height: 56, width: "auto", marginBottom: 16 }} />
            <h5 className="mkp-footer__title">Ministério Tânia Tereza</h5>
            <p className="mkp-footer__text">CNPJ 28.047.524/0001-57</p>
            <p className="mkp-footer__text">Tania Tereza Carvalho &amp; Cia Palestras e Publicacoes LTDA</p>
            <p className="mkp-footer__text">
              <a href="mailto:ajuda@pastorataniatereza.com">ajuda@pastorataniatereza.com</a>
            </p>
          </div>

          <div className="mkp-footer__col">
            <h5 className="mkp-footer__title">Links úteis</h5>
            <ul className="mkp-footer__links">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#seminarios">Seminários</a></li>
              <li><a href="#cursos">Cursos</a></li>
              <li><a href="#livros">Livros</a></li>
              <li><a href="#agenda">Agenda</a></li>
              <li><a href="#dizimos">Dízimos e Ofertas</a></li>
              <li><a href="#testemunhos">Testemunhos</a></li>
              <li><a href="#contato">Fale Conosco</a></li>
            </ul>
          </div>

          <div className="mkp-footer__col">
            <h5 className="mkp-footer__title">Redes Sociais</h5>
            <div className="mkp-footer__social">
              {[
                ["facebook","Facebook"], ["instagram","Instagram"], ["youtube","Youtube"], ["tiktok","TikTok"],
                ["telegram","Telegram"], ["spotify","Spotify"], ["deezer","Deezer"]
              ].map(([icon, label]) => (
                <a key={label} className="mkp-social__btn" href="#" aria-label={label}>
                  {BrandIcon ? <BrandIcon name={icon} size={16} /> : <i data-lucide={icon === "telegram" ? "send" : icon}></i>}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mkp-footer__bottom">
          <div className="mkp-footer__small">© {new Date().getFullYear()} Ministério Tânia Tereza · Feito com <i data-lucide="heart" style={{ width: 14, height: 14, color: "var(--red-500)" }}></i> em Cristo Jesus.</div>
          <div className="mkp-footer__pay">
            <span className="mkp-footer__badge"><i data-lucide="lock" style={{width:12,height:12}}></i> SITE SEGURO</span>
            {["VISA","MASTER","AMEX","DINERS","ELO","HIPER"].map(b => (
              <span key={b} className="mkp-footer__paychip">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------- */
/* Export to window so sections.jsx can use them               */
/* ----------------------------------------------------------- */

Object.assign(window, {
  cx,
  GridContainer, GridItem,
  Button,
  Card, CardHeader, CardBody, CardFooter, ColoredShadowImage,
  InfoArea,
  CustomInput,
  Badge,
  Header, HeaderLinks,
  Parallax,
  Footer,
});
