/* eslint-disable */
/* ===========================================================
   v2 Admin Pages
   Dashboard · Event editor (with photo upload for past events)
   =========================================================== */

function AdminLayout({ active, go, children }) {
  return (
    <div className="admin">
      <aside className="admin__side">
        <div className="admin__brand">SILC<span className="dot">.</span><span className="small" style={{ color: "var(--fg-3)", marginLeft: 6 }}>Admin</span></div>
        <div className="admin__sect">SILC Presencial</div>
        <nav className="admin__nav">
          <a className={active === "dashboard" ? "is-active" : ""} onClick={() => go("/admin")}><Icon name="layout" size={16} />Dashboard</a>
          <a className={active === "events" ? "is-active" : ""} onClick={() => go("/admin/eventos")}><Icon name="calendar" size={16} />Eventos</a>
          <a><Icon name="image" size={16} />Galerias</a>
        </nav>
        <div className="admin__sect">SILC Online</div>
        <nav className="admin__nav">
          <a><Icon name="monitor" size={16} />Conteúdo da página</a>
          <a><Icon name="users" size={16} />Inscritos</a>
        </nav>
        <div className="admin__sect">Conteúdo</div>
        <nav className="admin__nav">
          <a><Icon name="message" size={16} />Testemunhos</a>
          <a><Icon name="book" size={16} />Páginas estáticas</a>
        </nav>
        <div className="admin__sect">Sistema</div>
        <nav className="admin__nav">
          <a><Icon name="settings" size={16} />Configurações</a>
          <a onClick={() => go("/")}><Icon name="log-out" size={16} />Sair da admin</a>
        </nav>
      </aside>
      <main className="admin__main">{children}</main>
    </div>
  );
}

function AdminDashboardPage({ go }) {
  // Build a combined event list (future + past) for the table
  const futureRows = EVENTS.map(e => ({ id: e.id, title: e.title, when: e.date, where: `${e.city}, ${e.country_name}`, status: "Próximo", subscribers: Math.floor(80 + Math.random() * 350) }));
  const pastRows = PAST_EVENTS.flatMap(g => g.items.slice(0, 2).map(it => ({ id: it.id, title: `SILC ${it.city.split(',')[0]}`, when: it.date, where: it.city, status: "Passado", subscribers: Math.floor(120 + Math.random() * 400) })));
  const rows = [...futureRows, ...pastRows];

  return (
    <AdminLayout active="dashboard" go={go}>
      <div className="admin__head">
        <div>
          <Eyebrow>Visão geral</Eyebrow>
          <h1 style={{ marginTop: 12 }}>Dashboard</h1>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="ghost" size="sm"><Icon name="calendar" size={14} /> Calendário</Button>
          <Button size="sm" onClick={() => go("/admin/evento/novo")}><Icon name="plus" size={14} /> Criar novo SILC</Button>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi"><div className="kpi__label">Eventos próximos</div><div className="kpi__val tnum">9</div><div className="kpi__delta">+2 vs trimestre anterior</div></div>
        <div className="kpi"><div className="kpi__label">Inscritos · 30 dias</div><div className="kpi__val tnum">1 248</div><div className="kpi__delta">+18% vs mês anterior</div></div>
        <div className="kpi"><div className="kpi__label">SILC Online · ativos</div><div className="kpi__val tnum">487</div><div className="kpi__delta">+34 na última semana</div></div>
        <div className="kpi"><div className="kpi__label">Galerias publicadas</div><div className="kpi__val tnum">42</div><div className="kpi__delta" style={{ color: "var(--fg-3)" }}>Última: SILC SP, Out/2024</div></div>
      </div>

      <div className="surface" style={{ padding: 0, marginTop: 8 }}>
        <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-1)" }}>
          <h3 className="h3">Todos os eventos</h3>
          <div className="chips">
            <button className="chip is-active">Todos</button>
            <button className="chip">Próximos</button>
            <button className="chip">Passados</button>
            <button className="chip">Rascunhos</button>
          </div>
        </div>
        <table className="evt-table">
          <thead>
            <tr>
              <th>Evento</th><th>Quando</th><th>Onde</th><th>Status</th><th>Inscritos</th><th></th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 9).map(r => (
              <tr key={r.id}>
                <td><strong style={{ color: "#fff" }}>{r.title}</strong></td>
                <td className="tnum">{r.when}</td>
                <td>{r.where}</td>
                <td>
                  <span className={`status-pill ${r.status === "Próximo" ? "is-up" : "is-past"}`}>
                    {r.status === "Próximo" && <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--success)" }} />}
                    {r.status}
                  </span>
                </td>
                <td className="tnum">{r.subscribers}</td>
                <td>
                  <div className="row-actions">
                    <button className="icon-btn" onClick={() => go(`/admin/evento/${r.id}`)} aria-label="Editar"><Icon name="edit" size={14} /></button>
                    <button className="icon-btn" onClick={() => go(`/evento/${r.id}`)} aria-label="Ver página"><Icon name="external-link" size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

function AdminEventEditorPage({ go, id }) {
  const isNew = id === "novo";
  const existing = !isNew ? EVENTS.find(e => e.id === id) : null;
  const [data, setData] = useState({
    title: existing?.title || "",
    startDate: "",
    endDate: "",
    city: existing?.city || "",
    country: existing?.country || "BR",
    description: existing?.desc || "",
    speaker: "Pastora Tânia Tereza",
    schedule: "",
    price: "R$ 1.450",
    venue: "",
    videoUrl: "",
    formUrl: "",
    status: "upcoming",
  });
  const onChange = (k) => (e) => setData({ ...data, [k]: e.target.value });
  const [savedAt, setSavedAt] = useState(null);

  return (
    <AdminLayout active="events" go={go}>
      <div className="admin__head">
        <div>
          <button className="btn btn--link" onClick={() => go("/admin")}><Icon name="arrow-left" size={14} /> Voltar ao dashboard</button>
          <h1 style={{ marginTop: 8 }}>{isNew ? "Criar novo SILC" : (existing?.title || "Editar evento")}</h1>
          {savedAt && <div className="small" style={{ marginTop: 4, color: "var(--success)" }}>✓ Salvo às {savedAt}</div>}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="ghost" size="sm" onClick={() => go("/admin")}>Cancelar</Button>
          <Button size="sm" onClick={() => setSavedAt(new Date().toLocaleTimeString().slice(0,5))}>Salvar evento</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
        <div className="surface" style={{ padding: 32 }}>
          <h3 className="h3" style={{ marginBottom: 24 }}>Informações principais</h3>
          <div className="form">
            <div className="field"><label>Título do evento</label><input value={data.title} onChange={onChange("title")} placeholder="ex.: SILC Belo Horizonte 2026" /></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="field"><label>Data início</label><input type="date" value={data.startDate} onChange={onChange("startDate")} /></div>
              <div className="field"><label>Data fim</label><input type="date" value={data.endDate} onChange={onChange("endDate")} /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="field"><label>Cidade</label><input value={data.city} onChange={onChange("city")} /></div>
              <div className="field"><label>País</label>
                <select value={data.country} onChange={onChange("country")}>
                  <option value="BR">Brasil</option><option value="PT">Portugal</option><option value="US">Estados Unidos</option>
                  <option value="AR">Argentina</option><option value="AO">Angola</option><option value="DE">Alemanha</option>
                </select>
              </div>
            </div>
            <div className="field"><label>Descrição curta</label><textarea rows={3} value={data.description} onChange={onChange("description")} placeholder="Aparece no card do evento e no topo da página." /></div>
          </div>

          <div className="divider" style={{ margin: "32px 0" }} />

          <h3 className="h3" style={{ marginBottom: 24 }}>Programação e equipe</h3>
          <div className="form">
            <div className="field"><label>Preletor principal</label><input value={data.speaker} onChange={onChange("speaker")} /></div>
            <div className="field"><label>Resumo do cronograma</label>
              <textarea rows={6} value={data.schedule} onChange={onChange("schedule")} placeholder="Cole aqui o resumo dia-a-dia (será exibido como timeline na página pública)." />
            </div>
          </div>

          <div className="divider" style={{ margin: "32px 0" }} />

          <h3 className="h3" style={{ marginBottom: 24 }}>Logística & inscrição</h3>
          <div className="form">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="field"><label>Preço</label><input value={data.price} onChange={onChange("price")} /></div>
              <div className="field"><label>Local / hotel</label><input value={data.venue} onChange={onChange("venue")} /></div>
            </div>
            <div className="field"><label>URL do vídeo (YouTube/Vimeo)</label><input value={data.videoUrl} onChange={onChange("videoUrl")} placeholder="https://" /></div>
            <div className="field"><label>URL do formulário de inscrição</label><input value={data.formUrl} onChange={onChange("formUrl")} placeholder="https://forms.gle/…" /></div>
          </div>
        </div>

        {/* SIDE: status + upload + preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="surface" style={{ padding: 24 }}>
            <h4 className="h4">Status</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 14 }}>
              <button className={cx("chip", data.status === "upcoming" && "is-active")} onClick={() => setData({ ...data, status: "upcoming" })}>Próximo</button>
              <button className={cx("chip", data.status === "past" && "is-active")} onClick={() => setData({ ...data, status: "past" })}>Passado</button>
            </div>
            <p className="small" style={{ marginTop: 12 }}>
              {data.status === "upcoming"
                ? "Aparecerá em Próximos Seminários com botão de inscrição."
                : "Sairá de Próximos e irá para o arquivo de Seminários Anteriores. Permite upload de fotos."}
            </p>
          </div>

          {data.status === "past" && (
            <div className="surface" style={{ padding: 24 }}>
              <h4 className="h4">Galeria de fotos</h4>
              <p className="small" style={{ marginTop: 8 }}>Suba as fotos da edição encerrada. Elas aparecerão na página pública do evento.</p>
              <div className="upload-zone" style={{ marginTop: 14 }}>
                <Icon name="upload" size={32} />
                <div style={{ marginTop: 4 }}>Arraste imagens ou <strong>clique para selecionar</strong></div>
                <div className="small" style={{ marginTop: 4 }}>JPG, PNG, até 10 MB por foto</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginTop: 12 }}>
                {[PHOTOS.crowd_dark, PHOTOS.worship_band, PHOTOS.arms_up, PHOTOS.candle, PHOTOS.cross_light].map((p, i) => (
                  <div key={i} style={{ aspectRatio: 1, backgroundImage: `url(${p})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: 6, position: "relative" }}>
                    <button className="icon-btn" style={{ position: "absolute", top: 4, right: 4, width: 24, height: 24, background: "rgba(0,0,0,0.7)" }} aria-label="Remover"><Icon name="x" size={12} /></button>
                  </div>
                ))}
              </div>
              <div className="small" style={{ marginTop: 8, color: "var(--fg-3)" }}>5 fotos · publicar</div>
            </div>
          )}

          <div className="surface" style={{ padding: 24 }}>
            <h4 className="h4">Pré-visualização pública</h4>
            <p className="small" style={{ marginTop: 8 }}>Verifique como o evento aparecerá no site antes de publicar.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <Button variant="ghost" size="sm" block onClick={() => go(`/evento/${id || "silc-bh-2026"}`)}>
                <Icon name="external-link" size={14} /> Abrir página
              </Button>
            </div>
          </div>

          <div className="surface" style={{ padding: 24 }}>
            <h4 className="h4">Histórico</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <li className="small">Você criou este evento — hoje, 14:22</li>
              <li className="small" style={{ color: "var(--fg-3)" }}>Salvo automaticamente em rascunho.</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

Object.assign(window, { AdminDashboardPage, AdminEventEditorPage, AdminLayout });
