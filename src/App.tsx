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

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
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

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Nav({ theme, toggle }: { theme: "light" | "dark"; toggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-field text-on-field">
      <nav className="flex flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10 sm:py-4 lg:px-16">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            {profile.name.split(" ")[0]}
          </a>
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="rounded-[4px] p-2 text-field-mute hover:bg-on-field/10 hover:text-on-field"
            >
              <Svg className="h-4 w-4">{theme === "dark" ? Icon.sun : Icon.moon}</Svg>
            </button>
            <a
              href={profile.calendly}
              target="_blank"
              rel="noreferrer"
              className="rounded-[4px] bg-on-field px-3 py-2 text-xs font-semibold text-field hover:ring-2 hover:ring-field-mute"
            >
              Book a call
            </a>
          </div>
        </div>
        <ul className="flex items-center gap-5 overflow-x-auto text-sm text-field-mute sm:ml-auto">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="hover:text-on-field">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-[4px] p-2 text-field-mute hover:bg-on-field/10 hover:text-on-field"
          >
            <Svg className="h-4 w-4">{theme === "dark" ? Icon.sun : Icon.moon}</Svg>
          </button>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-[4px] bg-on-field px-3 py-2 text-xs font-semibold text-field hover:ring-2 hover:ring-field-mute"
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [first, last] = profile.name.split(" ");
  return (
    <section id="top" className="bg-field text-on-field">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-5 px-5 py-8 sm:gap-x-6 sm:px-10 sm:py-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-10 lg:px-16 lg:py-12">
        <figure className="hero-photo w-[7.75rem] sm:w-[10.5rem] md:col-start-2 md:row-span-2 md:w-[14.5rem] lg:w-[16.5rem]">
          <img
            src="/profile.jpg"
            alt="Abdulrahman Afify, Senior Mobile Engineer"
            width={264}
            height={330}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </figure>
        <div className="min-w-0 md:col-start-1 md:row-start-1">
          <h1 className="text-[clamp(1.75rem,7vw,2.35rem)] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[clamp(2.25rem,5.2vw,3.5rem)]">
            <span className="block">{first}</span>
            <span className="block">{last}</span>
          </h1>
          <p className="mt-3 text-base font-medium leading-snug text-field-mute sm:text-lg md:mt-4 md:text-xl">
            {profile.title}
          </p>
          <p className="mt-2 hidden text-sm leading-relaxed text-field-mute sm:block md:text-base">
            {profile.tagline}. {profile.location}.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-1 md:row-start-2">
          <p className="text-sm leading-relaxed text-field-mute sm:hidden">
            {profile.tagline}. {profile.location}.
          </p>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-field-mute sm:mt-0 md:text-base">
            {profile.summary}
          </p>
          <p className="mt-3 hidden text-sm font-medium tabular-nums text-field-mute sm:block">
            {stats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join("  ·  ")}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
            <a
              href="#work"
              className="rounded-[4px] bg-on-field px-5 py-3 text-sm font-semibold text-field hover:ring-2 hover:ring-field-mute"
            >
              Selected work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[4px] px-5 py-3 text-sm font-semibold text-on-field ring-1 ring-on-field/40 hover:bg-on-field/10"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const lead = projects.slice(0, 6);
  const rest = projects.slice(6);
  return (
    <section id="work" className="scroll-mt-20 px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Work</h2>
      <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-mute">
        Shipped products with live store links. Metrics are from the engagement, not invented case
        studies.
      </p>
      <ul className="mt-14 border-t border-line">
        {lead.map((p) => (
          <li
            key={p.name}
            className="grid gap-3 border-b border-line py-9 sm:grid-cols-[minmax(0,1fr)_9rem] sm:items-end"
          >
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
              <p className="mt-2 text-sm text-mute">
                {p.category}
                {p.links ? (
                  <>
                    {" · "}
                    {p.links.map((l, i) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-accent underline decoration-transparent hover:decoration-accent"
                      >
                        {i > 0 ? " · " : ""}
                        {l.label}
                      </a>
                    ))}
                  </>
                ) : null}
              </p>
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-mute sm:text-base">
                {p.blurb}
              </p>
            </div>
            <p className="text-base font-semibold tabular-nums sm:text-right sm:text-lg">{p.metric}</p>
          </li>
        ))}
      </ul>
      <ul className="mt-2">
        {rest.map((p) => (
          <li
            key={p.name}
            className="grid gap-1 border-b border-line py-4 md:grid-cols-[11rem_minmax(0,1fr)_9rem] md:items-baseline md:gap-8"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm leading-relaxed text-mute">
              {p.blurb}
              {p.links ? (
                <>
                  {" "}
                  {p.links.map((l, i) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-accent underline decoration-transparent hover:decoration-accent"
                    >
                      {i > 0 ? <span aria-hidden="true">·</span> : null}
                      <Svg className="h-3 w-3">{platformIcon(l.label)}</Svg>
                      {l.label}
                    </a>
                  ))}
                </>
              ) : null}
            </p>
            <p className="text-sm tabular-nums text-faint md:text-right">{p.metric}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Experience</h2>
      <ol className="mt-14 space-y-14">
        {experience.map((e) => (
          <li key={e.company + e.period}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight sm:text-2xl">{e.company}</h3>
              <p className="text-sm tabular-nums text-faint">{e.period}</p>
            </div>
            <p className="mt-2 text-sm text-mute sm:text-base">
              {e.role} · {e.location}
            </p>
            <ul className="mt-5 max-w-[70ch] space-y-2">
              {e.highlights.map((h) => (
                <li key={h} className="text-sm leading-relaxed sm:text-base">
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-[70ch] text-xs leading-relaxed text-faint">{e.stack.join(" · ")}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Skills</h2>
      <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="text-sm font-semibold">{s.group}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-mute">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold">Education</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            {education.school}
            <br />
            {education.degree}
            <br />
            {education.period} · {education.location}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Certifications</h3>
          <ul className="mt-2 space-y-1 text-sm text-mute">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Awards</h3>
          <ul className="mt-2 space-y-1 text-sm text-mute">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Icon.mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Icon.phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Icon.linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Icon.github, label: "GitHub", href: profile.github },
  ];
  return (
    <section id="contact" className="scroll-mt-20 bg-field px-5 py-14 text-on-field sm:px-10 sm:py-20 lg:px-16">
      <h2 className="max-w-[16ch] text-2xl font-bold tracking-tight sm:text-4xl sm:leading-[1.05]">
        Let’s talk about the next app you need in market.
      </h2>
      <p className="mt-6 max-w-[48ch] text-field-mute">
        Open to senior and lead mobile engineering roles, and selected freelance work. Based in{" "}
        {profile.location}.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={profile.calendly}
          target="_blank"
          rel="noreferrer"
          className="rounded-[4px] bg-on-field px-5 py-3 text-sm font-semibold text-field hover:ring-2 hover:ring-field-mute"
        >
          Book a 30-min call
        </a>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-[4px] px-4 py-3 text-sm font-medium text-on-field ring-1 ring-on-field/35 hover:bg-on-field/10"
          >
            <Svg className="h-4 w-4">{l.icon}</Svg>
            {l.label}
          </a>
        ))}
      </div>
      <p className="mt-20 flex items-center gap-2 text-xs text-field-mute">
        <Svg className="h-3.5 w-3.5">{Icon.pin}</Svg>
        {profile.location} · {profile.nationality} · © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <a
        href="#top"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-[4px] bg-on-field px-3 py-2 text-sm font-semibold text-field focus:translate-y-0"
      >
        Skip to content
      </a>
      <Nav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <Work />
        <ExperienceSection />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
