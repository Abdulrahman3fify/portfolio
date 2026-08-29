export const profile = {
  name: "Abdulrahman Afify",
  title: "Senior Mobile Engineer",
  tagline: "React Native · React · TypeScript — 9+ years",
  summary:
    "Senior Mobile Engineer with 9+ years building high-performance iOS and Android apps. Scaled products to 2M+ users, sustained up to 99.5% crash-free sessions, and shipped 50+ apps across fintech, e-commerce, healthcare, and telecom.",
  location: "Muscat, Oman (Al Khoudh)",
  nationality: "Egyptian",
  email: "Abdelrahman3fify@gmail.com",
  phone: "+968 9228 0742",
  linkedin: "https://linkedin.com/in/abdulrahman-a-764151162/",
  github: "https://github.com/Abdulrahman3fify",
  calendly: "https://calendly.com/abdulrahmanafify-95/30min",
};

export const stats = [
  { value: "9+", label: "Years experience" },
  { value: "2M+", label: "Users reached" },
  { value: "50+", label: "Apps shipped" },
  { value: "99.5%", label: "Crash-free sessions" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Swift", "Kotlin", "SQL"],
  },
  {
    group: "Mobile & Web",
    items: [
      "React Native",
      "React.js",
      "Redux / Toolkit",
      "MobX",
      "Context API",
      "React Query",
      "GraphQL / REST",
    ],
  },
  {
    group: "Backend & Infra",
    items: ["Node.js", "Firebase", "Supabase", "CI/CD", "GitHub Actions", "Fastlane", "EAS / CodePush"],
  },
  {
    group: "Quality",
    items: ["Jest", "Detox", "Sentry", "Instabug", "Performance profiling"],
  },
  {
    group: "Growth & Ops",
    items: ["CleverTap", "Segment", "AppsFlyer", "Adjust", "Datadog"],
  },
  {
    group: "AI-assisted dev",
    items: ["Codex", "Claude", "Cursor", "GLM", "Windsurf", "GitHub Copilot"],
  },
];

export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Freelance";

export type Experience = {
  company: string;
  role: string;
  /** Omitted where the CV leaves the title untagged. */
  type?: EmploymentType;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "iHorizons (Ooredoo Qatar)",
    type: "Full-time",
    role: "Senior React Native Developer",
    period: "Jun 2026 – Present",
    location: "Qatar · Remote",
    highlights: [
      "Drive React Native delivery and production ownership across Ooredoo Qatar's consumer app (2.5M+ users) and Ooredoo Business (10,000+ enterprise users).",
    ],
    stack: ["React Native", "React.js", "TypeScript", "Redux", "React Query", "REST", "Firebase"],
  },
  {
    company: "Vodafone Oman",
    type: "Contract",
    role: "Senior Mobile Engineer / Mobile Technical Lead",
    period: "Jun 2025 – Jun 2026",
    location: "Muscat, Oman",
    highlights: [
      "Led the migration of Vodafone Oman's live iOS and Android application from native stacks to React Native and Expo, providing technical direction across architecture, implementation, code quality, and release delivery.",
      "Built marketplace hub (categories, bundles, checkout) on TypeScript, Zustand, and TanStack Query; added Supabase auth, EAS OTA updates, Expo notifications, and cart-reminder flows.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query", "Supabase", "REST", "React Navigation", "React Hook Form", "Zod", "Expo Notifications", "EAS Build & Update"],
  },
  {
    company: "iHorizons (Ooredoo Qatar)",
    type: "Full-time",
    role: "Senior React Native Developer",
    period: "Jun 2024 – Jul 2025",
    location: "Qatar · Remote",
    highlights: [
      "Improved app performance by 35% across the Ooredoo Qatar consumer and business apps.",
      "Built Azure DevOps CI/CD on self-hosted runners; integrated Liferay and maintained shared packages across consumer & business apps.",
      "Implemented Apple Pay, Google Pay, and Ooredoo Money with hardened REST integrations and Firebase analytics.",
    ],
    stack: ["React Native", "React.js", "TypeScript", "Redux", "React Query", "REST", "Firebase", "Azure DevOps CI/CD", "Self-hosted runners", "Liferay", "Apple Pay", "Google Pay", "Ooredoo Money"],
  },
  {
    company: "Blockchain Intelligence Group",
    type: "Contract",
    role: "Senior Mobile Engineer",
    period: "Jun 2022 – Mar 2025",
    location: "Canada · Remote",
    highlights: [
      "Architected React Native/React.js mobile systems supporting 50,000+ daily on-chain interactions; sustained 99.5% crash-free for 15,000+ MAU with Sentry and Firebase.",
      "Built a monorepo with shared business logic and centralized Redux Toolkit store management across web and mobile.",
      "Integrated Stripe, Segment, camera/IAP flows, and CI/CD pipelines for TokenEyes across iOS, Android, and web.",
    ],
    stack: ["React Native", "React.js", "monorepo", "TypeScript", "Redux Toolkit", "REST", "RxJS", "Stripe", "IAP (Apple & Google)", "Segment", "Firebase", "Sentry", "CI/CD"],
  },
  {
    company: "Homzmart",
    type: "Full-time",
    role: "Mobile Team Lead",
    period: "Jun 2020 – Jan 2023",
    location: "Cairo, Egypt · On-site",
    highlights: [
      "Built React Native app from scratch on GraphQL, Redux Toolkit, and Magento API; scaled to 2,000,000+ users with 40+ features/year and +40% screen performance.",
      "Raised crash-free sessions to 98.7% with Detox/Jest; -15% cart abandonment via checkout UX and Payfort/Paymob/Vodafone Cash payment integrations.",
      "Owned growth and ops stack — AppsFlyer, Adjust, Mixpanel, Instabug/Sentry, and HMS Push Kit — plus CodePush and CI/CD release pipelines.",
    ],
    stack: ["React Native", "GraphQL", "Redux Toolkit", "Detox", "Jest", "Magento API", "Firebase", "CodePush", "CI/CD", "Payfort", "Paymob", "Vodafone Cash", "AppsFlyer", "Adjust", "Mixpanel", "Sentry", "Instabug", "HMS Push Kit"],
  },
  {
    company: "Calo Inc",
    type: "Contract",
    role: "Senior Mobile Engineer",
    period: "Jun 2022 – Nov 2022",
    location: "Bahrain · Remote",
    highlights: [
      "500,000+ MAU healthy meal delivery on React Native and Zustand.",
      "-35% API latency via GraphQL query optimization; 12 major releases in 6 months with CodePush, Firebase, and CleverTap/Segment analytics.",
    ],
    stack: ["React Native", "TypeScript", "Zustand", "GraphQL", "CodePush", "Sentry", "CleverTap", "Segment", "Firebase"],
  },
  {
    company: "Faheem",
    type: "Contract",
    role: "Mobile Team Lead",
    period: "Jul 2021 – Apr 2022",
    location: "Saudi Arabia · Remote",
    highlights: [
      "Managed 4 engineers shipping 8 releases in 10 months on React Native, Next.js, and Redux Toolkit; cut feature cycle 3wk → 2.4wk avg.",
      "Elevated team quality score 65% → 88% and junior productivity +45% via Fastlane, CodePush, and App Center CI/CD.",
    ],
    stack: ["React Native", "React.js", "Next.js", "TypeScript", "Redux Toolkit", "REST", "Firebase", "CodePush", "CI/CD", "Fastlane", "AppsFlyer", "Adjust", "Datadog", "Agora", "App Center"],
  },
  {
    company: "Tamkeen Technology",
    type: "Contract",
    role: "Mobile Architect",
    period: "Jan 2023 – Present",
    location: "Saudi Arabia · Remote",
    highlights: [
      "Scaled Musaned from 50,000 to 200,000+ downloads (~300% growth) at 99.5% crash-free on React Native, TypeScript, and Redux Toolkit.",
      "Led a 5-person pod; cut bug resolution time by 40% and improved cold start by 28% using App Center, CodePush OTA, and Firebase analytics/messaging.",
    ],
    stack: ["React Native", "TypeScript", "ES6", "REST", "Redux Toolkit", "CI/CD", "App Center", "CodePush", "Firebase Analytics", "FCM", "Crashlytics"],
  },
  {
    company: "Al-Manarh",
    type: "Part-time",
    role: "Chief Technology Officer (CTO) · Advisory",
    period: "Jun 2024 – Present",
    location: "Remote",
    highlights: [
      "Lead technology and engineering — architecture, delivery, and team management across the product portfolio and client engagements (Ra3d, Twerlo, and others).",
      "Shipped end-to-end React Native/Expo apps and React/Supabase dashboards (SoloGusto, CarVentru) on TypeScript, Zustand, and TanStack Query.",
      "Managed dedicated mobile squads for Ra3d and Twerlo; integrated Firebase, Google Sign-In, maps/geolocation, payments (MyFatoorah), and Amplitude/Adjust analytics.",
    ],
    stack: ["React Native", "Expo", "React", "TypeScript", "Supabase", "Firebase", "Zustand", "TanStack Query", "MyFatoorah", "Amplitude"],
  },
  {
    company: "Proxify",
    type: "Freelance",
    role: "Mobile Engineer · Project-based",
    period: "Dec 2019 – Present",
    location: "Remote",
    highlights: [
      "15+ projects on React Native/TypeScript across global clients (300,000+ combined reach); avg. 4.8★ ratings; routinely 15%+ faster than projected timelines.",
      "Representative engagements — Canoo, Speetar Health, Tawal (Sufara), PikaDo, Alfaris Rent A Car.",
    ],
    stack: ["React Native", "TypeScript", "Zustand", "GraphQL", "CodePush", "Contentful", "Firebase"],
  },
  {
    company: "UpperMedic",
    type: "Full-time",
    role: "React Native Developer",
    period: "Oct 2019 – Jun 2020",
    location: "Cairo, Egypt · On-site",
    highlights: [
      "Delivered healthcare app 0 → 5,000+ downloads in 3 months on React Native, Redux Toolkit, and Firebase; built custom video streaming pipeline (500+ hrs/mo).",
    ],
    stack: ["React Native", "TypeScript", "Redux Toolkit", "REST", "Firebase", "Push notifications", "Video streaming"],
  },
  {
    company: "Sahl Solution",
    type: "Full-time",
    role: "React Native Developer",
    period: "Jan 2019 – Dec 2019",
    location: "Cairo, Egypt · On-site",
    highlights: [
      "Shipped 7 apps on React Native/Redux with REST/GraphQL backends (WooCommerce, Magento); integrated CodePush, OneSignal, and Firebase analytics.",
    ],
    stack: ["React Native", "JavaScript", "Redux", "REST", "GraphQL", "WooCommerce", "Magento", "CodePush", "Firebase", "OneSignal"],
  },
  {
    company: "RedApp",
    type: "Full-time",
    role: "MERN Stack Developer",
    period: "Sep 2017 – Dec 2018",
    location: "Bahrain · Remote",
    highlights: [
      "Built full-stack MERN platform (React Native, Node.js, SQL) with admin UI and client REST/payment integrations; reduced server latency via backend tuning.",
    ],
    stack: ["React Native", "React.js", "Node.js", "SQL", "REST", "Push notifications", "Payment gateways"],
  },
];

export const domains = [
  "Telecom",
  "Commerce",
  "Fintech",
  "Health",
  "Mobility",
  "Platforms",
] as const;

export type Domain = (typeof domains)[number];

export type Project = {
  name: string;
  category: string;
  /** Highlighted at the top of the work section. */
  featured?: boolean;
  /** App Store screenshot in /public/shots — falls back to a generated tile when absent. */
  shot?: string;
  /** Coarse grouping used by the work-section filter. */
  domain: Domain;
  blurb: string;
  metric: string;
  tags: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "Ooredoo Qatar",
    domain: "Telecom",
    featured: true,
    shot: "/shots/ooredoo-qatar.webp",
    category: "Telecom",
    blurb: "Flagship consumer telecom app for Ooredoo Qatar — account management, recharge, bundles, and self-service across iOS and Android.",
    metric: "2.5M+ users",
    tags: ["React Native", "TypeScript", "Redux", "React Query", "REST"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/qa/app/ooredoo-qatar/id619828745" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=qa.ooredoo.android" },
    ],
  },
  {
    name: "Ooredoo Business",
    domain: "Telecom",
    category: "Telecom / Enterprise",
    blurb: "Enterprise telco & workforce workflows for the Qatar market, hardened auth and 35% performance gains.",
    metric: "10,000+ enterprise users",
    tags: ["React Native", "Redux", "React Query", "REST"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/ooredoo-business/id6463796777" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=qa.ooredoo.smb" },
    ],
  },
  {
    name: "Homzmart",
    domain: "Commerce",
    featured: true,
    shot: "/shots/homzmart.webp",
    category: "E-commerce",
    blurb: "Omni-channel furniture & home marketplace built from scratch and scaled across iOS, Android, and Huawei AppGallery.",
    metric: "2,000,000+ users",
    tags: ["React Native", "GraphQL", "Magento", "Detox"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/homzmart/id1533578928" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.homzmart" },
      { label: "AppGallery", url: "https://appgallery.huawei.com/app/C103952405" },
    ],
  },
  {
    name: "Musaned",
    domain: "Platforms",
    featured: true,
    shot: "/shots/musaned.webp",
    category: "GovTech / Workforce",
    blurb: "Nationwide workforce & compliance mobile experience for Tamkeen, scaled ~300% while holding 99.5% crash-free.",
    metric: "200,000+ downloads",
    tags: ["React Native", "Redux Toolkit", "CodePush", "App Center"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/sa/app/musaned-domestic-labor/id1659263483" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.tamkeen.musaned" },
    ],
  },
  {
    name: "Calo",
    domain: "Health",
    featured: true,
    shot: "/shots/calo.webp",
    category: "Health / Food",
    blurb: "Healthy meal-subscription platform serving the GCC, kept at a 4.7★ rating with sub-second key flows.",
    metric: "500,000+ MAU",
    tags: ["React Native", "Zustand", "GraphQL", "CodePush"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/eg/app/calo/id1497894777" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.calo.webapp" },
    ],
  },
  {
    name: "TokenEyes",
    domain: "Fintech",
    featured: true,
    shot: "/shots/tokeneyes.webp",
    category: "Fintech / Crypto",
    blurb: "Crypto onboarding & on-chain intelligence app for Blockchain Intelligence Group, with address-hash validation and IAP.",
    metric: "50K+ daily interactions",
    tags: ["React Native", "monorepo", "RxJS", "IAP"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/vn/app/tokeneyes/id6450926645" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.tokeneyes" },
      { label: "Web portal", url: "https://portal.tokeneyes.app" },
    ],
  },
  {
    name: "Faheem",
    domain: "Platforms",
    category: "SMB Platform",
    blurb: "SMB platform rollout across mobile and web, led as team lead with a measurable jump in delivery quality.",
    metric: "8 releases / 10 months",
    tags: ["React Native", "Next.js", "Redux Toolkit", "Fastlane"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/eg/app/faheem/id1363295457" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.faheemapp.android" },
      { label: "Web", url: "https://www.faheemapp.com" },
    ],
  },
  {
    name: "Vodafone Oman",
    domain: "Telecom",
    featured: true,
    shot: "/shots/vodafone-oman.webp",
    category: "Telecom",
    blurb: "Led the migration of the live national telco app from native iOS/Android to React Native and Expo, with a new marketplace hub, Supabase-backed engagement tooling, and EAS OTA.",
    metric: "Native → React Native migration",
    tags: ["React Native", "Expo", "Supabase", "EAS"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/om/app/my-vodafone-oman/id1589071343" },
    ],
  },
  {
    name: "SoloGusto",
    domain: "Health",
    category: "Al-Manarh · Food / Delivery",
    blurb: "Restaurant & food-delivery platform with live maps, geolocation, and in-app payments — built end-to-end (mobile app + ops dashboard) as CTO at Al-Manarh.",
    metric: "Own product",
    tags: ["React Native", "Supabase", "Firebase", "Maps", "MyFatoorah"],
  },
  {
    name: "CarVentru",
    domain: "Fintech",
    category: "Al-Manarh · Fintech",
    blurb: "Car-investment platform pairing a React Native app with a web dashboard — Supabase auth, secure keychain storage, and OTP onboarding.",
    metric: "Own product",
    tags: ["React Native", "Supabase", "Zustand", "Unistyles", "React Router"],
  },
  {
    name: "Azeer",
    domain: "Platforms",
    category: "Al-Manarh · Twerlo (client)",
    blurb: "Azeer mobile app delivered for Twerlo, a client of Al-Manarh — engineering resources provided and managed as CTO.",
    metric: "Client (Twerlo)",
    tags: ["React Native", "TypeScript"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/azeer/id6766127200" },
    ],
  },
  {
    name: "Wujhat",
    domain: "Platforms",
    category: "Al-Manarh · Ra3d (client)",
    blurb: "Services & booking app with appointment calendars, in-app payments, and analytics — delivered for Ra3d, a client of Al-Manarh.",
    metric: "Client (Ra3d)",
    tags: ["React Native", "React Query", "React Hook Form", "MyFatoorah", "Amplitude"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/kz/app/wujhat/id6749856773" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ra3d.wujhat" },
    ],
  },
  {
    name: "Jewelers",
    domain: "Commerce",
    category: "Al-Manarh · Ra3d (client)",
    blurb: "Jewelry marketplace app with Google sign-in, push notifications, card validation, and location-aware browsing — delivered for Ra3d, a client of Al-Manarh.",
    metric: "Client (Ra3d)",
    tags: ["React Native", "Redux Toolkit", "Firebase", "Lottie"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/jewelers/id6753931655" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ra3d.jewelers" },
    ],
  },
  {
    name: "Canoo",
    domain: "Mobility",
    category: "Freelance · Automotive",
    blurb: "Consumer app for the Canoo EV ecosystem, delivered as a freelance engagement.",
    metric: "4.8★ avg rating",
    tags: ["React Native", "TypeScript", "REST"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/eg/app/canoo/id1458141380" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.icc.canoo" },
    ],
  },
  {
    name: "TrustYou",
    domain: "Platforms",
    category: "Freelance · Digital Parenting",
    blurb: "Proactive digital-parenting platform — a React Native (Expo) app using Apple FamilyControls, a Firebase backend with AI cloud functions (Vertex AI / Gemini), and an admin dashboard.",
    metric: "AI-powered safety",
    tags: ["React Native", "Expo", "Firebase", "FamilyControls", "Vertex AI"],
  },
  {
    name: "Speetar Health",
    domain: "Health",
    category: "Freelance · Healthcare",
    blurb: "Telehealth platform connecting patients with physicians, built for a global client base.",
    metric: "Cross-border telehealth",
    tags: ["React Native", "GraphQL", "Firebase"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/speetar-health/id1546694730" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.tekrowe.speetar" },
    ],
  },
  {
    name: "Tawal (Sufara)",
    domain: "Telecom",
    category: "Freelance · Telecom",
    blurb: "Field & partner portal experience for TAWAL — work recognized with the Best Employee Award (2023).",
    metric: "Best Employee Award",
    tags: ["React Native", "TypeScript", "REST"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/sufara/id1607476410" },
      { label: "Web portal", url: "https://ep.tawal.com.sa" },
    ],
  },
  {
    name: "PikaDo",
    domain: "Platforms",
    category: "Freelance · EdTech",
    blurb: "Education-focused mobile product shipped end-to-end as a freelance engagement.",
    metric: "Global client reach",
    tags: ["React Native", "Zustand", "Firebase"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/pikado/id1549450318" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.app.pikado.edu" },
    ],
  },
  {
    name: "Alfaris Rent A Car",
    domain: "Mobility",
    category: "Freelance · Mobility",
    blurb: "Car-rental booking app for the UAE market, delivered ahead of projected timelines.",
    metric: "UAE car rental",
    tags: ["React Native", "TypeScript", "REST"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/ae/app/alfaris-rent-a-car/id1515017781" },
    ],
  },
  {
    name: "Naqla",
    domain: "Mobility",
    category: "Logistics",
    blurb: "Request-a-truck logistics platform with offline-first design, shipped at Sahl Solution.",
    metric: "-68% API failure rate",
    tags: ["React Native", "Redux", "REST", "Offline-first"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/eg/app/naqla-request-a-truck/id1496986888" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=org.naqla.nca" },
    ],
  },
];

export const education = {
  school: "Helwan University",
  degree: "B.S. Computer Science & Information Systems",
  period: "Graduated 2017",
  location: "Cairo, Egypt",
  coursework: "Software Engineering · Mobile Development · Database Systems",
};

export const certifications = [
  "Mobile App Development — Udemy (2017)",
  "C++ — 180 Degrees (2016)",
];

export const awards = ["Best Employee Award — TAWAL Company (2023)"];
