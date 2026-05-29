/* HomeC — Direction C · Creative Hub studio */
function HomeC() {
  const acts = [
    { i: "// 01", t: "Studio Média & Podcasts", d: "Enregistrement haute définition, régie intégrée, outils de montage de pointe pour créateurs.", tags: ["Audio", "Vidéo", "Streaming"] },
    { i: "// 02", t: "Espace Coworking", d: "Bureaux ergonomiques, connexion fibre symétrique, cabines d'appel et café à volonté.", tags: ["Ergonomie", "Fibre", "Focus"] },
    { i: "// 03", t: "Laboratoire Web & Digital", d: "Ateliers intensifs en programmation, design UI/UX, intelligence artificielle et web3.", tags: ["Dev", "Design", "Tech"] },
    { i: "// 04", t: "Événements & Meetups", d: "Conférences technologiques, démonstrations de projets, hackathons et tables rondes.", tags: ["Meetups", "Démos", "Réseau"] },
    { i: "// 05", t: "Inclusion & Mentorat", d: "Programmes d'accès gratuit aux technologies pour tous, sessions de mentorat individuel.", tags: ["Égalité", "Social", "Futur"] },
    { i: "// 06", t: "Accélérateur d'ASBL", d: "Aide à la digitalisation des associations locales pour maximiser leur impact social.", tags: ["Impact", "Transition", "Clé"] },
  ];

  const events = [
    { d: "18", m: "Juin", t: "Hackathon Solidaire — Code pour Bruxelles", meta: ["09h00–18h00 · Lab Tech", "Inscriptions ouvertes aux devs & designers"], cta: "S'inscrire" },
    { d: "25", m: "Juin", t: "Masterclass — IA générative & Création Visuelle", meta: ["19h00 · Espace Conférence", "Gratuit · Places limitées"], cta: "Réserver" },
    { d: "02", m: "Juil", t: "Démo Day — Présentation des projets du Hub", meta: ["18h30 · Studio Principal", "Networking & drinks"], cta: "Participer" },
  ];

  const vals = [
    { k: "[TECH]", t: "Innovation ouverte", d: "Les technologies doivent servir d'outils d'émancipation partagés par tous." },
    { k: "[CODE]", t: "Apprentissage par le faire", d: "Pas de théorie inutile. Nous construisons de vrais outils et projets concrets." },
    { k: "[LINK]", t: "Diversité & Synergies", d: "C'est à l'intersection de profils variés que naissent les meilleures idées." },
    { k: "[BOLD]", t: "Impact mesurable", d: "Nous concevons des solutions numériques pour le monde réel bruxellois." },
  ];

  const paths = [
    { k: "S'inscrire", t: "Devenir Résident", d: "Rejoignez le hub créatif pour bosser sur vos projets numériques.", cta: "Candidater" },
    { k: "Co-créer", t: "Partager son expertise", d: "Devenez mentor ou animez un atelier technique pour la communauté.", cta: "Proposer" },
    { k: "Soutenir", t: "Financer l'inclusion", d: "Aidez-nous à financer le matériel informatique de nos ateliers citoyens.", cta: "Faire un don" },
  ];

  return (
    <div className="toc-home dirC">
      {/* NAV */}
      <nav className="nav">
        <a className="nav-logo" href="#mission">
          <image-slot id="logoC" shape="rect" style={{ width: "40px", height: "40px" }} placeholder="Logo"></image-slot>
          <span className="nav-word">The One Community<span>asbl // Creative Hub & Studio</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#activities">Studio</a></li>
          <li><a href="#activities">Coworking</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#join">Transition</a></li>
        </ul>
        <a className="btn btn-primary" href="#activities">Réserver un studio</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="mono eyebrow">[ CONNECTING TALENTS // BRUXELLES ]</div>
            <h1 className="title-tech">Le futur numérique se construit <span>ensemble.</span></h1>
            <p className="hero-sub">The One Community est un Creative Hub dédié à l'innovation sociale, aux nouveaux médias et aux technologies numériques. Un écosystème ouvert pour apprendre, coder et créer.</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#activities">Explorer le studio</a>
              <a className="btn btn-ghost" href="#join">Rejoindre la tech</a>
            </div>
          </div>
          <div className="hero-media">
            <image-slot id="heroC" shape="rect" style={{ width: "100%", height: "520px" }} placeholder="Visuals studio / setup / neon design"></image-slot>
            <div className="hero-badge">
              <span className="num">[ 100% ]</span>
              <span className="lbl">communautaire, ouvert, axé impact</span>
            </div>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section className="mission" id="mission">
        <div className="wrap">
          <div className="mono tag">// NOTRE OBJECTIF //</div>
          <p className="tech-quote">Démocratiser l'accès aux technologies numériques, former les talents créatifs de demain et propulser les initiatives citoyennes à Bruxelles.</p>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section className="activities" id="activities">
        <div className="wrap">
          <div className="shead">
            <h2 className="title-section">Nos pôles d'action</h2>
            <p className="lead">Des ressources matérielles et humaines de pointe pour accompagner votre parcours créatif et technique.</p>
          </div>
          <div className="acts">
            {acts.map((a, idx) => (
              <article className="act" key={idx}>
                <div className="idx mono">{a.i}</div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <div className="tags">{a.tags.map((t) => <span className="tag-chip mono" key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="agenda" id="agenda">
        <div className="wrap">
          <div className="shead">
            <h2 className="title-section">Agenda // Tech & Création</h2>
            <a className="btn btn-ghost" href="#agenda">Découvrir tout</a>
          </div>
          <div className="events">
            {events.map((e, i) => (
              <article className="event" key={i}>
                <div className="ev-date mono">
                  <div className="d">{e.d}</div>
                  <div className="m">{e.m}</div>
                </div>
                <div className="ev-body">
                  <h3>{e.t}</h3>
                  <div className="meta mono">{e.meta.map((m) => <span key={m}>{m}</span>)}</div>
                </div>
                <a className="btn btn-primary ev-cta mono" href="#">{e.cta}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="values">
        <div className="wrap">
          <div className="shead">
            <h2 className="title-section">Nos Principes</h2>
            <p className="lead">Une méthodologie axée sur le partage libre, l'efficience technique et le progrès social.</p>
          </div>
          <div className="vals">
            {vals.map((v) => (
              <div className="val" key={v.t}>
                <div className="vk mono">{v.k}</div>
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
            <h2 className="title-section">Rejoignez l'écosystème</h2>
            <p>Développeurs, créatifs, curieux, militants — connectez-vous au réseau pour collaborer sur des projets à forte utilité sociale.</p>
          </div>
          <div className="paths">
            {paths.map((p) => (
              <a className="path" href="#" key={p.t}>
                <div className="pk mono">{p.k}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="arrow mono">{p.cta} &gt;</div>
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
                <image-slot id="logoCf" shape="rect" style={{ width: "38px", height: "38px" }} placeholder="Logo"></image-slot>
                <strong>The One Community</strong>
              </div>
              <p className="blurb">Tiers-lieu digital et studio d'innovation sociale au service des citoyens de la région bruxelloise.</p>
            </div>
            <div>
              <h5>Studio & Lab</h5>
              <ul>
                <li>60A Rue Haute, 1000 Bruxelles</li>
                <li>Lundi au Vendredi · 09h–21h</li>
                <li>Samedi · 10h–18h</li>
              </ul>
            </div>
            <div>
              <h5>Canaux</h5>
              <ul>
                <li><a href="https://wa.me/32489280722" target="_blank" rel="noopener noreferrer">+32 489 28 07 22 (WhatsApp)</a></li>
                <li><a href="mailto:info.theonecommunity@gmail.com">info.theonecommunity@gmail.com</a></li>
                <li><a href="https://github.com/theonecommunity" target="_blank" rel="noopener noreferrer">github.com/theonecommunity</a></li>
                <li><a href="https://www.instagram.com/theonecommunity_asbl" target="_blank" rel="noopener noreferrer">Instagram @theonecommunity_asbl</a></li>
                <li><a href="https://www.facebook.com/Theonecommunity" target="_blank" rel="noopener noreferrer">Facebook Theonecommunity</a></li>
              </ul>
            </div>
            <div>
              <h5>Navigation</h5>
              <ul>
                <li><a href="#activities">Espaces</a></li>
                <li><a href="#activities">Formations</a></li>
                <li><a href="#join">Dépôt de projet</a></li>
                <li><a href="#foot">ASBL</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom mono">
            <span>// © 2025 THE ONE COMMUNITY ASBL</span>
            <div className="legal">
              <span>ENTREPRISE: 0671.522.486</span>
              <span>BE0671522486</span>
              <a href="#">MENTIONS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
window.HomeC = HomeC;
