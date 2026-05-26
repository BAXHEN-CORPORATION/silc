/* eslint-disable */
/* ===========================================================
   v2 App — hash router
   =========================================================== */

function parseRoute() {
  const h = (window.location.hash || "#/").replace(/^#/, "");
  const [path, query] = h.split("?");
  const params = new URLSearchParams(query || "");
  return { path: path || "/", params };
}

function App() {
  const [route, setRoute] = useState(parseRoute());
  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (to) => { window.location.hash = "#" + to; };

  const { path, params } = route;

  // Admin section is rendered without the public nav/footer
  const isAdmin = path.startsWith("/admin");

  let body;
  if (path === "/")                              body = <HomePage go={go} />;
  else if (path === "/proximos")                 body = <ProximosPage go={go} />;
  else if (path === "/anteriores")               body = <AnterioresPage go={go} />;
  else if (path.startsWith("/evento/")) {
    const id = path.slice("/evento/".length);
    const isPast = params.get("past") === "1" || (PAST_EVENTS.some(g => g.items.some(it => it.id === id)));
    body = <EventoDetailPage go={go} id={id} isPast={isPast} />;
  }
  else if (path === "/online")                   body = <OnlinePage go={go} />;
  else if (path === "/sobre")                    body = <SobrePage go={go} />;
  else if (path === "/contato")                  body = <ContatoPage go={go} />;
  else if (path === "/admin")                    body = <AdminDashboardPage go={go} />;
  else if (path.startsWith("/admin/evento/")) {
    const id = path.slice("/admin/evento/".length);
    body = <AdminEventEditorPage go={go} id={id} />;
  }
  else if (path === "/admin/eventos")            body = <AdminDashboardPage go={go} />;
  else                                           body = <HomePage go={go} />;

  return (
    <>
      {!isAdmin && <Nav route={path} go={go} />}
      {body}
      {!isAdmin && <Footer go={go} />}
    </>
  );
}

Object.assign(window, { App, parseRoute });
