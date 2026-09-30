import { useEffect, useState } from 'react';
import { profile, projects, experience } from '../data';
import ProjectDirectory from './ProjectDirectory';
import './vision.css';

function Arrow({ down = false }: { down?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={down ? { transform: 'rotate(90deg)' } : undefined}><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const cases = [
  { name: 'Ooredoo Qatar', slug: 'ooredoo', category: 'TELECOM · QATAR', title: 'Everyday services. National scale.', role: 'Senior React Native Developer · iHorizons', summary: 'Production ownership across consumer and business apps, from payments to release pipelines.', metric: '35%', metricLabel: 'faster app performance', reach: '2.5M+ consumer users', image: '/shots/ooredoo/overview.webp', second: '/shots/ooredoo/payments.webp', tech: ['React Native', 'TypeScript', 'Azure DevOps'], detail: 'Delivered Apple Pay, Google Pay, and Ooredoo Money integrations. Built Azure DevOps CI/CD on self-hosted runners and maintained shared packages across the consumer app and Ooredoo Business, which serves 10,000+ enterprise users.' },
  { name: 'Vodafone Oman', slug: 'vodafone', category: 'TELECOM · OMAN', title: 'One codebase. A new chapter.', role: 'Mobile Technical Lead · Contract', summary: 'Led the migration of the live iOS and Android app from native stacks to React Native and Expo.', metric: 'iOS + Android', metricLabel: 'native → React Native & Expo', reach: 'Architecture through release', image: '/shots/vodafone/home.webp', second: '/shots/vodafone/services.webp', tech: ['React Native', 'Expo', 'TanStack Query'], detail: 'Set technical direction across architecture, implementation, code quality, and release delivery. Built the marketplace hub with categories, bundles, and checkout, alongside EAS updates, Expo notifications, and cart reminders.' },
  { name: 'Calo', slug: 'calo', category: 'HEALTH & FOOD · GCC', title: 'A smoother daily routine.', role: 'Senior Mobile Engineer · Contract', summary: 'Mobile engineering and GraphQL optimization for a meal-subscription platform serving 500K+ monthly active users.', metric: '35%', metricLabel: 'lower API latency', reach: '12 major releases in 6 months', image: '/shots/calo.webp', tech: ['React Native', 'GraphQL', 'Zustand'], detail: 'Optimized GraphQL queries to reduce API latency and delivered 12 major releases in six months. Worked with Zustand, CodePush, Firebase, and CleverTap/Segment analytics across the mobile experience.' },
  { name: 'Homzmart', slug: 'homzmart', category: 'COMMERCE · EGYPT', title: 'From the first build to millions.', role: 'Mobile Team Lead', summary: 'Built the React Native app from scratch, owning mobile delivery, checkout, testing, and release pipelines.', metric: '2M+', metricLabel: 'users reached', reach: '15% less cart abandonment', image: '/shots/homzmart.webp', tech: ['React Native', 'GraphQL', 'Detox'], detail: 'Built on GraphQL, Redux Toolkit, and Magento APIs. Improved reliability to 98.7% crash-free sessions with Detox and Jest, and improved checkout with Payfort, Paymob, and Vodafone Cash integrations.' },
];

const additionalProjects = projects.filter(p => !cases.some(c => c.name === p.name) && p.name !== 'Musaned');

export default function Vision() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [menu, setMenu] = useState(false);
  const [allRoles, setAllRoles] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* storage is optional */ }
  }, [dark]);
  return <div className="vision-site">
    <a className="v-skip" href="#main">Skip to content</a>
    <header className="v-header">
      <div className="v-wrap v-nav">
        <a className="v-wordmark" href="#top" aria-label="Abdulrahman Afify, home">afify<span>.</span></a>
        <nav aria-label="Main navigation" className={menu ? 'v-links open' : 'v-links'} id="vision-nav">
          <a href="#work" onClick={() => setMenu(false)}>Selected work</a>
          <a href="#approach" onClick={() => setMenu(false)}>Approach</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>
        <div className="v-nav-actions">
          <button className="v-theme" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
            {dark ? <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg> : <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/></svg>}
          </button>
          <a className="v-nav-cv" href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf">Download CV <Arrow down /></a>
          <button className="v-menu" aria-expanded={menu} aria-controls="vision-nav" onClick={() => setMenu(!menu)}>{menu ? 'Close' : 'Menu'}</button>
        </div>
      </div>
    </header>
    <main id="main">
      <section className="v-wrap v-hero" id="top" aria-labelledby="hero-title">
        <div className="v-hero-copy">
          <div className="v-identity"><img src="/vision/portrait.jpg" alt="Abdulrahman Afify" width="48" height="48"/><div><strong>Abdulrahman Afify</strong><span>Senior Software Engineer · Mobile & Web</span></div></div>
          <h1 id="hero-title">I build mobile<br className="v-desktop-break"/> and web<br className="v-desktop-break"/> <em>products.</em></h1>
          <p className="v-intro">From architecture to production. 9+ years in mobile engineering, including apps used by millions, alongside web experience with React.js and Next.js.</p>
          <div className="v-hero-actions"><a className="v-button" href="#work">Explore my work <Arrow /></a><a className="v-text-link" href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf">Download CV <Arrow down /></a></div>
          <p className="v-availability"><span/> Open to senior & lead engineering roles</p>
        </div>
        <div className="v-hero-art">
          <div className="v-art-top"><span>BUILT FOR THE EVERYDAY.</span><span>iOS / Android</span></div>
          <div className="v-orbit" aria-hidden="true"/>
          <img className="v-hero-shot v-shot-a" src="/shots/ooredoo/overview.webp" alt="Ooredoo Qatar public store screenshot: account overview" width="720" height="1480"/>
          <img className="v-hero-shot v-shot-b" src="/shots/calo.webp" alt="Calo public store screenshot: meal plans" width="420" height="747"/>
          <div className="v-art-proof"><div><strong>2.5M+</strong><span>Ooredoo Qatar consumer users</span></div><a href="#ooredoo" aria-label="Explore Ooredoo Qatar work"><Arrow /></a></div>
          <span className="v-art-caption">Real products. Public store imagery.</span>
        </div>
      </section>
      <div className="v-wrap v-brand-strip"><p>ENGINEERING ACROSS<br/> PRODUCTS YOU KNOW</p><div><span>ooredoo</span><span>vodafone<span className="v-brand-dot">.</span></span><span className="v-calo-brand">calo</span><span>Homzmart</span><span>Musaned</span></div></div>
      <section className="v-wrap v-work v-section" id="work" aria-labelledby="work-title">
        <div className="v-section-heading v-work-heading"><h2 id="work-title">Selected work<span>.</span></h2><p>Real products, clear ownership, measurable impact.<br/> Explore what I delivered on each team.</p></div>
        <nav className="v-project-index" aria-label="Jump to a project">
          {cases.map(c => <a key={c.slug} href={`#${c.slug}`}>{c.name}<Arrow down /></a>)}
          <a href="#musaned">Musaned<Arrow down /></a>
          <a href="#web-work">Web apps<Arrow down /></a>
          <a href="#more-projects">More projects<Arrow down /></a>
        </nav>
        <div className="v-case-grid">
          {cases.map(c => <article className={`v-case ${c.slug}`} key={c.slug} id={c.slug} aria-labelledby={`${c.slug}-title`}>
            <div className="v-case-visual">
              <div className="v-visual-heading"><span>{c.name}</span><span className="v-screen-label">iOS / Android</span></div>
              <div className={c.second ? 'v-case-images pair' : 'v-case-images'}><img src={c.image} alt={`${c.name} public app store imagery`} loading="lazy"/>{c.second && <img src={c.second} alt={`${c.name} additional public app store screen`} loading="lazy"/>}</div>
              <span className="v-image-source">Public app store imagery</span>
            </div>
            <div className="v-case-copy">
              <div className="v-project-title"><h3 id={`${c.slug}-title`}>{c.name}</h3><span>{c.category}</span></div>
              <p className="v-role"><strong>My role</strong>{c.role}</p>
              <p className="v-project-summary">{c.summary}</p>
              <div className="v-project-impact"><div><strong>{c.metric}</strong><span>{c.metricLabel}</span></div><p>{c.reach}</p></div>
              <div className="v-case-tags" aria-label="Technologies">{c.tech.map(t => <span key={t}>{t}</span>)}</div>
              <div className="v-store-links" role="group" aria-label={`${c.name} product links`}>{projects.find(p => p.name === c.name)?.links?.map(l => <a href={l.url} key={l.url} target="_blank" rel="noreferrer" aria-label={`${c.name} on ${l.label} (opens in a new tab)`}>{l.label} <Arrow /></a>)}</div>
              <details className="v-case-detail"><summary><span className="v-detail-label"><span className="v-detail-closed">View my contribution</span><span className="v-detail-open">Hide contribution</span><span className="v-sr-only"> to {c.name}</span></span><svg className="v-detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg></summary><div><p>{c.detail}</p></div></details>
            </div>
          </article>)}
        </div>
        <div className="v-musaned" id="musaned"><div><span className="v-eyebrow">ALSO IN PRODUCTION / MUSANED</span><h3>Growth without compromising reliability.</h3><p>Mobile architecture and leadership of a five-person team at Tamkeen Technology.</p></div><div className="v-musaned-stat"><strong>99.5%</strong><span>crash-free sessions</span></div><div className="v-musaned-stat"><strong>200K+</strong><span>downloads, up from 50K</span></div><div className="v-store-links v-musaned-links" role="group" aria-label="Musaned product links">{projects.find(p => p.name === 'Musaned')?.links?.map(l => <a key={l.url} href={l.url} target="_blank" rel="noreferrer" aria-label={`Musaned on ${l.label} (opens in a new tab)`}>{l.label}<Arrow /></a>)}</div></div>
        <section className="v-web-work" id="web-work" aria-labelledby="web-title">
          <div className="v-web-intro"><h2 id="web-title">On the web,<br/><em>too.</em></h2><p>React.js and Next.js experience across web portals, marketplaces, and dashboards.</p><p className="v-web-stack">React.js · Next.js · TypeScript · Python & Django fundamentals</p></div>
          <div className="v-web-projects">
            <article><div><h3>AutomationPro · Ops Platform</h3><span>Next.js · TypeScript · Electron</span></div><p>Operations management frontend with a dashboard, project and work-order detail flows, and reusable tables, forms, and dialogs, packaged with an Electron desktop shell.</p><span className="v-project-domain">Frontend implementation · Demo data</span></article>
            <article><div><h3>TokenEyes</h3><span>React.js · Shared web & mobile architecture</span></div><p>Built shared business logic and centralized state in a monorepo spanning web and mobile, with payment and analytics integrations.</p><a className="v-text-link" href={projects.find(p => p.name === 'TokenEyes')?.links?.find(l => l.label === 'Web portal')?.url} target="_blank" rel="noreferrer" aria-label="Visit TokenEyes web portal (opens in a new tab)">Visit web portal <Arrow /></a></article>
            <article><div><h3>Faheem</h3><span>Next.js · Tutoring marketplace</span></div><p>Led a four-engineer team delivering across React Native and Next.js, with eight releases in ten months and Redux Toolkit state management.</p><a className="v-text-link" href={projects.find(p => p.name === 'Faheem')?.links?.find(l => l.label === 'Web')?.url} target="_blank" rel="noreferrer" aria-label="Visit Faheem website (opens in a new tab)">Visit website <Arrow /></a></article>
            <article><div><h3>SoloGusto & CarVentru</h3><span>React.js · Product dashboards</span></div><p>Delivered web dashboards alongside mobile apps at Al-Manarh, using TypeScript, Zustand, and TanStack Query.</p></article>
          </div>
        </section>
        <section className="v-more" id="more-projects" aria-labelledby="more-projects-title">
          <div className="v-more-intro"><h2 id="more-projects-title">More projects <small>{additionalProjects.length}</small></h2><p>Explore the wider portfolio, from fintech to healthcare. Search by name or technology, or filter by industry.</p></div>
          <ProjectDirectory projects={additionalProjects} />
        </section>
      </section>
      <section className="v-approach" id="approach"><div className="v-wrap v-section"><div className="v-section-heading"><div><h2>Ownership, from<br/>start to shipped.</h2></div><p>Good product engineering connects product decisions, technical foundations, and what happens after launch.</p></div><div className="v-principles">
        <article><span>01</span><h3>Build the foundation.</h3><p>Shared business logic, native integrations, and clear boundaries between app state and server data.</p><small>React Native · Expo · TypeScript</small></article>
        <article><span>02</span><h3>Make every release count.</h3><p>Automated pipelines, practical testing, and dependable delivery from development to the stores.</p><small>GitHub Actions · CircleCI · Azure DevOps · EAS · Jest · Detox</small></article>
        <article><span>03</span><h3>Stay close to production.</h3><p>Profile performance, monitor crashes, and turn production feedback into a better product.</p><small>Sentry · Crashlytics · Analytics</small></article>
      </div></div></section>
      <section className="v-wrap v-section v-experience" id="experience"><div><h2>Hands-on engineer.<br/><em>Team multiplier.</em></h2><p>From building the first version to leading the people shipping the next one.</p><a className="v-text-link" href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf">The full story in my CV <Arrow down /></a><div className="v-about-note"><img src="/vision/portrait.jpg" alt="" width="64" height="64" loading="lazy"/><p>Based in Muscat, Oman.<br/>Working across teams and time zones.</p></div></div>
        <div className="v-timeline"><div id="experience-roles">{(allRoles ? experience : experience.slice(0, 6)).map(e => <details key={e.company} className="v-job"><summary><div><span className="v-job-company">{e.company}</span><span className="v-job-role">{e.role}</span></div><div><span className="v-job-period">{e.period}</span><span className="v-job-type">{e.type || 'Experience'} <span>+</span></span></div></summary><ul>{e.highlights.map(h => <li key={h}>{h}</li>)}</ul></details>)}</div><button aria-expanded={allRoles} aria-controls="experience-roles" className="v-text-link v-show-roles" onClick={() => setAllRoles(!allRoles)}>{allRoles ? 'Show fewer roles' : `View ${experience.length - 6} more roles`} <Arrow down /></button><p className="v-timeline-note">Contract, advisory, and freelance engagements may overlap. Employment types are shown above.</p></div>
      </section>
      <section className="v-wrap v-contact" id="contact"><div className="v-contact-top"><span className="v-eyebrow">LET'S TALK</span><span className="v-availability"><span/> Open to the right opportunity</span></div><div className="v-contact-body"><h2>Your next big thing.<br/><em>Let's build it well.</em></h2><div><p>Looking for a senior engineer with deep mobile expertise and React.js / Next.js web experience?</p><a className="v-button" href={`mailto:${profile.email}`}>Start a conversation <Arrow /></a><a className="v-contact-book" href={profile.calendly} target="_blank" rel="noreferrer">Or book a 30-minute call ↗</a></div></div><div className="v-contact-bottom"><a href={`mailto:${profile.email}`}>{profile.email}</a><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf">CV ↓</a></div></div></section>
    </main>
    <footer className="v-wrap v-footer"><a href="#top" className="v-wordmark">afify<span>.</span></a><span>© {new Date().getFullYear()} Abdulrahman Afify</span><a href="#top">Back to top ↑</a></footer>
  </div>;
}
