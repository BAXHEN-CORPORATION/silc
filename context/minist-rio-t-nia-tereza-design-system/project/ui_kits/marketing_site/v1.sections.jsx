/* eslint-disable */
/* ===========================================================
   Marketing Site — Page Sections
   These follow MKP's section pattern (large title + lead + grid)
   but use SILC content + the dark/red theme.
   =========================================================== */

/* Components from components.jsx are already top-level globals
   (Babel scripts share scope). Just use them directly. */

const LOGO = "../../assets/logo-ministerio-tania-tereza.png";

/* Generic placeholder image — same color tones as legacy posters
   (we deliberately use a single visual placeholder since we don't
    have the real poster assets). */
/* Stable Unsplash IDs (placeholders — replace with real ministry photos) */
const POSTER_PLACEHOLDER = "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=70";
const CROWD_BG          = "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=2000&q=70";
const PASTORA_PORTRAIT  = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=70";
const PASTOR_COUPLE     = "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?w=800&q=70";
const VIDEO_BANNER_BG   = "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=2000&q=70";

/* Inline brand SVG icons (Lucide has removed many brand glyphs).
   Strokes match Lucide's 1.5px monoline style. */
const BrandIcon = ({ name, size = 16 }) => {
  const paths = {
    facebook:  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    instagram: <><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>,
    youtube:   <><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></>,
    tiktok:    <path d="M20.5 8.5a8 8 0 0 1-4.6-1.46v8.71a6.75 6.75 0 1 1-6.75-6.75c.14 0 .28 0 .42.02v3.4a3.35 3.35 0 1 0 2.93 3.33V2h3.4a5.1 5.1 0 0 0 4.6 4.6z"/>,
    telegram:  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>,
    spotify:   <><circle cx="12" cy="12" r="10"/><path d="M8 11.5c2.5-.5 5.5-.3 8 1M8.5 14c2-.3 4.5-.2 6.5 1M8 9c3-.7 6.5-.4 9 1"/></>,
    deezer:    <path d="M3 17h3v3H3zM8 17h3v3H8zm0-4h3v3H8zM13 17h3v3h-3zm0-4h3v3h-3zm0-4h3v3h-3zM18 17h3v3h-3zm0-4h3v3h-3zm0-4h3v3h-3zm0-4h3v3h-3z"/>,
  };
  const p = paths[name];
  if (!p) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={name === "tiktok" || name === "deezer" || name === "facebook" ? "currentColor" : "none"}
         stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {p}
    </svg>
  );
};

/* ----------------------------------------------------------- */
/* Hero — Parallax + side-by-side: text left, portrait right   */
/* ----------------------------------------------------------- */

function HeroSection() {
  return (
    <Parallax image={CROWD_BG} filter="dark" minHeight="92vh">
      <GridContainer align="center" style={{ minHeight: "70vh" }}>
        <GridItem xs={12} md={7}>
          <div className="hero-kicker" style={{ marginBottom: 8 }}>Pastora</div>
          <h1 className="hero-title">Tânia Tereza</h1>
          <p className="lead" style={{ maxWidth: 560, marginTop: 20, color: "rgba(255,255,255,0.78)" }}>
            Juíza Federal, escritora, palestrante e conferencista Internacional.
            Juntamente com seu esposo, Pastor Otto Teixeira de Carvalho, fundou
            os Ministérios Rhema e Mãos e Coração, e implantou cursos e
            seminários com temas de Libertação e Cura.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <Button color="danger" size="lg" round>
              <i data-lucide="calendar-heart"></i> Seminários
            </Button>
            <Button color="white" size="lg" round outlined>
              <i data-lucide="play"></i> Cursos
            </Button>
          </div>
        </GridItem>
        <GridItem xs={12} md={5}>
          <div className="hero-portrait">
            <img src={PASTOR_COUPLE} alt="Pastora Tânia Tereza e Pastor Otto" />
          </div>
        </GridItem>
      </GridContainer>
    </Parallax>
  );
}

/* ----------------------------------------------------------- */
/* SectionProducts — three InfoAreas (legacy "Ajudando Pessoas")
   This is the SILC analog of MKP's SectionProduct.            */
/* ----------------------------------------------------------- */

function SectionProducts() {
  return (
    <section className="mkp-section" id="produtos">
      <div className="mkp-container">
        <GridContainer justify="center">
          <GridItem xs={12} md={9} style={{ textAlign: "center" }}>
            <h2 className="mkp-section__title">Ajudando Pessoas a Encontrar Cura Espiritual</h2>
            <p className="mkp-section__lead">
              Ministrando temas de Libertação e Cura, Edificação e Restauração
              de Famílias e Formação de Líderes
            </p>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ marginTop: 48 }}>
          <GridItem xs={12} md={4}>
            <InfoArea
              iconColor="lavender"
              icon="check"
              title="Seminários — Presenciais"
              description="SILC é o Seminário Internacional de Libertação e Cura, voltado para pessoas que desejem aprender ou experimentar libertação e cura. SER LIVRE — Seminário de Edificação e Restauração com ensinos sobre o mundo espiritual e princípios de libertação."
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <InfoArea
              iconColor="lavender"
              icon="check"
              title="Cursos Online"
              description="Abordam o conteúdo do SILC — Seminário Internacional de Libertação e Cura, SIFEL — Seminário Internacional de Formação e Especialização de Libertadores, e Rompendo Com as Maldições."
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <InfoArea
              iconColor="lavender"
              icon="check"
              title="Livros"
              description="Todos os livros do Ministério Tânia Tereza, abordando libertação, cura, disciplina e aprendizado, podem ser encontrados aqui no site oficial e enviados para todo o Brasil."
            />
          </GridItem>
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionPastora — profile card (MKP profile card layout:     */
/* image-left + body-right). Replaces SectionTeam.             */
/* ----------------------------------------------------------- */

function SectionPastora() {
  return (
    <section className="mkp-section mkp-section--alt" id="pastora">
      <div className="mkp-container">
        <GridContainer justify="center" align="center" gap={48}>
          <GridItem xs={12} md={5}>
            <ColoredShadowImage src={PASTORA_PORTRAIT} alt="Pastora Tânia Tereza" />
          </GridItem>
          <GridItem xs={12} md={6}>
            <div className="mkp-eyebrow">Sobre a Pastora</div>
            <h2 className="mkp-section__title" style={{ textAlign: "left", marginTop: 12 }}>
              Uma das vozes mais respeitadas no cenário cristão
            </h2>
            <p className="mkp-section__lead" style={{ textAlign: "left", marginTop: 16 }}>
              A <b style={{ color: "var(--fg-0)" }}>Pastora Tânia Tereza Carvalho</b> é uma renomada Juíza
              Federal, escritora, palestrante e conferencista Internacional. Com
              atuação internacional, ministra temas de Libertação e Cura,
              Edificação e Restauração de Famílias e Formação de Líderes.
            </p>
            <p className="mkp-section__lead" style={{ textAlign: "left", marginTop: 12 }}>
              Além de sua trajetória nos ministérios Rhema e Mãos e Coração, a
              Pastora Tânia é a fundadora do <b style={{ color: "var(--fg-0)" }}>SILC — Seminário
              Internacional de Libertação e Cura</b>, uma iniciativa que tem como
              objetivo promover a Vida Plena e Abundante em Cristo Jesus.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["facebook","instagram","youtube","tiktok","telegram","spotify","deezer"].map(i => (
                <Button key={i} simple justIcon color="white" size="sm" aria-label={i}>
                  <BrandIcon name={i} size={18} />
                </Button>
              ))}
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionEvents — seminar grid                                */
/* Inspired by MKP's blog/team grids: 4-col card layout,       */
/* image header with colored shadow, body, footer button.      */
/* ----------------------------------------------------------- */

const EVENTS = [
  { title: "SILC Belo Horizonte", subtitle: "Maio 2026", date: "25 a 29 de maio", stamp: "Inscrições encerradas" },
  { title: "Saindo do Cativeiro Londrina", subtitle: "Junho 2026", date: "5 a 7 de junho" },
  { title: "SER LIVRE — Telêmaco Borba", subtitle: "Paraná · Junho 2026", date: "8 a 10 de junho" },
  { title: "SILC Monte Horebe", subtitle: "São Paulo · Junho 2026", date: "15 a 19 de junho" },
  { title: "SILC Penedo", subtitle: "Julho 2026", date: "6 a 10 de julho" },
  { title: "SIFEL Belenzinho", subtitle: "Rhema São Paulo · Julho 2026", date: "25 a 26 de julho" },
  { title: "SILC Especial Rhema", subtitle: "São Paulo · Julho 2026", date: "27 a 31 de julho" },
  { title: "SILC Joinville", subtitle: "Agosto 2026", date: "3 a 7 de agosto" },
];

function SectionEvents() {
  return (
    <section className="mkp-section" id="seminarios">
      <div className="mkp-container">
        <div className="mkp-eyebrow">
          <i data-lucide="calendar"></i> Próximos Seminários
        </div>
        <h2 className="mkp-section__title" style={{ textAlign: "left", marginTop: 8 }}>
          Encontre um SILC perto de você
        </h2>
        <p className="mkp-section__lead" style={{ textAlign: "left", marginBottom: 32 }}>
          Oito edições confirmadas nos próximos meses, em diferentes cidades do Brasil.
        </p>

        <GridContainer>
          {EVENTS.map((e, i) => (
            <GridItem xs={12} sm={6} md={3} key={i}>
              <Card>
                <CardHeader image>
                  <div className="event-poster">
                    {e.stamp && <span className="event-stamp">{e.stamp}</span>}
                    <img src={POSTER_PLACEHOLDER} alt={e.title} />
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="mkp-card__category"><i data-lucide="map-pin" style={{width:12,height:12}}></i> {e.subtitle}</div>
                  <h4 className="mkp-card__title">{e.title}</h4>
                  <div className="mkp-card__meta">{e.date}</div>
                </CardBody>
                <CardFooter>
                  <Button color="white" outlined block round size="sm">Detalhes</Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionTestimonials — three video cards on the blue panel  */
/* ----------------------------------------------------------- */

const TESTIMONIALS = [
  { name: "Isaaclene Borges Ribeiro", place: "Salvador / Bahia", thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=70" },
  { name: "Ilania", place: "Bélgica", thumb: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=70" },
  { name: "Nileide", place: "Alemanha", thumb: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=70" },
];

function SectionTestimonials() {
  return (
    <section className="mkp-section mkp-section--blue" id="testemunhos">
      <div className="mkp-container">
        <h2 className="mkp-section__title" style={{ textAlign: "left" }}>Testemunhos</h2>
        <p className="mkp-section__lead" style={{ textAlign: "left" }}>
          Testemunhos de pessoas que foram transformadas pela palavra de Deus
        </p>

        <GridContainer style={{ marginTop: 40 }} justify="center">
          {TESTIMONIALS.map((t, i) => (
            <GridItem xs={12} sm={6} md={4} key={i}>
              <div className="testimonial">
                <div className="testimonial__video">
                  <img src={t.thumb} alt={t.name} />
                  <span className="testimonial__play"><i data-lucide="play"></i></span>
                </div>
                <h4 className="testimonial__name">{t.name}</h4>
                <div className="testimonial__place">{t.place}</div>
              </div>
            </GridItem>
          ))}
        </GridContainer>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Button color="white" outlined round size="md">Ver todos</Button>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionBooks — horizontal scroll of books                  */
/* ----------------------------------------------------------- */

const BOOKS = [
  { title: "Propósito x Promiscuidade", price: "R$ 50,00" },
  { title: "O Criador e a Criação",      price: "R$ 50,00" },
  { title: "Livro de Orações",            price: "R$ 50,00" },
  { title: "Curso de Cura e Libertação Vol. 1", price: "R$ 50,00" },
];

function SectionBooks() {
  return (
    <section className="mkp-section" id="livros">
      <div className="mkp-container">
        <div className="mkp-eyebrow"><i data-lucide="book-open"></i> Livros</div>
        <h2 className="mkp-section__title" style={{ textAlign: "left", marginTop: 8 }}>
          Leituras do Ministério
        </h2>
        <p className="mkp-section__lead" style={{ textAlign: "left", marginBottom: 32 }}>
          Enviamos para todo o Brasil.
        </p>

        <GridContainer>
          {BOOKS.map((b, i) => (
            <GridItem xs={12} sm={6} md={3} key={i}>
              <Card>
                <CardHeader image>
                  <div className="book-cover">
                    <Badge color="primary">📖 Físico</Badge>
                    <Badge color="neutral" style={{ marginLeft: 6 }}>Português</Badge>
                    <img src={POSTER_PLACEHOLDER} alt={b.title} />
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className="mkp-card__title">{b.title}</h4>
                  <div className="mkp-card__price">{b.price}</div>
                </CardBody>
                <CardFooter>
                  <Button color="danger" block round size="sm">Comprar</Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionCourses — three online courses                       */
/* ----------------------------------------------------------- */

const COURSES = [
  { title: "Rompendo com as Maldições", subtitle: "Curso Online" },
  { title: "SIFEL Online", subtitle: "Formação de Libertadores" },
  { title: "SILC Online", subtitle: "Seminário Internacional de Libertação e Cura" },
];

function SectionCourses() {
  return (
    <section className="mkp-section" id="cursos">
      <div className="mkp-container">
        <div className="mkp-eyebrow"><i data-lucide="play-circle"></i> Cursos</div>
        <h2 className="mkp-section__title" style={{ textAlign: "left", marginTop: 8 }}>
          Cursos Online com a Pastora
        </h2>
        <p className="mkp-section__lead" style={{ textAlign: "left", marginBottom: 32 }}>
          Estude no seu tempo, onde estiver.
        </p>

        <GridContainer>
          {COURSES.map((c, i) => (
            <GridItem xs={12} sm={6} md={4} key={i}>
              <Card>
                <CardHeader image>
                  <ColoredShadowImage src={POSTER_PLACEHOLDER} alt={c.title} />
                </CardHeader>
                <CardBody>
                  <div className="mkp-card__category">{c.subtitle}</div>
                  <h4 className="mkp-card__title">{c.title}</h4>
                </CardBody>
                <CardFooter>
                  <Button color="white" outlined round block size="sm">Detalhes</Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionLiveCultos — centered CTA section                    */
/* ----------------------------------------------------------- */

function SectionLiveCultos() {
  return (
    <section className="mkp-section mkp-section--alt" id="cultos">
      <div className="mkp-container">
        <GridContainer justify="center">
          <GridItem xs={12} md={8} style={{ textAlign: "center" }}>
            <Badge color="primary">
              <i data-lucide="video" style={{width:12,height:12,marginRight:4}}></i> Cultos Online
            </Badge>
            <h2 className="mkp-section__title" style={{ marginTop: 16 }}>
              Participe dos <span style={{ color: "var(--red-500)" }}>Cultos Ao Vivo</span>
            </h2>
            <p className="mkp-section__lead">
              Todos os sábados, a Apóstola Tânia Tereza ministra cultos
              especiais transmitidos ao vivo pelo YouTube. Participe de onde
              estiver e seja abençoado com uma palavra transformadora.
            </p>
            <div style={{ marginTop: 32 }}>
              <Button color="danger" round size="lg">
                <i data-lucide="list-video"></i> Ver Playlist Culto Ao Vivo
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionVideoBanner — full-bleed editorial banner            */
/* ----------------------------------------------------------- */

function SectionVideoBanner() {
  return (
    <section className="mkp-section" style={{ paddingTop: 0 }}>
      <div className="mkp-container">
        <div className="video-banner" style={{ backgroundImage: `url(${VIDEO_BANNER_BG})` }}>
          <div className="video-banner__inner">
            <div>
              <div className="video-banner__kicker">Pra.</div>
              <h2 className="video-banner__title">Tânia Tereza</h2>
            </div>
            <div className="video-banner__right">
              <div className="video-banner__right-title">Vídeos Semanais</div>
              <Button color="white" outlined round size="sm">
                <i data-lucide="bell" style={{width:14,height:14}}></i> Inscreva-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* SectionContact — MKP "Work with us" contact form            */
/* ----------------------------------------------------------- */

function SectionContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section className="mkp-section" id="contato">
      <div className="mkp-container">
        <GridContainer justify="center">
          <GridItem xs={12} md={8} style={{ textAlign: "center" }}>
            <h2 className="mkp-section__title">Fale Conosco</h2>
            <p className="mkp-section__lead">
              Tem dúvidas sobre um seminário, curso ou livro? Envie sua mensagem
              e nossa equipe responderá em até 24 horas.
            </p>
          </GridItem>
          <GridItem xs={12} md={8}>
            <form
              className="contact-form"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <CustomInput label="Seu nome" id="name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <CustomInput label="Seu e-mail" id="email" type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput label="Sua mensagem" id="message" multiline rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </GridItem>
                <GridItem xs={12} style={{ textAlign: "center", marginTop: 16 }}>
                  <Button type="submit" color="danger" round size="lg" disabled={sent}>
                    {sent ? "Mensagem enviada ✓" : "Enviar Mensagem"}
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* App — full landing page assembly                            */
/* ----------------------------------------------------------- */

function App() {
  // Re-init Lucide icons after mount + any state change (form, scroll)
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 200 ? 1 : 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
  });

  return (
    <div className="silc-app">
      <Header brandLogo={LOGO} brand="Ministério Tânia Tereza" links={<HeaderLinks />} />
      <HeroSection />

      {/* MKP "mainRaised" — lifts the body content over the parallax */}
      <div className="mkp-main mkp-main--raised">
        <SectionProducts />
        <SectionPastora />
        <SectionEvents />
      </div>

      <SectionTestimonials />

      <div className="mkp-main mkp-main--continued">
        <SectionBooks />
        <SectionCourses />
        <SectionLiveCultos />
        <SectionVideoBanner />
        <SectionContact />
      </div>

      <Footer logoSrc={LOGO} BrandIcon={BrandIcon} />
    </div>
  );
}

Object.assign(window, { App });
