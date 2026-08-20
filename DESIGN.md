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
  canvas-dark: "#100F0C"
  paper-dark: "#18170F"
  ink-dark: "#F2EFE8"
  mute-dark: "#B8C4D6"
  faint-dark: "#9AABC0"
  field-dark: "#1B4F9C"
  field-mute-dark: "#C9D4E6"
  accent-dark: "#8AADDE"
  on-accent-dark: "#100F0C"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 6.2vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
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

The hiring site is the jacket in the headshot: a sampled navy field that owns whole regions, not a gray page with blue buttons. Recruiters open it in office daylight, so the default theme is light paper. Dark mode dims that same room and lights the jacket (ramp navy `#1B4F9C`) so the field still reads as a region; in-flow links lift to `#8AADDE`.

Type is one self-hosted variable face at extreme scale. Proof is a sentence and a ruled list, not metric cards. Confirmed rejections: Inter-as-display, gradient type, pill chrome, circular avatars, yellow/airport costume, and unmeasured accent-on-white.

**Key Characteristics:**

- Navy `#082B60` owns nav, hero, and close in daylight; `#1B4F9C` is the same garment under lamp
- Warm paper `#F2EFE8` from the headshot room owns work, experience, and skills; night is that room dimmed to `#100F0C`
- Bricolage Grotesque, extra-bold stacked name, body at a readable measure
- Flush rectangular portrait; 4px controls
- Motion is a tailor’s cut from already-visible cloth, plus a 480ms token morph on theme
- Every shipped text pair meets WCAG AA

## Colors

Committed strategy. One sampled navy as a field, warm paper as the reading ground. Light and dark are composed separately; dark does not invert the mast to the link-blue `#8AADDE`.

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

Night is the same room with the lights down, not a cool void. Canvas `#100F0C` (dimmed `#F2EFE8`), paper `#18170F`, ink `#F2EFE8`, mute `#B8C4D6`, faint `#9AABC0`.

The sampled mean `#082B60` on that canvas is 1.4:1 — the field vanishes. Dark field is the next ramp step **`#1B4F9C`** (blazer under a desk lamp): white 7.94:1, field-mute `#C9D4E6` 5.31:1. Links on dark canvas use **accent** `#8AADDE` (8.32:1). Do not put white on `#8AADDE` (2.30:1, fail). Filled buttons stay navy-plus-white (`#1B4F9C`), never the link-blue.

### Named Rules

**The Field Rule.** Navy is a region, not a sprinkle. If a screen has no navy field, it is off-system.

**The Measured Pair Rule.** Do not ship a text/background pair that is not in the contrast table in `src/index.css`. Dark-mode filled buttons do not switch to the light accent.

## Typography

**Display Font:** Bricolage Grotesque (ui-sans-serif, system-ui)
**Body Font:** Bricolage Grotesque (same family)
**Label/Mono Font:** none; tabular figures via `"tnum"`

**Character:** A slightly quirky grotesque at poster scale, then the same face at book size. One family, weight and size do the hierarchy.

### Hierarchy

- **Display** (800, `clamp(2.15rem, 6.2vw, 3.75rem)`, 0.95, tracking −0.035em): stacked given name and family name in the hero. White on navy.
- **Headline** (700, `text-3xl` / `sm:text-5xl`–`6xl`): section titles Work, Experience, Skills, Contact.
- **Title** (600, `text-2xl` / `sm:text-4xl` work names; `text-xl` / `sm:text-3xl` companies): list headings.
- **Body** (400, `text-sm` / `sm:text-base`, leading-relaxed, max ~62–70ch): blurbs and highlights.
- **Label** (600, `text-xs`–`text-sm`): nav, buttons, compact metadata.

### Named Rules

**The One Face Rule.** Do not add Inter, a serif display, or a monospace costume for “technical.” Tabular numbers stay in Bricolage with `tnum`.

**The No-Eyebrow Rule.** No kicker above a heading. Category sits beside or under the name.

## Layout

Full-bleed navy mast and close; paper sections share the same page padding (`px-5` / `sm:px-10` / `lg:px-16`). Hero is content-sized, not a full viewport: type plus a capped 4:5 portrait (`7.75rem`–`16.5rem`). From `md` the portrait sits on the right; from 380px it sits beside the name; below 380px it stacks. Work is a ruled list, featured then compact. Experience is a vertical sequence, not a timeline graphic. Skills are a definition list in two or three columns. Sticky navy nav: name + invert CTA on the first mobile row, section links on the second; one row from `sm`.

## Elevation & Depth

Flat. Depth is field vs paper, not shadow. The portrait has no drop shadow. Dividers are 1px `line` (navy at 14% on light, warm ink at 12% on dark).

### Named Rules

**The Flat Field Rule.** No halo, glow ring, or offset shadow. If it needs lift, it is on the wrong field.

## Motion

One authored moment: the tailor’s cut. Name and portrait start already visible, clipped from the hem (`inset(0 0 10–12% 0)` → `inset(0)`), 640–820ms, `cubic-bezier(0.16, 1, 0.3, 1)`. Theme toggle interpolates registered color tokens in 480ms — the room dims, the jacket stays a field. Controls acknowledge hover in 150ms. No section fade-up, no scroll stagger, no card lift.

`prefers-reduced-motion` drops the clips and the icon turn; color and hover feedback remain at 120ms.

### Named Rules

**The Cut Rule.** Motion is a clip from cloth that is already on the table, or a light change in the room. A generic fade-and-rise is off-system.

## Shapes

Controls are 4px — square-ish, not pills. The portrait is a flush rectangle with no radius.

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

Sticky navy bar. Wordmark is the given name. Links are field-mute, hover to on-field. Invert “Book a call” is always present. Theme toggle is an icon button with a 10% white hover wash; it interpolates the room colors rather than swapping the page in a flash.

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
