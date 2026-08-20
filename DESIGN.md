---
name: Abdulrahman Afify
description: Daylight hiring site. Sampled blazer navy owns the mast and close.
colors:
  field: "#082B60"
  field-mute: "#B7C6DE"
  on-field: "#FFFFFF"
  canvas: "#F2EFE8"
  paper: "#FFFFFF"
  ink: "#0E1220"
  mute: "#3A4A62"
  faint: "#4A5668"
  accent: "#082B60"
  on-accent: "#FFFFFF"
  canvas-dark: "#05080E"
  paper-dark: "#0A1220"
  ink-dark: "#F2EFE8"
  mute-dark: "#B8C4D6"
  faint-dark: "#9AABC0"
  accent-dark: "#8AADDE"
  on-accent-dark: "#05080E"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 11vw, 7.25rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  control: "4px"
spacing:
  page-x: "4rem"
  section-y: "5rem"
  row-y: "2.25rem"
components:
  button-invert:
    backgroundColor: "{colors.on-field}"
    textColor: "{colors.field}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-invert-hover:
    backgroundColor: "{colors.on-field}"
    textColor: "{colors.field}"
    rounded: "{rounded.control}"
  button-ghost-on-field:
    backgroundColor: "transparent"
    textColor: "{colors.on-field}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
---

# Design System: Abdulrahman Afify

## Overview

**Creative North Star: "The Blazer Field"**

The hiring site is the jacket in the headshot: a sampled navy field that owns whole regions, not a gray page with blue buttons. Recruiters open it in office daylight, so the default theme is light paper; dark mode keeps the same navy mast and lifts only the in-flow links.

Type is one self-hosted variable face at extreme scale. Proof is a sentence and a ruled list, not metric cards. Confirmed rejections: Inter-as-display, gradient type, pill chrome, circular avatars, yellow/airport costume, and unmeasured accent-on-white.

**Key Characteristics:**

- Navy `#082B60` owns nav, hero, and close
- Warm paper `#F2EFE8` from the headshot room owns work, experience, and skills
- Bricolage Grotesque, extra-bold stacked name, body at a readable measure
- Flush rectangular portrait; 4px controls
- Every shipped text pair meets WCAG AA

## Colors

Committed strategy. One sampled navy as a field, warm paper as the reading ground. Light and dark are composed separately; dark does not invert the mast to a light blue.

### Primary

- **Blazer navy** (`#082B60`): sampled mean of blazer pixels in `public/profile.jpg`. Fill for nav, hero, close, and light-theme actions on paper. White on this field is 13.77:1. Navy on paper `#F2EFE8` is 11.99:1.
- **On-field** (`#FFFFFF`): type and inverted buttons on navy.
- **Field mute** (`#B7C6DE`): secondary type on navy (7.97:1). Never used as body text on paper (1.51:1, fail).

### Neutral

- **Room paper** (`#F2EFE8`): page canvas, sampled from the headshot wall and slightly neutralized. Ink `#0E1220` on it is 16.24:1.
- **Paper** (`#FFFFFF`): unused as a large field in the current page; reserved for elevated surfaces.
- **Ink** (`#0E1220`): primary text on canvas.
- **Mute** (`#3A4A62`): body and supporting copy on canvas (7.83:1).
- **Faint** (`#4A5668`): dates, stacks, compact metrics (6.48:1).

### Dark remap

- Canvas `#05080E`, paper `#0A1220`, ink `#F2EFE8`, mute `#B8C4D6`, faint `#9AABC0`.
- Field stays `#082B60`. Links on dark canvas use **accent** `#8AADDE` (8.70:1). Do not put white on `#8AADDE` (2.30:1, fail). Filled buttons stay navy-plus-white, never light-blue-plus-white.

### Named Rules

**The Field Rule.** Navy is a region, not a sprinkle. If a screen has no navy field, it is off-system.

**The Measured Pair Rule.** Do not ship a text/background pair that is not in the contrast table in `src/index.css`. Dark-mode filled buttons do not switch to the light accent.

## Typography

**Display Font:** Bricolage Grotesque (ui-sans-serif, system-ui)
**Body Font:** Bricolage Grotesque (same family)
**Label/Mono Font:** none; tabular figures via `"tnum"`

**Character:** A slightly quirky grotesque at poster scale, then the same face at book size. One family, weight and size do the hierarchy.

### Hierarchy

- **Display** (800, `clamp(3.25rem, 11vw, 7.25rem)`, 0.88, tracking −0.04em): stacked given name and family name in the hero. White on navy.
- **Headline** (700, `text-3xl` / `sm:text-5xl`–`6xl`): section titles Work, Experience, Skills, Contact.
- **Title** (600, `text-2xl` / `sm:text-4xl` work names; `text-xl` / `sm:text-3xl` companies): list headings.
- **Body** (400, `text-sm` / `sm:text-base`, leading-relaxed, max ~62–70ch): blurbs and highlights.
- **Label** (600, `text-xs`–`text-sm`): nav, buttons, compact metadata.

### Named Rules

**The One Face Rule.** Do not add Inter, a serif display, or a monospace costume for “technical.” Tabular numbers stay in Bricolage with `tnum`.

**The No-Eyebrow Rule.** No kicker above a heading. Category sits beside or under the name.

## Layout

Full-bleed navy mast and close; paper sections share the same page padding (`px-5` / `sm:px-10` / `lg:px-16`). Hero is a two-column split from `lg` up (type left, photo right, min-height one viewport). Below `lg`, photo stacks first at `min-h-[40vh]`, then type. Work is a ruled list, featured then compact. Experience is a vertical sequence, not a timeline graphic. Skills are a definition list in two or three columns. Sticky navy nav: name + invert CTA on the first mobile row, section links on the second; one row from `sm`.

## Elevation & Depth

Flat. Depth is field vs paper, not shadow. The portrait has no drop shadow. Dividers are 1px `line` (navy at 14% on light, warm ink at 12% on dark).

### Named Rules

**The Flat Field Rule.** No halo, glow ring, or offset shadow. If it needs lift, it is on the wrong field.

## Shapes

Controls are 4px — square-ish, not pills. The portrait is a flush rectangle with no radius. Photo motion is a clip-path inset that starts already visible (`inset(6% 0 0 0)` → `inset(0)`), skipped under `prefers-reduced-motion`.

## Components

### Buttons

- **Shape:** 4px radius.
- **Invert (primary on navy):** white fill, navy text, padding `px-5 py-3` (hero/close) or `px-3 py-2` (nav). Hover keeps the white fill and adds a 2px field-mute ring.
- **Ghost on navy:** transparent, 1px `on-field` ring at 35–40% opacity, white type. Hover is `on-field/10` fill.
- **Link on paper:** accent color, underline transparent until hover.

### Cards / Containers

Not used as the page structure. Lists use hairline rules, not nested cards.

### Inputs / Fields

No form fields on this surface. Caret is themed anyway: `caret-color: var(--color-field)`. Focus-visible is a 2px accent outline, offset 3px; on navy fields the outline is on-field. Selection is field fill with on-field text. Scrollbars use field on canvas.

### Navigation

Sticky navy bar. Wordmark is the given name. Links are field-mute, hover to on-field. Invert “Book a call” is always present. Theme toggle is an icon button with a 10% white hover wash.

### Work row

Featured: large name, category and store links under it, metric right-aligned tabular. Compact: name / blurb+links / metric on three columns from `sm`.

## Do's and Don'ts

### Do:

- **Do** sample new accent from the blazer and re-check contrast before shipping.
- **Do** put navy behind the first viewport and the close.
- **Do** keep inverted CTAs white-on-navy (or navy-on-white), never white on the dark-theme link blue.
- **Do** lead mobile with the face.

### Don't:

- **Don't** revive Inter, gradient type, pill buttons, or a circular avatar.
- **Don't** use yellow, enamel plates, or transit/FIDS costume.
- **Don't** build the page as a grid of identical metric cards.
- **Don't** put a kicker above the name or section titles.
- **Don't** use `#8AADDE` as a filled button with white type.
