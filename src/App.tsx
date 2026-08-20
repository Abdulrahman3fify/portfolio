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

const destinations = [
  { id: "top", label: "Arrivals" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Systems" },
  { id: "contact", label: "Board" },
] as const;

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

function useHere() {
  const [here, setHere] = useState("top");
  useEffect(() => {
    const ids = destinations.map((d) => d.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setHere(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return here;
}

const Icon = {
  mail: (
    <path d="M3 5h18v14H3V5Zm1.5 1.5 7.5 6 7.5-6H4.5ZM20 7.8l-8 6.4-8-6.4V17.5h16V7.8Z" />
  ),
  pin: (
    <path d="M12 2.5A6.5 6.5 0 0 0 5.5 9c0 4.6 6.5 12.5 6.5 12.5S18.5 13.6 18.5 9A6.5 6.5 0 0 0 12 2.5Zm0 8.8A2.3 2.3 0 1 1 12 6.7a2.3 2.3 0 0 1 0 4.6Z" />
  ),
  linkedin: (
    <path d="M5 3.4A1.9 1.9 0 1 0 5 7.2 1.9 1.9 0 0 0 5 3.4ZM3.4 8.8H6.6V20.5H3.4V8.8Zm5.3 0H12v1.6h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.5 2.5 4.5 5.75v6.3h-3.2v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.69H8.7V8.8Z" />
  ),
  github: (
    <path d="M12 2.2C6.5 2.2 2 6.8 2 12.4c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.21-3.37-1.21-.45-1.17-1.11-1.48-1.11-1.48-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.13-4.55-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.3 9.3 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.76-4.57 5.02.36.31.68.93.68 1.89v2.8c0 .27.18.59.69.48A10 10 0 0 0 22 12.4C22 6.8 17.5 2.2 12 2.2Z" />
  ),
  phone: (
    <path d="M6.7 10.7a14.7 14.7 0 0 0 6.6 6.6l2.1-2.1a.9.9 0 0 1 .95-.22 11 11 0 0 0 3.45.55.9.9 0 0 1 .9.9V20a.9.9 0 0 1-.9.9A16.6 16.6 0 0 1 3.1 4.9.9.9 0 0 1 4 4h3.4a.9.9 0 0 1 .9.9c0 1.2.2 2.38.55 3.45a.9.9 0 0 1-.22.95l-1.93 2.4Z" />
  ),
  sun: (
    <path d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 3.2v2.1M12 18.7v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3.2 12h2.1M18.7 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
  ),
  moon: <path d="M20.2 13.1A8.2 8.2 0 1 1 10.9 3.8 6.4 6.4 0 0 0 20.2 13.1Z" />,
  calendar: (
    <path d="M7.2 3v2.2M16.8 3v2.2M4.4 7.4h15.2M5.5 5.2h13a1.3 1.3 0 0 1 1.3 1.3V19a1.3 1.3 0 0 1-1.3 1.3h-13A1.3 1.3 0 0 1 4.2 19V6.5A1.3 1.3 0 0 1 5.5 5.2Z" />
  ),
  apple: (
    <path d="M17.05 12.04c-.03-2.6 2.12-3.84 2.22-3.9-1.21-1.78-3.09-2.02-3.76-2.05-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.02-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.29-.05 1.78-.83 3.34-.83s2 .83 3.37.81c1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.73-4.13M14.5 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44" />
  ),
  play: <path d="M5 4.2v15.6L19.2 12 5 4.2Z" />,
  globe: (
    <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm0 0c2 2.6 3.1 5.5 3.3 8.8H8.7C8.9 8.7 10 5.8 12 3.2Zm0 17.6c-2-2.6-3.1-5.5-3.3-8.8h6.6c-.2 3.3-1.3 6.2-3.3 8.8ZM3.5 12h3.3m10.4 0h3.3" />
  ),
};

function platformIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("app store")) return Icon.apple;
  if (l.includes("play")) return Icon.play;
  return Icon.globe;
}

function Svg({
  children,
  className = "",
  stroke = false,
}: {
  children: ReactNode;
  className?: string;
  stroke?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : undefined}
      strokeWidth={stroke ? 1.8 : undefined}
      strokeLinecap={stroke ? "square" : undefined}
    >
      {children}
    </svg>
  );
}

function Plate({
  href,
  children,
  active,
  className = "",
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`here-mark block px-3 py-2 font-display text-lg font-bold uppercase tracking-wide ${
        active
          ? "bg-plate text-plate-ink"
          : "bg-idle text-ink hover:bg-plate hover:text-plate-ink"
      } ${className}`}
    >
      {children}
    </a>
  );
}

function Ticket({ href, children, icon }: { href: string; children: ReactNode; icon: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 bg-plate px-3 py-2 font-display text-sm font-bold uppercase tracking-wide text-plate-ink hover:brightness-95"
    >
      <Svg className="h-3.5 w-3.5">{icon}</Svg>
      {children}
    </a>
  );
}

function Nav({ here, theme, toggle }: { here: string; theme: "light" | "dark"; toggle: () => void }) {
  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-[11.5rem] lg:flex-col lg:border-r lg:border-line lg:bg-paper">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-plate px-4 py-3 lg:block lg:border-b-0 lg:px-3 lg:py-5">
        <a
          href="#top"
          className="font-display text-3xl font-extrabold leading-none tracking-tight text-plate-ink"
        >
          AA
        </a>
        <p className="hidden font-display text-xs font-semibold uppercase tracking-[0.18em] text-plate-ink/80 lg:mt-2 lg:block">
          Line EM
        </p>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "day hall" : "night terminal"}`}
            className="bg-plate-ink p-2 text-plate"
          >
            <Svg className="h-4 w-4" stroke={theme === "dark"}>
              {theme === "dark" ? Icon.sun : Icon.moon}
            </Svg>
          </button>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer"
            className="bg-plate-ink px-3 py-2 font-display text-xs font-bold uppercase tracking-wide text-plate"
          >
            Board
          </a>
        </div>
      </div>
      <nav aria-label="Terminal map" className="overflow-x-auto lg:flex lg:flex-1 lg:flex-col">
        <ul className="flex min-w-max lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-1 lg:p-3">
          {destinations.map((d) => (
            <li key={d.id} className="shrink-0">
              <Plate href={`#${d.id}`} active={here === d.id} className="lg:w-full">
                {d.label}
              </Plate>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden border-t border-line p-3 lg:block">
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "day hall" : "night terminal"}`}
          className="mb-2 flex w-full items-center justify-between bg-idle px-3 py-2 font-display text-sm font-bold uppercase tracking-wide text-ink hover:bg-plate hover:text-plate-ink"
        >
          {theme === "dark" ? "Day hall" : "Night ops"}
          <Svg className="h-4 w-4" stroke={theme === "dark"}>
            {theme === "dark" ? Icon.sun : Icon.moon}
          </Svg>
        </button>
        <a
          href={profile.calendly}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center bg-plate-ink px-3 py-3 font-display text-sm font-bold uppercase tracking-wide text-plate hover:bg-ink"
        >
          Proceed to gate
        </a>
      </div>
    </header>
  );
}

function GateBlade() {
  return (
    <section id="top" className="scroll-mt-20 lg:scroll-mt-0">
      <div className="blade bg-plate text-plate-ink">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-plate-ink/15 px-5 py-3 sm:px-8">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em]">
            Gate 09Y · Muscat
          </p>
          <p className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em]">
            <span className="h-2.5 w-2.5 bg-plate-ink" aria-hidden />
            Available
          </p>
        </div>
        <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-end lg:gap-12 lg:py-12">
          <div>
            <h1 className="font-display text-[clamp(3.4rem,12vw,6rem)] font-extrabold leading-[0.82] tracking-tight">
              Abdulrahman
              <br />
              Afify
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl font-semibold uppercase leading-none tracking-wide sm:text-3xl">
              {profile.title}
            </p>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-plate-ink/80 sm:text-lg">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={profile.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-plate-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-plate hover:brightness-110"
              >
                <Svg className="h-4 w-4">{Icon.calendar}</Svg>
                Proceed to gate · 30 min
              </a>
              <a
                href="#work"
                className="inline-flex items-center bg-transparent px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-plate-ink ring-2 ring-inset ring-plate-ink hover:bg-plate-ink hover:text-plate"
              >
                View bays
              </a>
            </div>
          </div>
          <figure className="justify-self-start lg:justify-self-end">
            <div className="relative w-44 shadow-[4px_12px_28px_rgba(14,17,20,0.22)] sm:w-52">
              <img
                src="/profile.jpg"
                alt="Abdulrahman Afify, Engineering Manager for frontend and mobile"
                className="aspect-[4/5] w-full object-cover object-top"
                width={208}
                height={260}
              />
              <figcaption className="absolute left-0 top-0 bg-plate-ink px-2 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-plate">
                ID
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <div className="overflow-x-auto border-b border-line bg-ink text-hall">
        <table className="min-w-full text-left">
          <caption className="sr-only">Delivery proof</caption>
          <thead>
            <tr className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-hall/55">
              <th className="px-5 py-3 sm:px-8">Std</th>
              <th className="px-5 py-3 sm:px-8">Destination</th>
              <th className="px-5 py-3 sm:px-8">Status</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((s) => (
              <tr key={s.label} className="border-t border-hall/15">
                <td className="px-5 py-4 font-display text-3xl font-extrabold tabular-nums text-plate sm:px-8 sm:text-4xl">
                  {s.value}
                </td>
                <td className="px-5 py-4 font-display text-lg font-semibold uppercase tracking-wide sm:px-8">
                  {s.label}
                </td>
                <td className="px-5 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-plate sm:px-8">
                  On time
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="work" className="scroll-mt-20 border-b border-line lg:scroll-mt-0">
      <header className="flex flex-wrap items-end justify-between gap-3 px-5 py-8 sm:px-8">
        <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
          Work
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-steel">
          Flagship products own a bay. Everything else sits on the timetable — named apps, live store links, no invented case studies.
        </p>
      </header>
      <div>
        {featured.map((p, i) => (
          <article
            key={p.name}
            className={`grid gap-6 border-t border-line px-5 py-10 sm:px-8 lg:grid-cols-[8rem_minmax(0,1fr)_14rem] lg:items-end ${
              i % 2 === 0 ? "bg-paper" : "bg-hall"
            }`}
          >
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-steel">
              Bay {String(i + 1).padStart(2, "0")}
              <span className="mt-2 block text-ink">{p.category}</span>
            </p>
            <div>
              <h3 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-5xl">
                {p.name}
              </h3>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="bg-idle px-2 py-1 font-display text-xs font-semibold uppercase tracking-wide text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {p.links && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <Ticket key={l.label} href={l.url} icon={platformIcon(l.label)}>
                      {l.label}
                    </Ticket>
                  ))}
                </div>
              )}
            </div>
            <p className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight lg:text-right">
              {p.metric}
            </p>
          </article>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <caption className="sr-only">Additional shipped products</caption>
          <thead>
            <tr className="border-y border-line bg-paper font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
              <th className="px-5 py-3 sm:px-8">Flight</th>
              <th className="px-5 py-3 sm:px-8">Category</th>
              <th className="px-5 py-3 sm:px-8">Notes</th>
              <th className="px-5 py-3 sm:px-8">Proof</th>
              <th className="px-5 py-3 sm:px-8">Tickets</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((p) => (
              <tr key={p.name} className="border-b border-line align-top">
                <th className="px-5 py-4 font-display text-xl font-bold uppercase tracking-wide sm:px-8">
                  {p.name}
                </th>
                <td className="px-5 py-4 text-sm text-steel sm:px-8">{p.category}</td>
                <td className="px-5 py-4 text-sm leading-relaxed sm:max-w-md sm:px-8">{p.blurb}</td>
                <td className="px-5 py-4 font-display text-sm font-bold uppercase tracking-wide sm:px-8">
                  {p.metric}
                </td>
                <td className="px-5 py-4 sm:px-8">
                  {p.links ? (
                    <div className="flex flex-col items-start gap-1.5">
                      {p.links.map((l) => (
                        <Ticket key={l.label} href={l.url} icon={platformIcon(l.label)}>
                          {l.label}
                        </Ticket>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-steel">Unlisted</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-line px-5 py-12 sm:px-8 lg:scroll-mt-0">
      <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
        Experience
      </h2>
      <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-steel">
        Concourse order: current gates first, as recorded. Titles, dates, and metrics are the source of truth in the data file — not slogans.
      </p>
      <ol className="relative mt-10 border-l-4 border-plate">
        {experience.map((e) => {
          const live = e.period.includes("Present");
          return (
            <li key={e.company + e.period} className="relative py-8 pl-8">
              <span className="absolute -left-[9px] top-10 h-3.5 w-3.5 bg-plate ring-4 ring-hall" aria-hidden />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight">
                  {e.company}
                </h3>
                <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-steel">
                  {e.period}
                  {live ? (
                    <span className="ml-2 bg-plate px-1.5 py-0.5 text-plate-ink">Live</span>
                  ) : null}
                </p>
              </div>
              <p className="mt-2 font-display text-lg font-semibold uppercase tracking-wide">
                {e.role}
                <span className="text-steel"> · {e.location}</span>
              </p>
              <ul className="mt-4 max-w-[70ch] space-y-2">
                {e.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed sm:text-base">
                    {h}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {e.stack.map((t) => (
                  <li
                    key={t}
                    className="bg-idle px-2 py-1 font-display text-[11px] font-semibold uppercase tracking-wide"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-line lg:scroll-mt-0">
      <div className="px-5 py-10 sm:px-8">
        <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
          Systems
        </h2>
      </div>
      <div className="divide-y divide-line border-t border-line">
        {skills.map((s) => (
          <div
            key={s.group}
            className="grid gap-4 px-5 py-6 sm:px-8 md:grid-cols-[12rem_minmax(0,1fr)] md:items-start"
          >
            <h3 className="font-display text-xl font-bold uppercase tracking-wide">{s.group}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="bg-paper px-2.5 py-1.5 font-display text-sm font-semibold uppercase tracking-wide ring-1 ring-line"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid gap-px bg-line sm:grid-cols-3">
        <div className="bg-hall px-5 py-8 sm:px-8">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide">Education</h3>
          <p className="mt-3 font-display text-2xl font-extrabold uppercase leading-none">
            {education.school}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            {education.degree}
            <br />
            {education.period} · {education.location}
          </p>
        </div>
        <div className="bg-hall px-5 py-8 sm:px-8">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide">Certifications</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="bg-hall px-5 py-8 sm:px-8">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide">Awards</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
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
    <section id="contact" className="scroll-mt-20 lg:scroll-mt-0">
      <div className="bg-plate px-5 py-16 text-plate-ink sm:px-8 sm:py-24">
        <p className="font-display text-sm font-bold uppercase tracking-[0.22em]">Final call</p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.85] tracking-tight">
          Proceed
          <br />
          to gate
        </h2>
        <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-plate-ink/80">
          Open to engineering-manager, head-of-mobile, and senior frontend leadership seats, plus selected fractional work. Based in {profile.location}.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-plate-ink px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-plate hover:brightness-110"
          >
            <Svg className="h-4 w-4">{Icon.calendar}</Svg>
            Book a 30-min call
          </a>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-4 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-plate-ink ring-2 ring-inset ring-plate-ink hover:bg-plate-ink hover:text-plate"
            >
              <Svg className="h-4 w-4">{l.icon}</Svg>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <p className="flex flex-wrap items-center gap-2 px-5 py-6 text-xs text-steel sm:px-8">
        <Svg className="h-3.5 w-3.5">{Icon.pin}</Svg>
        {profile.location} · {profile.nationality} · © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const here = useHere();
  return (
    <>
      <a
        href="#top"
        className="absolute left-4 top-4 z-50 -translate-y-20 bg-plate px-4 py-2 font-display font-bold uppercase text-plate-ink focus:translate-y-0"
      >
        Skip to arrivals
      </a>
      <Nav here={here} theme={theme} toggle={toggle} />
      <main className="lg:pl-[11.5rem]">
        <GateBlade />
        <Work />
        <ExperienceSection />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
