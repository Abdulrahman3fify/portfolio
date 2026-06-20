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

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Al-Manarh",
    role: "Chief Technology Officer (CTO)",
    period: "Jun 2024 – Present",
    location: "Remote",
    highlights: [
      "Lead technology and engineering as CTO — owning architecture, delivery, and team management across the company's product portfolio and client engagements.",
      "Provide and manage dedicated engineering resources for client companies including Ra3d, Twerlo, and others.",
      "Shipped products end-to-end across React Native apps and React/Supabase dashboards — SoloGusto (food delivery) and CarVentru (car-investment platform), plus client apps Wujhat and Jewelers (Ra3d).",
    ],
    stack: ["React Native", "Expo", "React", "TypeScript", "Supabase", "Firebase", "Zustand", "TanStack Query"],
  },
  {
    company: "Vodafone Oman",
    role: "Senior Mobile Engineer",
    period: "Jun 2025 – Present",
    location: "Muscat, Oman · On-site",
    highlights: [
      "Leading migration of the live Vodafone Oman app from native to React Native (iOS & Android) with improved performance and UX.",
      "Built marketplace hub (categories, bundles, checkout), Supabase auth, push notifications, and cart-reminder flows.",
      "Shipped OTA updates via EAS for faster rollout without waiting on store releases.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query", "Supabase", "REST", "React Navigation", "React Hook Form", "Zod", "Expo Notifications", "EAS Build & Update", "Google Services"],
  },
  {
    company: "iHorizons (Ooredoo Qatar)",
    role: "Senior Mobile Engineer",
    period: "Jun 2024 – Jul 2025",
    location: "Qatar · Remote",
    highlights: [
      "Delivered and managed in production across Ooredoo Qatar's flagship consumer app (2.5M+ users) and Ooredoo Business (10,000+ enterprise users); improved performance by 35%.",
      "Built CI/CD pipelines on Azure DevOps with a self-hosted build machine; integrated Liferay and maintained shared libraries across apps.",
      "Implemented in-app payments — Apple Pay, Google Pay, and Ooredoo Money — plus hardened auth and REST integrations.",
    ],
    stack: [
      "React Native",
      "React.js",
      "TypeScript",
      "Redux",
      "React Query",
      "REST",
      "Firebase",
      "Azure DevOps CI/CD",
      "Self-hosted runners",
      "Liferay",
      "Shared libraries",
      "Apple Pay",
      "Google Pay",
      "Ooredoo Money",
    ],
  },
  {
    company: "Blockchain Intelligence Group",
    role: "Senior Mobile Engineer",
    period: "Jun 2022 – Mar 2025",
    location: "Canada · Remote",
    highlights: [
      "Architected mobile systems supporting 50,000+ daily on-chain interactions; 99.5% crash-free for 15,000+ MAU.",
      "Reduced bundle size 42% (85MB → 49MB) via code splitting and build optimization.",
      "Cut deployment time from 90 min → 25 min via CI/CD.",
      "Built native camera flows and an on-chain Address Hash Validator; integrated Stripe, in-app purchases (Apple & Google Play), Segment, and 8+ services.",
    ],
    stack: ["React Native", "React.js", "monorepo", "TypeScript", "Redux Toolkit", "REST", "RxJS", "Unit testing", "Native camera", "Address Hash Validator", "Stripe", "IAP (Apple & Google)", "Segment", "Firebase", "CI/CD"],
  },
  {
    company: "Tamkeen Technology",
    role: "Mobile Architect (Part-time)",
    period: "Jan 2023 – Present",
    location: "Saudi Arabia · Remote",
    highlights: [
      "Scaled Musaned from 50,000 to 200,000+ downloads (~300% growth) at 99.5% crash-free.",
      "Led a 5-person cross-functional pod; cut bug resolution time by 40%; improved cold start by 28%.",
    ],
    stack: ["React Native", "TypeScript", "ES6", "REST", "Redux Toolkit", "Redux Thunk", "CI/CD", "App Center", "CodePush", "Firebase Analytics", "FCM", "Crashlytics"],
  },
  {
    company: "Calo Inc",
    role: "Senior Mobile Engineer",
    period: "Jun 2022 – Nov 2022",
    location: "Bahrain · Remote",
    highlights: [
      "500,000+ MAU healthy meal delivery; preserved 4.7★ store rating across iOS & Android.",
      "Reduced API latency 35% via GraphQL query optimization; 12 major releases in 6 months.",
    ],
    stack: ["React Native", "TypeScript", "Zustand", "GraphQL", "CodePush", "Payments", "Sentry", "CleverTap", "Segment", "Firebase"],
  },
  {
    company: "Homzmart",
    role: "Mobile Team Lead",
    period: "Jun 2020 – Jan 2023",
    location: "Cairo, Egypt · On-site",
    highlights: [
      "Built RN app from scratch; scaled to 2,000,000+ users; 40+ shipped features/year; +40% screen performance.",
      "Raised crash-free sessions to 98.7%; -15% cart abandonment via UX and checkout improvements.",
      "Integrated multiple payment gateways — Payfort, Paymob, Vodafone Cash/Wallet, and NBE — with analytics across AppsFlyer, Adjust, Mixpanel, Sentry, and Instabug.",
    ],
    stack: ["React Native", "GraphQL", "Redux", "Redux Thunk & Toolkit", "Detox", "Jest", "Magento API", "Firebase", "CodePush", "CI/CD", "Payfort", "Paymob", "Vodafone Cash", "NBE Payments", "AppsFlyer", "Adjust", "Mixpanel", "Sentry", "Instabug", "HMS Push Kit"],
  },
  {
    company: "Faheem",
    role: "Mobile Team Lead (Part-time)",
    period: "Jul 2021 – Apr 2022",
    location: "Saudi Arabia · Remote",
    highlights: [
      "Managed 4 engineers; 8 major releases in 10 months; feature cycle 3wk → 2.4wk avg.",
      "Elevated team quality score 65% → 88%; mentored juniors (+45% productivity).",
    ],
    stack: ["React Native", "React.js", "Next.js", "TypeScript", "Redux Toolkit", "REST", "Firebase", "OneSignal", "CodePush", "CI/CD", "Fastlane", "AppsFlyer", "Adjust", "Datadog", "Agora", "Sentry", "App Center"],
  },
  {
    company: "Proxify",
    role: "Mobile Engineer (Freelance)",
    period: "Dec 2019 – Aug 2025",
    location: "Remote",
    highlights: [
      "15+ projects across global clients (300,000+ combined reach); avg. 4.8★ ratings.",
      "Routinely 15%+ faster than projected timelines. Representative work: Canoo and TrustYou.",
    ],
    stack: ["React Native", "TypeScript", "Zustand", "GraphQL", "CodePush", "Contentful", "Payments", "Sentry", "CleverTap", "Firebase"],
  },
  {
    company: "UpperMedic",
    role: "React Native Developer",
    period: "Oct 2019 – Jun 2020",
    location: "Cairo, Egypt · On-site",
    highlights: [
      "Delivered healthcare app 0 → 5,000+ downloads in 3 months; 500+ hrs/mo streamed video infra.",
    ],
    stack: ["React Native", "TypeScript", "Redux Toolkit", "REST", "Firebase", "Push notifications", "Custom video tooling", "Video streaming"],
  },
  {
    company: "Sahl Solution",
    role: "React Native Developer",
    period: "Jan 2019 – Dec 2019",
    location: "Cairo, Egypt · On-site",
    highlights: [
      "Shipped 7 apps across health, marketplaces, and commerce; -68% API failure rate via offline-first design.",
    ],
    stack: ["React Native", "JavaScript", "Redux", "Context API", "REST", "GraphQL", "WooCommerce", "Magento", "CodePush", "Firebase", "Sentry", "OneSignal", "Payments"],
  },
  {
    company: "RedApp",
    role: "MERN Stack Developer",
    period: "Sep 2017 – Dec 2018",
    location: "Bahrain · Remote",
    highlights: [
      "Built full-stack platform (2,000+ users); admin UI with 10,000+ realtime records.",
      "RN downloads 15,000+; -55% server latency by tuning Node/SQL backends.",
    ],
    stack: ["React Native", "React.js", "Node.js", "SQL", "REST", "Push notifications", "Payment gateways"],
  },
];

export type Project = {
  name: string;
  category: string;
  blurb: string;
  metric: string;
  tags: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "Ooredoo Qatar",
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
    category: "Telecom",
    blurb: "Live native→React Native migration with a new marketplace hub, Supabase-backed engagement tooling, and EAS OTA.",
    metric: "National telco app",
    tags: ["React Native", "Expo", "Supabase", "EAS"],
  },
  {
    name: "SoloGusto",
    category: "Al-Manarh · Food / Delivery",
    blurb: "Restaurant & food-delivery platform with live maps, geolocation, and in-app payments — built end-to-end (mobile app + ops dashboard) as CTO at Al-Manarh.",
    metric: "Own product",
    tags: ["React Native", "Supabase", "Firebase", "Maps", "MyFatoorah"],
  },
  {
    name: "CarVentru",
    category: "Al-Manarh · Fintech",
    blurb: "Car-investment platform pairing a React Native app with a web dashboard — Supabase auth, secure keychain storage, and OTP onboarding.",
    metric: "Own product",
    tags: ["React Native", "Supabase", "Zustand", "Unistyles", "React Router"],
  },
  {
    name: "Azeer",
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
    category: "Freelance · Digital Parenting",
    blurb: "Proactive digital-parenting platform — a React Native (Expo) app using Apple FamilyControls, a Firebase backend with AI cloud functions (Vertex AI / Gemini), and an admin dashboard.",
    metric: "AI-powered safety",
    tags: ["React Native", "Expo", "Firebase", "FamilyControls", "Vertex AI"],
  },
  {
    name: "Speetar Health",
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
