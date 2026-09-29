# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and engineering leads filling senior or lead mobile roles (primary). They arrive from a CV, LinkedIn, or a referral, skim on desktop or phone between other candidates, and need to decide quickly whether this engineer has owned real, large-scale mobile products. Freelance clients are a secondary audience.

## Product Purpose

The personal portfolio of Abdulrahman Afify, Senior Mobile Engineer (React Native, 9+ years). It exists to convert a skim into an interview or call: the CV download, email, and Calendly booking are the success actions.

## Positioning

Operational ownership of national-scale mobile products in the Gulf: Ooredoo Qatar (2.5M+ users), the native → React Native/Expo migration of Vodafone Oman's live app as technical lead, Musaned (99.5% crash-free), and Homzmart (2M+ users). The claim is shipped, measured production work, not framework familiarity.

## Operating Context

- Based in Muscat, Oman; Egyptian; works on-site and remote with Gulf, Canadian, and other clients. Several engagements run in parallel.
- Content lives in `src/data.ts`; the site is React + Vite + Tailwind v4, deployed on Vercel from `main`.

## Capabilities and Constraints

- Case studies may describe architecture decisions and outcomes (e.g. native → RN/Expo migration, Zustand/TanStack Query, EAS OTA, CI/CD, payments) and metrics already on the site. No internal code and no unreleased screens.
- Do not mention Supabase in the Vodafone Oman work (user request).
- The VF_OM repo is partly a personal prototype and partly adopted into production; do not present its in-app screens as the shipped Vodafone Oman app. Use public store imagery for shipped products.
- Light and dark themes with system detection must be preserved.

## Evidence on Hand

- Metrics and roles: `src/data.ts` (profile, stats, experience, projects).
- Store imagery: `public/shots/*.webp` (one per featured app); Ooredoo Qatar Play Store set in `public/shots/ooredoo/`; Vodafone Oman App Store set (v5.2) sourced from the public listing.
- Typeset CV: `public/cv.pdf`. Portrait: `public/profile.jpg`.
- Absent: testimonials, press, architecture diagrams, before/after performance charts. Do not fabricate them.

## Product Principles

1. Evidence before adjectives: every claim sits next to a number, a product, or a store link.
2. The shipped apps are the hero; the interface recedes around them.
3. Depth on a few flagship products beats breadth across every skill.
4. Credible to a senior hiring manager in under a minute, on a phone.
