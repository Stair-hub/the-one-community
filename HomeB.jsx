/* HomeB — Direction B · Communauté vibrante */
function HomeB() {
  const acts = [
    { i: "★", t: "Espaces Partagés", d: "Du coworking chaleureux, des salles de réunion inspirantes et des coins détente pour échanger.", tags: ["Coworking", "Rencontres"] },
    { i: "★", t: "Le Creative Hub", d: "Un lab citoyen pour expérimenter le digital, la vidéo, le podcast et les nouveaux médias.", tags: ["Digital", "Média", "Lab"] },
    { i: "★", t: "Événements & Fêtes", d: "Des conférences citoyennes, des expos locales, des concerts acoustiques et des repas partagés.", tags: ["Culture", "Convivialité"] },
    { i: "★", t: "Ateliers & Savoirs", d: "Transmettre des compétences pratiques : codage, transition écologique, prise de parole.", tags: ["Partage", "Pratique"] },
    { i: "★", t: "Solidarité Active", d: "Des permanences d'entraide numérique, de l'inclusion sociale et du soutien aux initiatives locales.", tags: ["Impact", "Proximité"] },
    { i: "★", t: "Projets Collectifs", d: "Financement participatif et accompagnement de projets associatifs bruxellois.", tags: ["Co-création", "ASBL"] },
  ];

  const events = [
    { d: "15", m: "Juin", t: "Apéro des Voisins & Pitch de Projets", meta: ["18h30 · Espace convivial", "Entrée libre · Apportez un en-cas"], cta: "Participer" },
    { d: "22", m: "Juin", t: "Initiation Podcast — Enregistrez votre voix", meta: ["14h00 · Studio Radio", "Gratuit · sur inscription"], cta: "S'inscrire" },
    { d: "29", m: "Juin", t: "Fresque de la Transition Numérique", meta: ["19h00 · Grande Salle", "Intelligence collective"], cta: "Réserver" },
  ];

  const vals = [
    { k: "✨", t: "Humain d'abord", d: "L'accueil et la bienveillance guident chaque rencontre dans nos espaces." },
    { k: "🤝", t: "Force du collectif", d: "C'est en croisant nos idées et nos énergies qu'on change la ville." },
    { k: "🌱", t: "Simplicité & Durabilité", d: "Des solutions ancrées dans le bon sens et respectueuses du vivant." },
    { k: "🎈", t: "Créativité partagée", d: "Pas besoin d'être un expert pour créer, oser et s'amuser ensemble." },
  ];

  const paths = [
    { k: "Communauté", t: "Rejoindre la tribu", d: "Devenez membre pour accéder au lieu et participer à la vie du hub.", cta: "C'est parti !" },
    { k: "Entraide", t: "Donner un coup de main", d: "Partagez vos passions ou donnez un peu de temps pour nos projets solidaires.", cta: "Je m'engage" },
    { k: "Soutien", t: "Faire vivre le projet", d: "Faites un don pour nous aider à garder nos activités accessibles à tous.", cta: "Faire un don" },
  ];

  return (
    <div className="toc-home dirB">
      {/* NAV */}
      <nav className="nav">
        <a className="nav-logo" href="#mission">
          <image-slot id="logoB" shape="rounded" radius="8" style={{ width: "40px", height: "40px" }} placeholder="Logo"></image-slot>
          <span className="nav-word">The One Community<span>asbl · Ensemble à Bruxelles</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#mission">Notre histoire</a></li>
          <li><a href="#activities">Le lieu</a></li>
          <li><a href="#agenda">Agenda des activités</a></li>
          <li><a href="#join">Agir avec nous</a></li>
        </ul>
        <a className="btn btn-primary" href="#foot">Passer nous voir</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="badge-vib">BIENVENUE CHEZ VOUS ☀</div>
            <h1 className="title-bold">Un lieu vibrant pour se <span>rencontrer,</span> créer et <em>s'entraider.</em></h1>
            <p className="hero-sub">The One Community est un tiers-lieu associatif et chaleureux au cœur de Bruxelles. Ici, on mixe les cultures, on partage nos savoirs et on fait grandir des projets solidaires.</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#agenda">Découvrir le programme</a>
              <a className="btn btn-secondary" href="#join">Devenir membre</a>
            </div>
          </div>
          <div className="hero-media">
            <image-slot id="heroB" shape="rounded" radius="24" style={{ width: "100%", height: "520px" }} placeholder="Photo souriante de l'équipe et des membres"></image-slot>
            <div className="hero-badge">
              <span className="emoji">🌻</span>
              <span className="lbl">Déjà <strong>1500+ bruxellois</strong> engagés au quotidien !</span>
            </div>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section className="mission" id="mission">
        <div className="wrap">
          <p className="quote">
            Notre rêve ? Construire un espace d'<strong>apprentissage populaire et de solidarité</strong> où chaque personne se sent accueillie, écoutée et actrice du changement à Bruxelles.
          </p>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section className="activities" id="activities">
        <div className="wrap">
          <div className="shead">
            <h2 className="title-section">La vie au quotidien</h2>
            <p className="lead">Une ruche d'activités ouverte à toutes et tous, des petits matins caféinés aux soirées de débats.</p>
          </div>
          <div className="acts">
            {acts.map((a, idx) => (
              <article className="act" key={idx}>
                <div className="idx">{a.i}</div>
                <h3>{a.t}</h3>
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
            <h2 className="title-section">L'Agenda du coin</h2>
            <a className="btn btn-secondary" href="#agenda">Toutes les dates</a>
          </div>
          <div className="events">
            {events.map((e, i) => (
              <article className="event" key={i}>
                <div className="ev-date">
                  <div className="d">{e.d}</div>
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
            <h2 className="title-section">Ce qui nous anime</h2>
            <p className="lead">Des principes simples pour une vie associative joyeuse, inclusive et dynamique.</p>
          </div>
          <div className="vals">
            {vals.map((v) => (
              <div className="val" key={v.t}>
                <div className="vk">{v.k}</div>
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
            <h2 className="title-section">Faites partie de l'aventure !</h2>
            <p>Pas besoin de grand-chose pour commencer : une idée, un sourire, ou simplement l'envie de boire un café en bonne compagnie.</p>
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
                <image-slot id="logoBf" shape="rounded" radius="6" style={{ width: "38px", height: "38px" }} placeholder="Logo"></image-slot>
                <strong>The One Community</strong>
              </div>
              <p className="blurb">Un projet citoyen porté par l'ASBL The One Community à Bruxelles depuis 2017. Rejoignez la dynamique !</p>
            </div>
            <div>
              <h5>Le Tiers-Lieu</h5>
              <ul>
                <li>60A Rue Haute, 1000 Bruxelles</li>
                <li>Mardi au Samedi · 10h–20h</li>
                <li>Dimanche brunch · 11h–16h</li>
              </ul>
            </div>
            <div>
              <h5>Prendre contact</h5>
              <ul>
                <li><a href="https://wa.me/32489280722" target="_blank" rel="noopener noreferrer">+32 489 28 07 22 (WhatsApp)</a></li>
                <li><a href="mailto:info.theonecommunity@gmail.com">info.theonecommunity@gmail.com</a></li>
                <li><a href="https://www.instagram.com/theonecommunity_asbl" target="_blank" rel="noopener noreferrer">Instagram @theonecommunity_asbl</a></li>
                <li><a href="https://www.facebook.com/Theonecommunity" target="_blank" rel="noopener noreferrer">Facebook Theonecommunity</a></li>
              </ul>
            </div>
            <div>
              <h5>Découvrir</h5>
              <ul>
                <li><a href="#mission">Qui sommes-nous ?</a></li>
                <li><a href="#join">Devenir bénévole</a></li>
                <li><a href="#activities">Location d'espaces</a></li>
                <li><a href="#join">Faire un don</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2025 The One Community asbl</span>
            <div className="legal">
              <span>N° 0671.522.486</span>
              <a href="#">Mentions légales</a>
              <a href="#">Vie privée</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
window.HomeB = HomeB;
