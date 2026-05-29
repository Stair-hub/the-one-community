/* HomeA — Direction A · Éditorial audacieux */
function HomeA() {
  const acts = [
    { i: "01", t: "Creative Hub", d: "Un espace collaboratif dédié au digital, au web, aux médias et à l'événementiel.", tags: ["Digital", "Web", "Média", "Event"] },
    { i: "02", t: "Coworking & salles", d: "Postes de travail flexibles et salles de réunion à louer, à l'heure ou à la journée.", tags: ["Bureaux", "Réunions"] },
    { i: "03", t: "Événementiel", d: "Ateliers, conférences et rencontres culturelles qui font vivre la communauté.", tags: ["Ateliers", "Conférences"] },
    { i: "04", t: "Formation & coaching", d: "Accompagnement en ligne et en présentiel pour faire grandir vos projets et compétences.", tags: ["En ligne", "Présentiel"] },
    { i: "05", t: "Inclusion sociale", d: "Des projets concrets qui favorisent l'intégration et le lien entre les communautés.", tags: ["Diversité", "Lien"] },
    { i: "06", t: "Collecte de fonds", d: "Crowdfunding, ventes solidaires et subventions au service de l'impact social.", tags: ["Solidarité", "Dons"] },
  ];
  const events = [
    { d: "12", m: "Juin", t: "Atelier Créa — Brand & réseaux sociaux", meta: ["18h00 · Bd Adolphe Max 26", "Gratuit · sur inscription"], cta: "S'inscrire" },
    { d: "21", m: "Juin", t: "Coworking Day — portes ouvertes", meta: ["10h00 · Espace activités", "Entrée libre"], cta: "Réserver" },
    { d: "28", m: "Juin", t: "Rencontre des porteurs de projets", meta: ["19h00 · Rue Haute 60A", "Networking"], cta: "S'inscrire" },
  ];
  const vals = [
    { k: "①", t: "Inclusion", d: "Chaque communauté a sa place. Nous bâtissons des ponts, pas des murs." },
    { k: "②", t: "Innovation", d: "Le numérique et la création comme leviers d'émancipation." },
    { k: "③", t: "Impact", d: "Des actions mesurables, ancrées dans le réel bruxellois." },
    { k: "④", t: "Collaboration", d: "On va plus loin ensemble : membres, partenaires et bénévoles." },
  ];
  const paths = [
    { k: "Adhésion", t: "Devenir membre", d: "Adhérez et accédez à l'espace, aux ateliers et au réseau.", cta: "Adhérer" },
    { k: "Temps", t: "Bénévolat", d: "Donnez de votre temps et de vos talents à des projets utiles.", cta: "S'engager" },
    { k: "Soutien", t: "Faire un don", d: "Soutenez nos actions d'inclusion et d'innovation sociale.", cta: "Soutenir" },
  ];

  return (
    <div className="toc-home dirA">
      {/* NAV */}
      <nav className="nav">
        <a className="nav-logo" href="#mission">
          <image-slot id="logoA" shape="circle" style={{ width: "40px", height: "40px" }} placeholder="Logo"></image-slot>
          <span className="nav-word">The One Community<span>asbl · Bruxelles</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#mission">À propos</a></li>
          <li><a href="#activities">Activités</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#join">Nous rejoindre</a></li>
          <li><a href="#foot">Contact</a></li>
        </ul>
        <a className="btn btn-primary" href="#activities">Réserver un espace</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="mono eyebrow">Creative Hub · Bruxelles · depuis 2017</div>
            <h1 className="serif">Créons,<br />innovons,<br /><em>impactons.</em></h1>
            <p className="hero-sub">The One Community rassemble les talents et les communautés de Bruxelles dans un même espace créatif — pour apprendre, collaborer et bâtir des projets à impact.</p>
            <div className="hero-ctas">
              <a className="btn btn-dark" href="#activities">Découvrir nos activités</a>
              <a className="btn btn-ghost" href="#join">Nous rejoindre</a>
            </div>
          </div>
          <div className="hero-media">
            <image-slot id="heroA" shape="rounded" radius="18" style={{ width: "100%", height: "520px" }} placeholder="Photo de la communauté / d'un événement"></image-slot>
            <div className="hero-badge">
              <span className="num serif">1,4k+</span>
              <span className="lbl">membres &amp; abonnés actifs</span>
            </div>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section className="mission" id="mission">
        <div className="wrap">
          <div className="mono tag">Notre mission</div>
          <p className="serif">Favoriser la <b>promotion et l'intégration socio-culturelle</b> des communautés qui composent le paysage social et professionnel de Belgique.</p>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section className="activities" id="activities">
        <div className="wrap">
          <div className="shead">
            <h2 className="serif">Ce que nous faisons</h2>
            <p className="lead">Un lieu unique pour créer, se former, se rencontrer et entreprendre — ouvert à toutes et à tous, 7 jours sur 7.</p>
          </div>
          <div className="acts">
            {acts.map((a) => (
              <article className="act" key={a.i}>
                <div className="idx">{a.i}</div>
                <h3 className="serif">{a.t}</h3>
                <p>{a.d}</p>
                <div className="tags">{a.tags.map((t) => <span className="tag-chip" key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="agenda" id="agenda">
        <div className="wrap">
          <div className="shead">
            <h2 className="serif">Prochains rendez-vous</h2>
            <a className="btn btn-ghost" href="#">Voir tout l'agenda</a>
          </div>
          <div className="events">
            {events.map((e, i) => (
              <article className="event" key={i}>
                <div className="ev-date">
                  <div className="d serif">{e.d}</div>
                  <div className="m">{e.m}</div>
                </div>
                <div className="ev-body">
                  <h3>{e.t}</h3>
                  <div className="meta">{e.meta.map((m) => <span key={m}>{m}</span>)}</div>
                </div>
                <a className="btn btn-primary ev-cta" href="#">{e.cta}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="values">
        <div className="wrap">
          <div className="shead">
            <h2 className="serif">Nos valeurs</h2>
            <p className="lead">Quatre principes qui guident chacune de nos actions, de l'accueil à l'accompagnement.</p>
          </div>
          <div className="vals">
            {vals.map((v) => (
              <div className="val" key={v.t}>
                <div className="vk serif">{v.k}</div>
                <h4>{v.t}</h4>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="join" id="join">
        <div className="wrap">
          <div className="top">
            <h2 className="serif">Rejoignez la communauté</h2>
            <p>Membre, bénévole ou donateur — il y a mille façons de faire partie de l'aventure The One Community.</p>
          </div>
          <div className="paths">
            {paths.map((p) => (
              <a className="path" href="#" key={p.t}>
                <div className="pk">{p.k}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="arrow">{p.cta} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot" id="foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="brand">
                <image-slot id="logoAf" shape="circle" style={{ width: "38px", height: "38px" }} placeholder="Logo"></image-slot>
                <strong>The One Community</strong>
              </div>
              <p className="blurb">Association Sans But Lucratif créée en 2017 à Bruxelles. Let's create, innovate, impact.</p>
            </div>
            <div>
              <h5>Visiter</h5>
              <ul>
                <li>60A Rue Haute, 1000 Bruxelles</li>
                <li>Espace activités — Bd Adolphe Max 26</li>
                <li style={{ marginTop: "12px" }}>Lun–Ven · 10h–19h</li>
                <li>Sam 10h–18h · Dim 12h–16h</li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="https://wa.me/32489280722" target="_blank" rel="noopener noreferrer">+32 489 28 07 22 (WhatsApp)</a></li>
                <li><a href="mailto:info.theonecommunity@gmail.com">info.theonecommunity@gmail.com</a></li>
                <li style={{ marginTop: "12px" }}><a href="https://www.instagram.com/theonecommunity_asbl" target="_blank" rel="noopener noreferrer">Instagram @theonecommunity_asbl</a></li>
                <li><a href="https://www.facebook.com/Theonecommunity" target="_blank" rel="noopener noreferrer">Facebook Theonecommunity</a></li>
              </ul>
            </div>
            <div>
              <h5>Naviguer</h5>
              <ul>
                <li><a href="#mission">À propos</a></li>
                <li><a href="#activities">Nos activités</a></li>
                <li><a href="#agenda">Agenda</a></li>
                <li><a href="#join">Nous rejoindre</a></li>
                <li><a href="#foot">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2025 The One Community asbl</span>
            <div className="legal">
              <span>N° entreprise 0671.522.486</span>
              <span>TVA BE0671522486</span>
              <a href="#">Mentions légales</a>
              <a href="#">Vie privée · RGPD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
window.HomeA = HomeA;
