# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: technical recruiters and hiring managers (Heads of Engineering, CTOs, VP Eng) evaluating Abdulrahman Afify for a senior frontend / mobile engineering-manager seat. They open the site on a laptop between calls, spend under two minutes, and decide whether to book a conversation.

Secondary (inferred, not confirmed): founders and agency partners considering a fractional/CTO engagement.

## Product Purpose

A personal hiring site. Success is a qualified intro or a booked 30-minute Calendly call. The site must make seniority, delivery ownership, and shipped scale obvious without requiring a PDF resume.

## Positioning

[INFERRED from user request] Position as a senior engineering manager for frontend/mobile — an operator who still ships — not as a generic senior IC. The career evidence already includes CTO (Al-Manarh), Mobile Team Lead (Homzmart, Faheem), and senior engineer seats at national telcos. Headline and narrative should match recruiter language for that lane; factual roles and dates stay as recorded.

Mechanism a neighboring freelance-RN site cannot copy: production ownership of consumer apps at national-telco and marketplace scale (Ooredoo 2.5M+, Homzmart 2M+, Calo 500k MAU) plus current CTO scope.

## Operating Context

Visited as a public URL (Vercel). No login. Recruiters also arrive from LinkedIn. Content lives in `src/data.ts`. Primary actions: view selected work, email, LinkedIn, GitHub, book Calendly.

## Capabilities and Constraints

- Existing stack: React 18, TypeScript, Vite 6, Tailwind CSS v4. Keep it.
- Light/dark theme with persistence must remain.
- Real contact details, store links, metrics, dates, and company names must remain. Do not invent testimonials, customers, or unstated titles.
- Headshot at `public/profile.jpg` is a confirmed asset.
- Single-page site: about, skills, experience, projects, education/awards, contact.
- [INFERRED] User asked to match “recruiter and business expectation of senior manager frontend” and to make it “fancy.” Binding: hiring-manager-grade craft and EM-frontend positioning. Visual world is not decided here.

## Brand Commitments

- Name: Abdulrahman Afify
- Confirmed voice in copy: direct, metric-led, no hype slogans
- Headshot: `public/profile.jpg`
- Wordmark: AA
- [USER] Fancy; recruiter- and business-grade; senior manager frontend expectation

## Evidence on Hand

Real: companies, roles, periods, locations, highlights, stacks, project blurbs, store/web links, education, certifications, TAWAL Best Employee Award 2023, headshot, Calendly/email/phone/LinkedIn/GitHub.

Must not fabricate: testimonials, press quotes, compensation, team size except where already written, unstated job titles, fake case-study screenshots of client apps.

## Product Principles

1. Proof before personality — scale, crash-free, and named products do the talking.
2. Leadership is evidenced, not claimed — titles already in the record; the site organizes them for a hiring manager.
3. Every fact is replaceable with the source in `src/data.ts`; design may not invent claims.
4. The first viewport must make the hire/no-hire call possible.
5. Access stays boringly good: contrast, keyboard, reduced-motion, real buttons.

## Accessibility & Inclusion

No product-specific legal standard was set. Default to WCAG-minded contrast, visible focus, semantic headings, and `prefers-reduced-motion`.
