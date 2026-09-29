import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon, Svg } from "../App";
import { profile, projects, type Project } from "../data";

const NAME_AR = "عبد الرحمن عفيفي";

const button =
  "inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-[15px] font-semibold text-ground transition-transform duration-300 hover:-translate-y-px active:translate-y-0";

/* ---------- theme (light / dark) ---------- */
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark"
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

function storeIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("app store")) return Icon.apple;
  if (l.includes("play")) return Icon.play;
  return Icon.globe;
}

/** Numbers are measurements, so they get the mono face; words never do. */
function Num({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[0.9em] font-medium tabular-nums">{children}</span>;
}

/* ---------- top bar ---------- */
function TopBar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-5 sm:px-8">
      <a href="#top" className="text-[15px] font-bold tracking-tight">
        Abdulrahman Afify
      </a>
      <nav aria-label="Primary" className="flex items-center gap-5 text-[15px]">
        <a className="link hidden sm:inline" href="#vodafone">
          Work
        </a>
        <a className="link hidden sm:inline" href="#contact">
          Contact
        </a>
        <a className="link" href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf">
          CV
        </a>
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="grid h-9 w-9 place-items-center rounded-full border border-rule transition-colors hover:bg-fg hover:text-ground"
        >
          <Svg className="h-4 w-4">{theme === "dark" ? Icon.sun : Icon.moon}</Svg>
        </button>
      </nav>
    </header>
  );
}

/* ---------- hero: the name, the claim, and the shelf of shipped apps ---------- */
const SHELF: { name: string; label: string; href?: string }[] = [
  { name: "Vodafone Oman", label: "Tech lead", href: "#vodafone" },
  { name: "Ooredoo Qatar", label: "2.5M+ users", href: "#ooredoo" },
  { name: "Homzmart", label: "2M+ users" },
  { name: "Calo", label: "500K+ MAU" },
  { name: "Musaned", label: "200K+ downloads" },
  { name: "TokenEyes", label: "50K+ daily" },
];

function Hero() {
  const shelf = SHELF.map((s) => ({ ...s, project: projects.find((p) => p.name === s.name)! }));
  return (
    <section id="top" className="pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 pt-8 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end lg:gap-16">
        <div>
          <h1 className="text-[clamp(3.25rem,9.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-balance">
            Abdulrahman Afify
          </h1>
          <p
            lang="ar"
            dir="rtl"
            className="mt-5 text-left font-arabic text-[clamp(1.6rem,3.8vw,2.6rem)] font-semibold leading-none text-dim"
          >
            {NAME_AR}
          </p>
        </div>
        <div>
          <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-snug text-balance">
            Senior Mobile Engineer. I lead React Native apps that Gulf telecoms put in millions of
            hands.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf" className={button}>
              <Svg className="h-4 w-4">{Icon.download}</Svg>
              Download CV
            </a>
            <a href={profile.calendly} target="_blank" rel="noreferrer" className="link text-[15px] font-semibold">
              Book a 30-min call
            </a>
          </div>
          <p className="mt-6 text-[15px] text-dim">
            Muscat, Oman · <Num>9+</Num> years · open to senior and lead roles
          </p>
        </div>
      </div>

      <ul
        aria-label="Shipped apps"
        className="mx-auto mt-14 flex max-w-[88rem] snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 sm:mt-20 sm:scroll-px-8 sm:gap-6 sm:px-8"
      >
        {shelf.map(({ project: p, label, href }) => {
          const external = !href;
          const target = href ?? p.links?.[0]?.url;
          return (
            <li key={p.name} className="w-[58vw] max-w-[15rem] shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-1 lg:shrink">
              <a
                href={target}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group block"
              >
                <div className="aspect-[420/747] overflow-hidden rounded-[1.25rem] bg-paper">
                  <img
                    src={p.shot}
                    alt={`${p.name} App Store listing`}
                    width={420}
                    height={747}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3">
                  <span className="block font-semibold leading-snug group-hover:underline group-hover:underline-offset-4">
                    {p.name}
                  </span>
                  <span className="block text-sm text-dim">{label}</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------- Vodafone Oman: sticky device, the screen changes as the story scrolls ---------- */
type Step = { screen: string; caption: string; title: string; body: string; stack: string[] };

const VF_STEPS: Step[] = [
  {
    screen: "/shots/vodafone/home.webp",
    caption: "Account overview",
    title: "From two native stacks to one React Native codebase",
    body: "Led the migration of the live iOS and Android app to React Native and Expo, and set the technical direction across architecture, implementation, code quality, and release delivery.",
    stack: ["React Native", "Expo", "TypeScript"],
  },
  {
    screen: "/shots/vodafone/services.webp",
    caption: "Plans and services",
    title: "Server data and app state, kept apart",
    body: "TanStack Query for everything that comes from the backend, Zustand for session and app state.",
    stack: ["TanStack Query", "Zustand", "REST"],
  },
  {
    screen: "/shots/vodafone/onboarding.webp",
    caption: "Digital onboarding",
    title: "Sign-up that validates itself",
    body: "Sign-up and profile forms built on React Hook Form and validated by Zod schemas.",
    stack: ["React Hook Form", "Zod"],
  },
  {
    screen: "/shots/vodafone/topup.webp",
    caption: "Top-up",
    title: "A marketplace inside the account app",
    body: "Built the marketplace hub (categories, bundles, and checkout) with Expo notifications and cart-reminder flows.",
    stack: ["React Navigation", "Expo Notifications"],
  },
  {
    screen: "/shots/vodafone/sim.webp",
    caption: "SIM activation",
    title: "Fixes that don't wait for a store release",
    body: "EAS Build produces the store binaries; EAS Update ships JavaScript fixes over the air.",
    stack: ["EAS Build", "EAS Update"],
  },
];

function Device({ steps, active }: { steps: Step[]; active: number }) {
  return (
    <div className="relative mx-auto aspect-[640/1313] w-[min(17.5rem,39vh)] rounded-[2.6rem] bg-[#0c0c0c] p-[0.65rem] shadow-[0_40px_70px_-30px_rgba(40,0,0,0.7)]">
      <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-white">
        {steps.map((s, i) => (
          <img
            key={s.screen}
            src={s.screen}
            alt=""
            aria-hidden="true"
            width={640}
            height={1313}
            className="device-screen absolute inset-0 h-full w-full object-cover"
            style={{ zIndex: i, clipPath: i <= active ? "inset(0 0 0 0)" : "inset(100% 0 0 0)" }}
          />
        ))}
      </div>
    </div>
  );
}

function VodafoneCase() {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // A zero-height line across the middle of the viewport: whichever step crosses it is current.
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    steps.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const vf = projects.find((p) => p.name === "Vodafone Oman")!;

  return (
    <section id="vodafone" aria-labelledby="vf-title" className="bg-vf text-white">
      <div className="mx-auto max-w-[88rem] px-5 pt-20 sm:px-8 sm:pt-28">
        <h2
          id="vf-title"
          className="text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
        >
          My Vodafone Oman
        </h2>
        <p className="mt-5 text-lg">
          Mobile Technical Lead · Contract · Muscat · <Num>Jun 2025 – Jun 2026</Num>
        </p>
        <p className="mt-10 max-w-[44ch] text-[clamp(1.35rem,2.4vw,1.75rem)] font-medium leading-snug text-balance">
          A national telco&rsquo;s live app, moved off native iOS and Android onto React Native and
          Expo. Five decisions that shaped it.
        </p>
      </div>

      <div className="mx-auto grid max-w-[88rem] px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-2 lg:gap-20">
        <div className="hidden lg:block">
          <div className="sticky top-[calc(50vh_-_19.5rem)] py-4">
            <Device steps={VF_STEPS} active={active} />
            <p className="mt-6 text-center text-[15px]" aria-live="polite">
              {VF_STEPS[active].caption}
            </p>
          </div>
        </div>

        <ol className="lg:py-[18vh]">
          {VF_STEPS.map((s, i) => (
            <li
              key={s.title}
              ref={(el) => {
                steps.current[i] = el;
              }}
              data-step={i}
              className="border-t border-white/35 py-12 lg:flex lg:min-h-[72vh] lg:flex-col lg:justify-center lg:border-t-0 lg:py-0"
            >
              <img
                src={s.screen}
                alt={`${s.caption} screen, from the App Store listing`}
                width={640}
                height={1313}
                loading="lazy"
                className="mb-8 w-40 rounded-[1.4rem] border-[6px] border-[#0c0c0c] lg:hidden"
              />
              <h3 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-balance">
                {s.title}
              </h3>
              <p className="mt-5 max-w-[46ch] text-lg leading-relaxed">{s.body}</p>
              <p className="mt-6 text-[15px] font-semibold">{s.stack.join("  ·  ")}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-4 border-t border-white/35 px-5 py-6 text-[15px] sm:px-8">
        <span>Screens from the App Store listing.</span>
        {vf.links?.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-2 font-semibold">
            <Svg className="h-4 w-4">{storeIcon(l.label)}</Svg>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Ooredoo Qatar: three store frames, three outcomes ---------- */
const OO_FRAMES = [
  {
    src: "/shots/ooredoo/overview.webp",
    alt: "Ooredoo Qatar home screen showing usage, bill, and offers",
    title: "35% faster",
    body: "Improved app performance by 35% across the Ooredoo Qatar consumer and business apps.",
  },
  {
    src: "/shots/ooredoo/payments.webp",
    alt: "Ooredoo Qatar payment method selection",
    title: "Apple Pay, Google Pay, Ooredoo Money",
    body: "Payment integrations over hardened REST APIs, with Firebase analytics.",
  },
  {
    src: "/shots/ooredoo/services.webp",
    alt: "Ooredoo Qatar services list",
    title: "One pipeline, shared packages",
    body: "Azure DevOps CI/CD on self-hosted runners, Liferay integration, and shared packages across the consumer and business apps.",
  },
];

function OoredooCase() {
  const oo = projects.find((p) => p.name === "Ooredoo Qatar")!;
  return (
    <section id="ooredoo" aria-labelledby="oo-title" className="bg-oo-field">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <h2
              id="oo-title"
              className="text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-oo"
            >
              Ooredoo Qatar
            </h2>
            <p className="mt-5 text-lg">
              Senior React Native Developer, iHorizons · Full-time · Remote ·{" "}
              <Num>Jun 2024 – now</Num>
            </p>
          </div>
          <p className="max-w-[40ch] text-[clamp(1.35rem,2.4vw,1.75rem)] font-medium leading-snug text-balance">
            Production ownership of the consumer app for <Num>2.5M+</Num> users and Ooredoo Business
            for <Num>10,000+</Num> enterprise users.
          </p>
        </div>

        <ul className="mt-14 grid gap-12 sm:mt-20 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {OO_FRAMES.map((f) => (
            <li key={f.src}>
              <img
                src={f.src}
                alt={f.alt}
                width={720}
                height={1480}
                loading="lazy"
                className="w-full max-w-[16rem] rounded-[1.25rem] sm:max-w-none"
              />
              <h3 className="mt-6 text-[clamp(1.4rem,2.2vw,1.85rem)] font-bold leading-tight tracking-[-0.025em]">
                {f.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-6 text-[15px]">
          <span className="mr-auto">Screens from the Google Play listing.</span>
          {oo.links?.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-2 font-semibold">
              <Svg className="h-4 w-4">{storeIcon(l.label)}</Svg>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- everything else, as an index rather than a card grid ---------- */
function StoreIcons({ project }: { project: Project }) {
  return (
    <span className="flex justify-end gap-3.5 sm:order-4">
      {project.links?.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on ${l.label}`}
          className="text-dim transition-colors hover:text-fg"
        >
          <Svg className="h-[1.05rem] w-[1.05rem]">{storeIcon(l.label)}</Svg>
        </a>
      ))}
    </span>
  );
}

function AlsoShipped() {
  const rows = projects.filter((p) => p.name !== "Vodafone Oman" && p.name !== "Ooredoo Qatar");
  return (
    <section id="work" aria-labelledby="index-title" className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2 id="index-title" className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.035em]">
          Also shipped
        </h2>
        <p className="max-w-[42ch] text-dim">
          <Num>{rows.length}</Num> more products, picked from <Num>50+</Num> apps across commerce,
          health, fintech, and mobility.
        </p>
      </div>
      <ul className="mt-10 border-t border-rule">
        {rows.map((p) => (
          <li
            key={p.name}
            className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-rule py-4 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_minmax(0,15rem)_5.5rem] sm:items-baseline"
          >
            <span className="font-semibold">{p.name}</span>
            <StoreIcons project={p} />
            <span className="text-[15px] text-dim sm:order-2">{p.category}</span>
            <span className="text-right text-[15px] sm:order-3 sm:text-left">{p.metric}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[15px] text-dim">
        Roles, dates, and the full stack for each are in the{" "}
        <a href="/cv.pdf" download="Abdulrahman-Afify-CV.pdf" className="link font-semibold text-fg">
          CV
        </a>
        .
      </p>
    </section>
  );
}

/* ---------- close ---------- */
function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-rule">
      <div className="mx-auto max-w-[88rem] px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        <h2
          id="contact-title"
          className="max-w-[16ch] text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-balance"
        >
          Hiring for a senior or lead mobile role?
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="link mt-10 inline-block break-all text-[clamp(1.35rem,3.2vw,2.25rem)] font-semibold"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-[15px]">
          <a href={profile.calendly} target="_blank" rel="noreferrer" className={button}>
            <Svg className="h-4 w-4">{Icon.calendar}</Svg>
            Book a 30-min call
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link font-semibold">
            <Num>{profile.phone}</Num>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link font-semibold">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link font-semibold">
            GitHub
          </a>
        </div>
        <footer className="mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-6 text-sm text-dim">
          <span>
            {profile.location} · © {new Date().getFullYear()}
          </span>
          <span lang="ar" dir="rtl" className="font-arabic text-base">
            {NAME_AR}
          </span>
        </footer>
      </div>
    </section>
  );
}

export default function Next() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <VodafoneCase />
        <OoredooCase />
        <AlsoShipped />
        <Contact />
      </main>
    </>
  );
}
