import { useEffect, useState, type ReactNode } from "react";
import {
  profile,
  stats,
  skills,
  experience,
  projects,
  education,
  certifications,
  awards,
} from "./data";

/* ---------- reveal-on-scroll hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- theme (light / dark) ---------- */
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("light")
      ? "light"
      : "dark"
  );
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

/* ---------- small inline icons ---------- */
const Icon = {
  mail: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12l7.6-5H4.4Z" />
  ),
  pin: (
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21H9V9Z" />
  ),
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  ),
  phone: (
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
  ),
  sun: (
    <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM5.64 5.64a1 1 0 0 1 1.42 0l.7.7a1 1 0 0 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41Zm11.3 11.3a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42ZM18.36 5.64a1 1 0 0 1 0 1.41l-.71.71a1 1 0 0 1-1.41-1.42l.7-.7a1 1 0 0 1 1.42 0ZM7.05 16.95a1 1 0 0 1 0 1.41l-.71.71a1 1 0 0 1-1.41-1.41l.7-.71a1 1 0 0 1 1.42 0Z" />
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  calendar: (
    <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm13 7H4v10h16V9ZM4 7h16V6H4v1Z" />
  ),
  apple: (
    <path d="M17.05 12.04c-.03-2.6 2.12-3.84 2.22-3.9-1.21-1.78-3.09-2.02-3.76-2.05-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.02-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.29-.05 1.78-.83 3.34-.83s2 .83 3.37.81c1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.73-4.13M14.5 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44" />
  ),
  play: <path d="M4 3.5v17a1 1 0 0 0 1.5.87l14.5-8.5a1 1 0 0 0 0-1.74L5.5 2.63A1 1 0 0 0 4 3.5Z" />,
  globe: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.6 15.6 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4c.83 1.2 1.48 2.53 1.91 4h-3.82C10.52 6.53 11.17 5.2 12 4ZM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26Zm.81 2h2.95c.34 1.27.8 2.46 1.38 3.56A8.03 8.03 0 0 1 5.07 16Zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.6 15.6 0 0 0 8.02 8ZM12 20c-.83-1.2-1.48-2.53-1.91-4h3.82A13.4 13.4 0 0 1 12 20Zm2.36-6H9.64a14.7 14.7 0 0 1 0-4h4.72a14.7 14.7 0 0 1 0 4Zm.27 5.56c.58-1.1 1.04-2.29 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.6 16.6 0 0 0 0-4h3.38a7.96 7.96 0 0 1 0 4h-3.38Z" />
  ),
};

function platformIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("app store")) return Icon.apple;
  if (l.includes("play")) return Icon.play;
  return Icon.globe;
}

function Svg({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

/* ---------- Nav ---------- */
const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-bold tracking-wide text-heading">
          AA<span className="gradient-text">.</span>
        </a>
        <ul className="hidden gap-7 text-sm sm:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-muted transition-colors hover:text-heading">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Svg className="h-4 w-4">{theme === "dark" ? Icon.sun : Icon.moon}</Svg>
          </button>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-1.5 text-xs font-medium text-heading transition-colors hover:border-accent hover:bg-accent/10"
          >
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 sm:pt-44">
      <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="w-full lg:flex-1">
      <p className="reveal in mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
        <span className="h-2 w-2 rounded-full bg-green-400" /> Available for senior / lead mobile roles
      </p>
      <h1 className="reveal in max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-6xl">
        {profile.name}
      </h1>
      <p className="reveal in mt-4 text-xl font-medium sm:text-2xl">
        <span className="gradient-text">{profile.title}</span>
        <span className="text-faint"> · {profile.tagline}</span>
      </p>
      <p className="reveal in mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.summary}
      </p>
      <div className="reveal in mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
        >
          View selected work
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent hover:bg-accent/10"
        >
          Get in touch
        </a>
      </div>
        </div>
        <div className="reveal in mx-auto w-44 shrink-0 sm:w-52 lg:mx-0">
          <div className="rounded-full bg-gradient-to-br from-accent to-accent-2 p-1.5 shadow-xl shadow-accent/20">
            <img
              src="/profile.jpg"
              alt="Abdulrahman Afify, Senior Mobile Engineer"
              className="aspect-square w-full rounded-full object-cover ring-4 ring-ink"
            />
          </div>
        </div>
      </div>

      <dl className="reveal in mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-ink/40 px-6 py-7 text-center">
            <dt className="text-3xl font-extrabold text-heading sm:text-4xl">
              <span className="gradient-text">{s.value}</span>
            </dt>
            <dd className="mt-1 text-xs uppercase tracking-wider text-faint">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ---------- Section heading ---------- */
function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="reveal mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</p>
      <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">{title}</h2>
    </div>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <Heading kicker="Toolbox" title="Skills & technologies" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.group}
            className="reveal rounded-2xl border border-line bg-card/60 p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="mb-4 text-sm font-semibold text-heading">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs text-body"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Experience timeline ---------- */
function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <Heading kicker="Journey" title="Where I've worked" />
      <div className="relative border-l border-line pl-6 sm:pl-8">
        {experience.map((e) => (
          <div key={e.company + e.period} className="reveal relative mb-10 last:mb-0">
            <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink sm:-left-[39px]" />
            <div className="rounded-2xl border border-line bg-card/60 p-6 transition-colors hover:border-accent/40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-heading">{e.company}</h3>
                <span className="text-xs font-medium text-accent">{e.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {e.role} · {e.location}
              </p>
              <ul className="mt-4 space-y-2">
                {e.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-body">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.stack.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <Heading kicker="Selected work" title="Products I've shipped" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="reveal group flex flex-col rounded-2xl border border-line bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                {p.category}
              </span>
              <span className="text-[11px] font-semibold text-faint">{p.metric}</span>
            </div>
            <h3 className="text-lg font-semibold text-heading">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
            {p.links && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs font-semibold text-body transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    <Svg className="h-3.5 w-3.5">{platformIcon(l.label)}</Svg>
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Education / extras ---------- */
function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="reveal rounded-2xl border border-line bg-card/60 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Education</p>
          <h3 className="text-lg font-semibold text-heading">{education.school}</h3>
          <p className="mt-1 text-sm text-body">{education.degree}</p>
          <p className="mt-1 text-xs text-faint">
            {education.period} · {education.location}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted">{education.coursework}</p>
        </div>
        <div className="reveal rounded-2xl border border-line bg-card/60 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Certifications</p>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-body">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded-2xl border border-line bg-card/60 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Awards</p>
          <ul className="space-y-2">
            {awards.map((a) => (
              <li key={a} className="flex gap-2.5 text-sm text-body">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact / footer ---------- */
function Contact() {
  const links = [
    { icon: Icon.mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Icon.phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Icon.linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Icon.github, label: "GitHub", href: profile.github },
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="reveal overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-card to-ink p-10 text-center sm:p-16">
        <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
          Let's build something <span className="gradient-text">great</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Open to senior and lead mobile engineering roles, and selected freelance work. Based in {profile.location}.
        </p>
        <div className="mt-8">
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
          >
            <Svg className="h-4 w-4">{Icon.calendar}</Svg>
            Book a 30-min call
          </a>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-accent hover:bg-accent/10"
            >
              <Svg className="h-4 w-4">{l.icon}</Svg>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-10 flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-faint">
        <Svg className="h-3.5 w-3.5">{Icon.pin}</Svg>
        {profile.location} · {profile.nationality} · © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
