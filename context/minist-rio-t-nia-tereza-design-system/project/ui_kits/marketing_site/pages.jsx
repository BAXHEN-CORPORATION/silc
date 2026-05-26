/* eslint-disable */
/* ===========================================================
   v2 Public Pages
   Home · Próximos · Anteriores · EventoDetalhe · Online · Sobre · Contato
   =========================================================== */

/* ----------------------------- STOCK PHOTOS -----------------------
   Stable Unsplash photo IDs. Replace with real ministry photos when
   shared (see assets/ for placeholders).
   --------------------------------------------------------------- */
const PHOTOS = {
  hands_worship:  "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1600&q=70",
  crowd_dark:     "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=2000&q=70",
  prayer:         "https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=1200&q=70",
  candle:         "https://images.unsplash.com/photo-1518551933037-91b2f5f229cc?w=1200&q=70",
  cross_light:    "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&q=70",
  conference:     "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=70",
  laptop:         "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=70",
  worship_band:   "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=70",
  church_interior:"https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=1600&q=70",
  arms_up:        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=70",
  bible:          "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=70",
  retreat:        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=70",
  baptism:        "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1200&q=70",
  hands_held:     "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=1200&q=70",
  woman_pray:     "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=70",
  man_thinking:   "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=70",
  young_woman:    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=70",
};

/* ----------------------------- DATA ------------------------------ */

const EVENTS = [
  { id: "silc-bh-2026",      title: "SILC Belo Horizonte",       city: "Belo Horizonte", country: "BR", country_name: "Brasil",  date: "25–29 Maio 2026",     status: "open",   photo: PHOTOS.crowd_dark,
    desc: "Edição em parceria com a Igreja Batista Geladomash. Inscrições encerram em 5 dias." },
  { id: "silc-londrina-2026", title: "Saindo do Cativeiro Londrina", city: "Londrina", country: "BR", country_name: "Brasil",  date: "5–7 Junho 2026",       status: "open",   photo: PHOTOS.candle,
    desc: "Edição especial de 3 dias com foco em libertação familiar." },
  { id: "ser-livre-pr-2026",  title: "SER LIVRE — Telêmaco Borba", city: "Telêmaco Borba", country: "BR", country_name: "Brasil", date: "8–10 Junho 2026",     status: "open",   photo: PHOTOS.cross_light,
    desc: "Seminário de Edificação e Restauração com ensinos sobre o mundo espiritual." },
  { id: "silc-sp-2026",      title: "SILC Monte Horebe",          city: "São Paulo",      country: "BR", country_name: "Brasil",  date: "15–19 Junho 2026",   status: "open",   photo: PHOTOS.worship_band,
    desc: "Cinco dias intensivos no Espaço Monte Horebe, São Paulo." },
  { id: "silc-lisboa-2026",  title: "SILC Lisboa",                city: "Lisboa",         country: "PT", country_name: "Portugal", date: "20–24 Junho 2026",   status: "open",   photo: PHOTOS.church_interior,
    desc: "A primeira edição em Portugal de 2026." },
  { id: "silc-penedo-2026",  title: "SILC Penedo",                city: "Penedo",         country: "BR", country_name: "Brasil",  date: "6–10 Julho 2026",    status: "open",   photo: PHOTOS.retreat,
    desc: "Edição em hotel-retiro em Itatiaia, Rio de Janeiro." },
  { id: "sifel-sp-2026",     title: "SIFEL Belenzinho",           city: "São Paulo",      country: "BR", country_name: "Brasil",  date: "25–26 Julho 2026",   status: "open",   photo: PHOTOS.conference,
    desc: "SIFEL — formação e especialização de libertadores." },
  { id: "silc-buenos-2026",  title: "SILC Buenos Aires",          city: "Buenos Aires",   country: "AR", country_name: "Argentina", date: "5–9 Agosto 2026", status: "open",   photo: PHOTOS.bible,
    desc: "Primeira edição em espanhol, com tradução simultânea." },
  { id: "silc-joinville-2026", title: "SILC Joinville",           city: "Joinville",      country: "BR", country_name: "Brasil",  date: "3–7 Agosto 2026",    status: "open",   photo: PHOTOS.arms_up,
    desc: "Edição beneficente — Santa Catarina." },
];

const PAST_EVENTS = [
  { year: 2024, items: [
    { id: "silc-sp-out-2024", city: "São Paulo, BR",       date: "Out 2024", photo: PHOTOS.crowd_dark },
    { id: "silc-rj-2024",     city: "Rio de Janeiro, BR",  date: "Set 2024", photo: PHOTOS.candle },
    { id: "silc-lis-2024",    city: "Lisboa, PT",          date: "Jul 2024", photo: PHOTOS.church_interior },
    { id: "silc-mia-2024",    city: "Miami, US",           date: "Mai 2024", photo: PHOTOS.conference },
    { id: "silc-bsb-2024",    city: "Brasília, BR",        date: "Mar 2024", photo: PHOTOS.cross_light },
    { id: "silc-poa-2024",    city: "Porto Alegre, BR",    date: "Fev 2024", photo: PHOTOS.worship_band },
  ]},
  { year: 2023, items: [
    { id: "silc-bh-2023",     city: "Belo Horizonte, BR",  date: "Nov 2023", photo: PHOTOS.crowd_dark },
    { id: "silc-luanda-2023", city: "Luanda, AO",          date: "Set 2023", photo: PHOTOS.bible },
    { id: "silc-rom-2023",    city: "Roma, IT",            date: "Jul 2023", photo: PHOTOS.church_interior },
    { id: "silc-sp-mai-2023", city: "São Paulo, BR",       date: "Mai 2023", photo: PHOTOS.conference },
    { id: "silc-pa-2023",     city: "Pará, BR",            date: "Mar 2023", photo: PHOTOS.retreat },
  ]},
  { year: 2022, items: [
    { id: "silc-fortaleza-2022", city: "Fortaleza, BR",     date: "Out 2022", photo: PHOTOS.cross_light },
    { id: "silc-mz-2022",        city: "Maputo, MZ",        date: "Ago 2022", photo: PHOTOS.candle },
    { id: "silc-sp-jul-2022",    city: "São Paulo, BR",     date: "Jul 2022", photo: PHOTOS.crowd_dark },
    { id: "silc-rj-mar-2022",    city: "Rio de Janeiro, BR",date: "Mar 2022", photo: PHOTOS.worship_band },
  ]},
];

const TESTEMUNHOS = [
  { name: "Isaaclene B. Ribeiro", place: "Salvador, BR",  thumb: PHOTOS.young_woman, quote: "Cheguei carregando 30 anos de mágoa. Saí livre — e quem me conhece sabe a transformação." },
  { name: "Ilania M.",            place: "Bruxelas, BE",  thumb: PHOTOS.woman_pray,  quote: "O SILC me devolveu o meu casamento. Foram sete dias que mudaram a história da minha família." },
  { name: "Nileide R.",           place: "Frankfurt, DE", thumb: PHOTOS.man_thinking,quote: "Eu pensei que iria como ouvinte. Voltei para a Alemanha como uma pessoa nova." },
];

/* ----------------------------- HOME ------------------------------ */

function HomePage({ go }) {
  return (
    <>
      {/* HERO ------------------------------------------------------- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__bg-photo" style={{ backgroundImage: `url(${PHOTOS.hands_worship})` }} />
        <div className="container hero__grid">
          <div>
            <div className="hero__since">
              <span className="dash" />
              <span>SEMINÁRIO INTENSIVO DE CURA E LIBERTAÇÃO · DESDE 1995</span>
            </div>
            <h1 className="display hero__title">
              Sete dias que podem<br/>
              <span className="red-italic">transformar</span> sua vida<br/>
              em Cristo.
            </h1>
            <p className="lead hero__lead">
              O SILC é um encontro intensivo — presencial ou online — onde Deus quebra ciclos,
              restaura famílias e cura feridas profundas. Mais de 100 mil pessoas já participaram.
            </p>

            <div className="path-cards">
              <button className="path-card is-primary" onClick={() => go("/proximos")}>
                <div className="path-card__kind">
                  <span className="path-card__kind-label">Caminho A · Presencial</span>
                  <Icon name="map-pin" size={18} />
                </div>
                <div className="path-card__title">Quero participar<br/>presencialmente</div>
                <div className="path-card__desc">Sete dias em uma cidade brasileira ou internacional, com equipe completa de cobertura.</div>
                <div className="path-card__foot">
                  <span>9 cidades em 2026</span>
                  <span className="path-card__cta">Ver agenda <Icon name="arrow-right" size={14} /></span>
                </div>
              </button>

              <button className="path-card" onClick={() => go("/online")}>
                <div className="path-card__kind">
                  <span className="path-card__kind-label">Caminho B · Online</span>
                  <Icon name="monitor" size={18} />
                </div>
                <div className="path-card__title">Fazer o SILC<br/>online</div>
                <div className="path-card__desc">No seu ritmo, em qualquer lugar do mundo. Conteúdo completo + suporte da equipe central.</div>
                <div className="path-card__foot">
                  <span>Comece quando quiser</span>
                  <span className="path-card__cta">Saber mais <Icon name="arrow-right" size={14} /></span>
                </div>
              </button>
            </div>
          </div>

          <aside className="hero__side">
            <div className="hero__photo"><img src={PHOTOS.arms_up} alt="" /></div>
            <blockquote className="hero__quote">
              Eu pensei que iria como ouvinte. Voltei como uma pessoa nova.
            </blockquote>
            <div className="hero__quote-cite">Nileide R. · SILC Frankfurt, 2024</div>
          </aside>
        </div>
      </section>

      {/* STATS ----------------------------------------------------- */}
      <section className="stats">
        <div className="container stats__grid">
          {[
            ["30", "+ anos", "Desde a primeira edição, em 1995"],
            ["100", "k+",   "Vidas alcançadas no Brasil e no exterior"],
            ["50", "+ países", "Onde já ministramos o SILC"],
            ["9",  "",       "Cidades confirmadas em 2026"],
          ].map(([n, unit, label], i) => (
            <div key={i}>
              <div className="stat__num">{n}<span className="unit">{unit}</span></div>
              <div className="stat__label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE É ---------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>O que é o SILC</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>Um encontro intensivo,<br/>uma equipe inteira em cobertura.</h2>
            </div>
            <Button variant="ghost" onClick={() => go("/sobre")}>
              Como funciona uma semana <Icon name="arrow-right" size={14} className="arrow" />
            </Button>
          </div>
        </div>

        <div className="container">
          <div className="three-cols">
            <div>
              <div className="three-cols__num">01 · Formato</div>
              <h3 className="h3 three-cols__title">Sete dias de imersão</h3>
              <p className="body three-cols__body">Manhã, tarde e noite — ministrações, ministração pessoal, e tempo para Deus tratar o que precisa ser tratado em você.</p>
            </div>
            <div>
              <div className="three-cols__num">02 · Equipe</div>
              <h3 className="h3 three-cols__title">Preletor, conselheiros e intercessores</h3>
              <p className="body three-cols__body">Mais de 40 ministros voluntários por edição: o preletor principal ensina, os conselheiros ministram individualmente, os intercessores cobrem em oração.</p>
            </div>
            <div>
              <div className="three-cols__num">03 · Resultado</div>
              <h3 className="h3 three-cols__title">Cura, libertação, restauração</h3>
              <p className="body three-cols__body">Você sai com ferramentas práticas para a sua caminhada — e, na maioria dos casos, com áreas inteiras da sua vida visivelmente diferentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT --------------------------------------------- */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Próximo SILC</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>Belo Horizonte · Maio 2026</h2>
            </div>
            <Button variant="link" onClick={() => go("/proximos")}>
              Ver todos os 9 seminários <Icon name="arrow-right" size={14} className="arrow" />
            </Button>
          </div>

          <div className="featured">
            <div className="featured__photo" style={{ backgroundImage: `url(${PHOTOS.crowd_dark})` }}>
              <div className="featured__photo-meta">
                <span className="flag-chip"><span className="flag-chip__emoji">🇧🇷</span><span>Brasil</span></span>
                <span className="flag-chip"><Icon name="users" size={12} /><span>~600 participantes</span></span>
              </div>
            </div>
            <div className="featured__body">
              <div className="featured__date">25–29 DE MAIO DE 2026 · 5 DIAS</div>
              <h3 className="h2 featured__title">SILC Belo Horizonte</h3>
              <p className="body featured__body-text">
                Edição em parceria com a Igreja Batista Geladomash. Inclui ministrações da Pastora Tânia Tereza, equipe completa de conselheiros, e dois dias de ministração pessoal individualizada.
              </p>
              <div className="featured__meta">
                <div className="featured__meta-item"><Icon name="map-pin" size={14} /><strong>Hotel Geladomash, BH</strong></div>
                <div className="featured__meta-item"><Icon name="clock" size={14} /><strong>09:00 – 22:00 / dia</strong></div>
                <div className="featured__meta-item"><Icon name="users" size={14} /><strong>Inscrições abertas</strong></div>
              </div>
              <div className="featured__cta">
                <Button onClick={() => go("/evento/silc-bh-2026")}>
                  Ver detalhes & inscrever <Icon name="arrow-right" size={14} className="arrow" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE ---------------------------------------------------- */}
      <section className="section--bleed">
        <div className="container" style={{ paddingBottom: 24 }}>
          <Eyebrow>Onde já ministramos</Eyebrow>
        </div>
        <div className="marquee__wrap">
          <div className="marquee">
            <span>São Paulo</span><span>Lisboa</span><span>Frankfurt</span><span>Luanda</span><span>Buenos Aires</span><span>Maputo</span><span>Miami</span><span>Belo Horizonte</span><span>Roma</span><span>Brasília</span>
            <span>São Paulo</span><span>Lisboa</span><span>Frankfurt</span><span>Luanda</span><span>Buenos Aires</span><span>Maputo</span><span>Miami</span><span>Belo Horizonte</span><span>Roma</span><span>Brasília</span>
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS ----------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Testemunhos</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>O que diz quem já fez.</h2>
            </div>
            <Button variant="link">Ver todos <Icon name="arrow-right" size={14} className="arrow" /></Button>
          </div>
          <div className="grid grid--3">
            {TESTEMUNHOS.map((t, i) => (
              <div key={i} className="tcard">
                <p className="tcard__quote">{t.quote}</p>
                <div className="tcard__person">
                  <img className="tcard__avatar" src={t.thumb} alt={t.name} />
                  <div>
                    <div className="tcard__name">{t.name}</div>
                    <div className="tcard__place">{t.place}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA ------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="display" style={{ marginTop: 20, fontSize: "clamp(36px,4.6vw,72px)" }}>
              Como você quer fazer o SILC?
            </h2>
          </div>
          <div className="path-cards" style={{ maxWidth: 920, margin: "0 auto" }}>
            <button className="path-card is-primary" onClick={() => go("/proximos")}>
              <div className="path-card__kind"><span className="path-card__kind-label">Presencial</span></div>
              <div className="path-card__title">Quero participar<br/>presencialmente</div>
              <span className="path-card__cta">Ver próximos seminários <Icon name="arrow-right" size={14} /></span>
            </button>
            <button className="path-card" onClick={() => go("/online")}>
              <div className="path-card__kind"><span className="path-card__kind-label">Online</span></div>
              <div className="path-card__title">Fazer o SILC<br/>online</div>
              <span className="path-card__cta">Saber mais <Icon name="arrow-right" size={14} /></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* --------------------------- PRÓXIMOS ---------------------------- */

function ProximosPage({ go }) {
  const [country, setCountry] = useState("ALL");
  const filtered = country === "ALL" ? EVENTS : EVENTS.filter(e => e.country === country);
  const countries = [
    ["ALL", "Todos os países"],
    ...Array.from(new Set(EVENTS.map(e => e.country))).map(code => [code, EVENTS.find(e => e.country === code).country_name])
  ];
  const counts = (c) => c === "ALL" ? EVENTS.length : EVENTS.filter(e => e.country === c).length;

  return (
    <>
      <section style={{ padding: "180px 0 60px" }}>
        <div className="container">
          <Eyebrow>SILC Presencial</Eyebrow>
          <h1 className="h1" style={{ marginTop: 20 }}>Próximos Seminários</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            9 edições confirmadas para 2026 — Brasil, Portugal e Argentina. Não encontrou uma cidade próxima?
            {" "}<a onClick={() => go("/online")} style={{ color: "var(--red-500)", borderBottom: "1px solid var(--red-500)" }}>Faça o SILC Online</a>.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="events-toolbar">
            <div className="chips">
              {countries.map(([code, name]) => (
                <CountryChip key={code} code={code} name={name} active={country === code} count={counts(code)} onClick={() => setCountry(code)} />
              ))}
            </div>
            <div className="small">{filtered.length} evento{filtered.length !== 1 ? "s" : ""}</div>
          </div>

          <div className="events">
            {filtered.map(e => (
              <article key={e.id} className="evt" onClick={() => go(`/evento/${e.id}`)}>
                <div className="evt__photo" style={{ backgroundImage: `url(${e.photo})` }}>
                  <span className="flag-chip evt__flag"><span className="flag-chip__emoji">{FLAGS[e.country]}</span><span>{e.country_name}</span></span>
                  <span className="evt__status is-open">Inscrições abertas</span>
                </div>
                <div className="evt__body">
                  <div className="evt__date">{e.date.toUpperCase()}</div>
                  <h3 className="evt__title">{e.title}</h3>
                  <div className="evt__where">{e.city}, {e.country_name}</div>
                  <p className="small" style={{ marginTop: 4 }}>{e.desc}</p>
                  <div className="evt__foot">
                    <span className="small">5 dias</span>
                    <span className="evt__detail-link">Ver detalhes <Icon name="arrow-right" size={14} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------- SEMINÁRIOS ANTERIORES ------------------ */

function AnterioresPage({ go }) {
  const [country, setCountry] = useState("ALL");
  const all = PAST_EVENTS;
  return (
    <>
      <section style={{ padding: "180px 0 60px" }}>
        <div className="container">
          <Eyebrow>SILC Presencial</Eyebrow>
          <h1 className="h1" style={{ marginTop: 20 }}>Seminários Anteriores</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Encontre o SILC que você participou. Veja datas, cidade e galeria de fotos da edição.
          </p>

          <div className="events-toolbar" style={{ marginTop: 48 }}>
            <div className="chips">
              <CountryChip code="ALL" name="Todos os países" active={country === "ALL"} count={null} onClick={() => setCountry("ALL")} />
              <CountryChip code="BR"  name="Brasil"          active={country === "BR"}  onClick={() => setCountry("BR")} />
              <CountryChip code="PT"  name="Portugal"        active={country === "PT"}  onClick={() => setCountry("PT")} />
              <CountryChip code="US"  name="Estados Unidos"  active={country === "US"}  onClick={() => setCountry("US")} />
              <CountryChip code="AO"  name="Angola"          active={country === "AO"}  onClick={() => setCountry("AO")} />
              <CountryChip code="IT"  name="Itália"          active={country === "IT"}  onClick={() => setCountry("IT")} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          {all.map(g => (
            <div key={g.year} className="archive-year">
              <div className="archive-year__num">{g.year}</div>
              <div className="archive-year__list">
                {g.items.map(it => (
                  <article key={it.id} className="archive-card" onClick={() => go(`/evento/${it.id}?past=1`)}>
                    <div className="archive-card__thumb" style={{ backgroundImage: `url(${it.photo})` }} />
                    <div className="archive-card__body">
                      <div className="archive-card__where">{it.city}</div>
                      <div className="archive-card__date">{it.date.toUpperCase()}</div>
                      <a className="small" style={{ marginTop: 6, color: "var(--fg-0)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                        Ver fotos <Icon name="arrow-right" size={12} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ------------------------- EVENTO DETALHE ----------------------- */

function EventoDetailPage({ go, id, isPast }) {
  const evt = EVENTS.find(e => e.id === id) || EVENTS[0];

  return (
    <>
      <section className="evd-hero">
        <div className="container">
          <div className="evd-hero__row">
            <div>
              <Eyebrow>{isPast ? "Edição encerrada · Galeria abaixo" : "Próximo seminário · Inscrições abertas"}</Eyebrow>
              <h1 className="display evd-hero__title" style={{ fontSize: "clamp(40px,5vw,80px)" }}>
                {evt.title}
              </h1>
              <div className="evd-hero__where">
                <strong>{evt.city}, {evt.country_name}</strong> · {evt.date}
              </div>
              <div className="evd-hero__cta">
                {isPast ? (
                  <>
                    <Button variant="ghost" onClick={() => go("/proximos")}>Ver próximos SILCs <Icon name="arrow-right" size={14} className="arrow" /></Button>
                    <Button variant="link"><Icon name="image" size={14} /> Ir para a galeria</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => alert("Abrir formulário de inscrição")}>
                      Inscreva-se agora <Icon name="arrow-right" size={14} className="arrow" />
                    </Button>
                    <Button variant="ghost"><Icon name="video" size={14} /> Ver vídeo (2min)</Button>
                  </>
                )}
              </div>
            </div>
            <div className="hero__photo" style={{ aspectRatio: "4/5" }}>
              <img src={evt.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* O que acontece ----------------------------------------- */}
      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="label">A semana</div>
              <h2 className="h2" style={{ marginTop: 12 }}>O que acontece durante o SILC.</h2>
            </div>
            <ol className="timeline">
              {[
                ["Dia 1",      "Acolhida & ministração de abertura",        "Apresentação da equipe, primeira ministração, e tempo de oração coletiva. À noite, ceia."],
                ["Dia 2 & 3",  "Ministrações sobre cura interior",          "Manhãs com ensino bíblico aprofundado. Tardes com dinâmicas práticas. Noites com momentos de adoração."],
                ["Dia 4",      "Ministração pessoal individualizada",       "Cada participante recebe ministração 1:1 com um conselheiro treinado. Sigilo total. O dia inteiro dedicado."],
                ["Dia 5 & 6",  "Libertação & quebra de pactos",             "Ministrações específicas sobre maldições, pactos hereditários e áreas de bloqueio. Grupos pequenos."],
                ["Dia 7",      "Selagem & envio",                            "Manhã de testemunhos, batismo nas águas (opcional), e momento de selagem com toda a equipe."],
              ].map(([day, title, desc], i) => (
                <li key={i}>
                  <div className="timeline__day">{day}</div>
                  <div>
                    <div className="timeline__title">{title}</div>
                    <div className="timeline__desc">{desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* O que você recebe ----------------------------------------- */}
      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="label">Resultado</div>
              <h2 className="h2" style={{ marginTop: 12 }}>O que você recebe.</h2>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
              {[
                "Ministração pessoal 1:1 com conselheiro treinado",
                "Material físico de apoio (apostila, livro de orações)",
                "Acesso vitalício às gravações de áudio das ministrações",
                "Acompanhamento pós-SILC com a equipe central por 3 meses",
                "Possibilidade de batismo nas águas no dia 7",
                "Almoço, lanches e ceia inclusos no valor",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: 18, border: "1px solid var(--line-1)", borderRadius: 12, background: "var(--bg-2)" }}>
                  <span style={{ flex: "0 0 28px", width: 28, height: 28, borderRadius: 8, background: "var(--red-500)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <Icon name="check" size={16} />
                  </span>
                  <span style={{ fontSize: 16, color: "#fff", paddingTop: 4 }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Práticas ---------------------------------------------------- */}
      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="label">Informações práticas</div>
              <h2 className="h2" style={{ marginTop: 12 }}>Onde, quando, quanto.</h2>
            </div>
            <div className="spec-list">
              <div><span className="label">Local</span><span className="value">Hotel Geladomash, Belo Horizonte / MG</span></div>
              <div><span className="label">Datas</span><span className="value">25 a 29 de Maio · 5 dias completos</span></div>
              <div><span className="label">Investimento</span><span className="value">R$ 1.450 (parcelado em até 6x)</span></div>
              <div><span className="label">Inclui</span><span className="value">Hospedagem + 3 refeições/dia + material</span></div>
              <div><span className="label">Idioma</span><span className="value">Português · com tradução para inglês sob demanda</span></div>
              <div><span className="label">Vagas</span><span className="value">600 · 320 ainda disponíveis</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe ------------------------------------------------------ */}
      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="label">Equipe</div>
              <h2 className="h2" style={{ marginTop: 12 }}>Quem ministra com você.</h2>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="role">Preletor principal</div>
                <h4>Pastora Tânia Tereza</h4>
                <p>Fundadora do SILC desde 1995. Juíza Federal, escritora e conferencista internacional. Ministra com seu esposo, Pastor Otto Teixeira de Carvalho.</p>
              </div>
              <div className="team-card">
                <div className="role">Conselheiros</div>
                <h4>40+ ministros</h4>
                <p>Equipe que conduz a ministração pessoal individualizada no Dia 4. Todos treinados e supervisionados pelo ministério.</p>
              </div>
              <div className="team-card">
                <div className="role">Intercessores</div>
                <h4>Cobertura em oração</h4>
                <p>Grupo dedicado de intercessão que cobre cada participante e cada ministração durante os 7 dias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria (only past) OR Inscrição (future) ----------------- */}
      {isPast ? (
        <section className="evd-section">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 32 }}>
              <div>
                <div className="label">Galeria · {evt.date}</div>
                <h2 className="h2" style={{ marginTop: 12 }}>Fotos do {evt.title}.</h2>
              </div>
              <div className="small">126 fotos · clique para ampliar</div>
            </div>
            <div className="gallery">
              <div className="gallery__cell is-wide" style={{ backgroundImage: `url(${PHOTOS.crowd_dark})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.worship_band})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.arms_up})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.candle})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.hands_held})` }} />
              <div className="gallery__cell is-wide" style={{ backgroundImage: `url(${PHOTOS.conference})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.cross_light})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.bible})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.baptism})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.prayer})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.church_interior})` }} />
              <div className="gallery__cell" style={{ backgroundImage: `url(${PHOTOS.retreat})` }} />
            </div>
            <div className="row-center" style={{ marginTop: 48 }}>
              <Button variant="ghost" onClick={() => go("/anteriores")}>Ver todos os SILCs anteriores <Icon name="arrow-right" size={14} className="arrow" /></Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="evd-section" id="inscricao">
          <div className="container">
            <div className="evd-grid-aux">
              <div>
                <div className="label">Inscrição</div>
                <h2 className="h2" style={{ marginTop: 12 }}>Reserve a sua vaga.</h2>
                <p className="body" style={{ marginTop: 16, maxWidth: "30ch" }}>
                  Inscrições processadas pela equipe central. Você receberá confirmação por e-mail em até 24h.
                </p>
              </div>
              <SubscribeForm kind="presencial" eventName={evt.title} />
            </div>
          </div>
        </section>
      )}

      {/* Toggle past/future demo */}
      <section className="section--tight">
        <div className="container row-center">
          <span className="small">Pré-visualizar:</span>
          <Button size="sm" variant="ghost" onClick={() => go(`/evento/${evt.id}`)}>Como evento futuro</Button>
          <Button size="sm" variant="ghost" onClick={() => go(`/evento/${evt.id}?past=1`)}>Como evento passado</Button>
        </div>
      </section>
    </>
  );
}

/* ------------------------- FORM ---------------------------------- */

function SubscribeForm({ kind, eventName }) {
  const [data, setData] = useState({ name: "", email: "", phone: "", country: "BR", testimony: "" });
  const [sent, setSent] = useState(false);
  const onChange = (k) => (e) => setData({ ...data, [k]: e.target.value });
  if (sent) return (
    <div className="form__success">
      <Icon name="check" size={20} />
      <div>
        <strong>Inscrição recebida.</strong>
        <p className="small" style={{ marginTop: 4 }}>Você receberá um e-mail em até 24h com a confirmação e os próximos passos. Caso seja urgente, fale conosco pelo WhatsApp.</p>
      </div>
    </div>
  );
  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="field"><label>Seu nome completo</label><input value={data.name} onChange={onChange("name")} required /></div>
      <div className="field--row" style={{ display: "flex", gap: 12 }}>
        <div className="field" style={{ flex: 1 }}><label>E-mail</label><input type="email" value={data.email} onChange={onChange("email")} required /></div>
        <div className="field" style={{ flex: 1 }}><label>WhatsApp</label><input type="tel" value={data.phone} onChange={onChange("phone")} required /></div>
      </div>
      <div className="field"><label>País</label>
        <select value={data.country} onChange={onChange("country")}>
          <option value="BR">Brasil</option><option value="PT">Portugal</option><option value="US">Estados Unidos</option>
          <option value="AR">Argentina</option><option value="DE">Alemanha</option><option value="other">Outro</option>
        </select>
      </div>
      <div className="field"><label>Algo que gostaria de compartilhar antes? (opcional)</label><textarea rows={4} value={data.testimony} onChange={onChange("testimony")} /></div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <span className="small">Campos obrigatórios marcados acima.</span>
        <Button type="submit">
          {kind === "online" ? "Inscrever-se no SILC Online" : "Inscreva-se agora"} <Icon name="arrow-right" size={14} className="arrow" />
        </Button>
      </div>
    </form>
  );
}

/* ------------------------- SILC ONLINE -------------------------- */

function OnlinePage({ go }) {
  return (
    <>
      <section className="online-hero">
        <div className="container">
          <div className="online-hero__inner">
            <div>
              <Eyebrow>SILC Online</Eyebrow>
              <h1 className="display" style={{ marginTop: 20, fontSize: "clamp(40px,5.4vw,84px)" }}>
                Faça o SILC<br/><span className="red-italic">de onde estiver.</span>
              </h1>
              <p className="lead" style={{ marginTop: 24 }}>
                Todo o conteúdo do SILC presencial, ministrado pela Pastora Tânia Tereza, em formato online —
                no seu ritmo, com suporte da equipe central por WhatsApp e e-mail.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Button size="lg" href="#inscricao">Inscrever-se no SILC Online <Icon name="arrow-right" size={16} className="arrow" /></Button>
                <Button variant="ghost"><Icon name="video" size={14} /> Vídeo introdutório (3min)</Button>
              </div>
            </div>
            <div className="online-hero__visual" style={{ backgroundImage: `url(${PHOTOS.laptop})` }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>O que está incluído</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>Tudo do SILC presencial,<br/>numa versão para você assistir e refazer.</h2>
            </div>
          </div>
          <div className="online-features">
            {[
              { icon: "video",       title: "32 ministrações em vídeo HD",      desc: "Toda a grade do SILC presencial. Acesso vitalício, assista no seu ritmo." },
              { icon: "book",        title: "Apostila digital + livro físico", desc: "Material físico enviado para todo o Brasil. Versão digital disponível imediatamente." },
              { icon: "users",       title: "Encontros mensais ao vivo",        desc: "Q&A em grupo com a equipe central, todo último sábado do mês." },
              { icon: "message",     title: "Suporte por WhatsApp",             desc: "Conselheiros disponíveis para orar e responder dúvidas durante seu percurso." },
              { icon: "list-checks", title: "Trilha guiada de 7 semanas",       desc: "Mesma estrutura dos 7 dias presenciais, em 7 semanas de imersão." },
              { icon: "heart",       title: "Comunidade de participantes",      desc: "Grupo fechado de oração com pessoas fazendo o SILC junto com você." },
            ].map(f => (
              <div key={f.title} className="online-feat">
                <div className="online-feat__icon"><Icon name={f.icon} size={16} /></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Online vs Presencial</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>Qual versão é para você?</h2>
            </div>
            <Button variant="ghost" onClick={() => go("/proximos")}>Ver SILCs presenciais <Icon name="arrow-right" size={14} className="arrow" /></Button>
          </div>
          <div className="compare">
            <div className="col-head">&nbsp;</div>
            <div className="col-head">Presencial</div>
            <div className="col-head">Online</div>

            <div className="col-cell">Formato</div>
            <div className="col-cell">7 dias imersivos em hotel/igreja</div>
            <div className="col-cell">7 semanas no seu ritmo</div>

            <div className="col-cell">Ministração pessoal 1:1</div>
            <div className="col-cell"><strong>Sim</strong> — Dia 4 dedicado</div>
            <div className="col-cell">Por chamada de vídeo, sob demanda</div>

            <div className="col-cell">Material</div>
            <div className="col-cell">Apostila + livro de orações</div>
            <div className="col-cell">Apostila digital + livro físico enviado</div>

            <div className="col-cell">Investimento</div>
            <div className="col-cell">A partir de R$ 1.450</div>
            <div className="col-cell"><strong>R$ 497</strong> · ou 6x R$ 89</div>

            <div className="col-cell">Início</div>
            <div className="col-cell">Datas fixas (ver agenda)</div>
            <div className="col-cell">Quando quiser, hoje mesmo</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {TESTEMUNHOS.map((t, i) => (
              <div key={i} className="tcard">
                <p className="tcard__quote">{t.quote}</p>
                <div className="tcard__person">
                  <img className="tcard__avatar" src={t.thumb} alt={t.name} />
                  <div><div className="tcard__name">{t.name}</div><div className="tcard__place">{t.place}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="inscricao">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow>Inscrição</Eyebrow>
            <h2 className="display" style={{ marginTop: 20, fontSize: "clamp(36px,4.6vw,64px)" }}>Inscreva-se no SILC Online.</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              Após o envio você receberá um e-mail com instruções de acesso e os próximos passos.
            </p>
          </div>
          <SubscribeForm kind="online" />
        </div>
      </section>
    </>
  );
}

/* ------------------------- SOBRE -------------------------------- */

function SobrePage({ go }) {
  return (
    <>
      <section style={{ padding: "180px 0 60px" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Eyebrow>Sobre o SILC</Eyebrow>
          <h1 className="display" style={{ marginTop: 20, fontSize: "clamp(42px,5.4vw,88px)" }}>
            O que é o <span className="red-italic">SILC</span>.
          </h1>
          <p className="lead" style={{ marginTop: 28 }}>
            O <strong style={{ color: "#fff" }}>Seminário Intensivo de Cura e Libertação</strong> é uma imersão
            ministerial de sete dias — presencial ou online — onde Deus encontra a pessoa onde ela está,
            quebra ciclos, restaura famílias e cura feridas que muitas vezes têm décadas. Foi criado pela
            Pastora Tânia Tereza em 1995, e já alcançou mais de 100 mil pessoas em mais de 50 países.
          </p>
        </div>
      </section>

      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="label">Como funciona</div>
              <h2 className="h2" style={{ marginTop: 12 }}>A semana, em sete movimentos.</h2>
            </div>
            <ol className="timeline">
              {[
                ["1", "Acolhida", "O participante é recebido pela equipe central. Apresentação, primeira ministração, oração coletiva."],
                ["2", "Cura interior", "Ensinos sobre como Deus trata a alma — feridas, traumas, raízes."],
                ["3", "Identidade", "Quem você é em Cristo. Ensinos sobre identidade, propósito, autoridade espiritual."],
                ["4", "Ministração 1:1", "Cada participante recebe um conselheiro para uma sessão individualizada de ministração."],
                ["5", "Libertação", "Tratamento ministerial específico sobre pactos, maldições hereditárias, áreas de bloqueio."],
                ["6", "Restauração", "Ensinos sobre família, casamento, relacionamentos. Tempo de ministração em grupos pequenos."],
                ["7", "Selagem & envio", "Testemunhos, batismo nas águas (opcional), oração final com toda a equipe."],
              ].map(([n, title, desc], i) => (
                <li key={i}>
                  <div className="timeline__day">Dia {n}</div>
                  <div>
                    <div className="timeline__title">{title}</div>
                    <div className="timeline__desc">{desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="evd-section">
        <div className="container">
          <div className="evd-grid-aux">
            <div>
              <div className="label">Equipe</div>
              <h2 className="h2" style={{ marginTop: 12 }}>Quem ministra com você.</h2>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="role">Preletor principal</div>
                <h4>Quem é</h4>
                <p>O ministro que conduz as ministrações coletivas — geralmente a Pastora Tânia Tereza, fundadora do ministério. Em algumas edições, um(a) preletor(a) convidado(a).</p>
              </div>
              <div className="team-card">
                <div className="role">Conselheiros</div>
                <h4>O que fazem</h4>
                <p>Conduzem a ministração 1:1 no Dia 4. Todos passam por um processo formal de formação (SIFEL) antes de ministrar em um SILC.</p>
              </div>
              <div className="team-card">
                <div className="role">Intercessores</div>
                <h4>O papel</h4>
                <p>Cobertura em oração durante os 7 dias. Trabalham nos bastidores, em escalas, intercedendo por cada participante e cada ministração.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="display" style={{ marginTop: 20, fontSize: "clamp(36px,4.6vw,64px)" }}>Quer participar?</h2>
          </div>
          <div className="path-cards" style={{ maxWidth: 920, margin: "0 auto" }}>
            <button className="path-card is-primary" onClick={() => go("/proximos")}>
              <div className="path-card__title">Presencial<br/>(próximos seminários)</div>
              <span className="path-card__cta">Ver agenda <Icon name="arrow-right" size={14} /></span>
            </button>
            <button className="path-card" onClick={() => go("/online")}>
              <div className="path-card__title">SILC Online<br/>(comece hoje)</div>
              <span className="path-card__cta">Saber mais <Icon name="arrow-right" size={14} /></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------- CONTATO ------------------------------ */

function ContatoPage({ go }) {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <section style={{ padding: "180px 0 120px" }}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <Eyebrow>Contato</Eyebrow>
        <h1 className="h1" style={{ marginTop: 20 }}>Fale com a equipe central.</h1>
        <p className="lead" style={{ marginTop: 16 }}>
          Para dúvidas sobre inscrições, edições passadas ou suporte do SILC Online.
          A equipe responde em até 24 horas durante a semana.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 56 }}>
          {sent ? (
            <div className="form__success" style={{ alignSelf: "start" }}>
              <Icon name="check" size={20} />
              <div><strong>Mensagem enviada.</strong><p className="small" style={{ marginTop: 4 }}>Você receberá uma resposta em até 24h no e-mail informado.</p></div>
            </div>
          ) : (
            <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="field"><label>Nome</label><input value={data.name} onChange={onChange("name")} required /></div>
              <div className="field"><label>E-mail</label><input type="email" value={data.email} onChange={onChange("email")} required /></div>
              <div className="field"><label>Mensagem</label><textarea rows={6} value={data.message} onChange={onChange("message")} required /></div>
              <Button type="submit">Enviar mensagem <Icon name="arrow-right" size={14} className="arrow" /></Button>
            </form>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="surface" style={{ padding: 24 }}>
              <Icon name="mail" size={20} />
              <h4 className="h4" style={{ marginTop: 12 }}>E-mail</h4>
              <p className="body" style={{ marginTop: 6 }}><a href="mailto:ajuda@pastorataniatereza.com" style={{ color: "var(--fg-1)", borderBottom: "1px solid var(--line-2)" }}>ajuda@pastorataniatereza.com</a></p>
            </div>
            <div className="surface" style={{ padding: 24 }}>
              <Icon name="message" size={20} />
              <h4 className="h4" style={{ marginTop: 12 }}>WhatsApp</h4>
              <p className="body" style={{ marginTop: 6 }}><a style={{ color: "var(--fg-1)", borderBottom: "1px solid var(--line-2)" }}>+55 (11) 9 9999-9999</a></p>
              <p className="small" style={{ marginTop: 8 }}>Seg–Sex, 09h–18h (BRT)</p>
            </div>
            <div className="surface" style={{ padding: 24 }}>
              <Icon name="map-pin" size={20} />
              <h4 className="h4" style={{ marginTop: 12 }}>Sede</h4>
              <p className="body" style={{ marginTop: 6 }}>Tania Tereza Carvalho & Cia<br/>Palestras e Publicações LTDA<br/>CNPJ 28.047.524/0001-57</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  HomePage, ProximosPage, AnterioresPage, EventoDetailPage, OnlinePage, SobrePage, ContatoPage,
  EVENTS, PAST_EVENTS, TESTEMUNHOS, PHOTOS, SubscribeForm
});
