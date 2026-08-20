---
name: Abdulrahman Afify
description: Departures-hall hiring site — yellow enamel plates, cool concrete, Barlow Condensed destinations.
colors:
  plate: "#ffcc00"
  plate-ink: "#0e1114"
  hall: "#e8eaed"
  paper: "#f4f5f7"
  ink: "#0e1114"
  steel: "#3d454d"
  line: "#c5cad1"
  idle: "#d5d9de"
  alert: "#c8102e"
  hall-night: "#12151a"
  paper-night: "#1c2128"
  ink-night: "#eef0f3"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, ui-sans-serif, sans-serif"
    fontSize: "clamp(3.4rem, 12vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, ui-sans-serif, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow Condensed, Barlow, ui-sans-serif, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.04em"
  body:
    fontFamily: "Barlow, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Condensed, Barlow, ui-sans-serif, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "20px"
  lg: "32px"
  rail: "11.5rem"
components:
  button-boarding:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.plate}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    typography: "{typography.label}"
  button-boarding-on-plate:
    backgroundColor: "{colors.plate-ink}"
    textColor: "{colors.plate}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  plate-active:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  plate-idle:
    backgroundColor: "{colors.idle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  ticket:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
---

# Design System: Abdulrahman Afify

## Overview

**Creative North Star: "The Departures Hall"**

The site is a terminal, not a card grid. Destinations are enamel plates. Proof is a timetable. The person is an ID document. Recruiters should leave remembering a yellow gate with a name on it, then book a call.

Yellow is committed: whole regions, not accent dots. Corners are square. Type is condensed grotesk, never a system UI face. Night ops inverts the hall to a dark terminal but keeps black-on-yellow plates.

**Key Characteristics:**
- Schiphol yellow plates with black ink
- Cool concrete hall (not cream paper)
- Barlow Condensed destinations, Barlow body
- Square enamel geometry
- One authored motion: the gate blade clipping in

## Colors

Committed yellow. Plates own fields. Neutrals are cool terminal concrete.

### Primary
- **Plate yellow** (`#ffcc00`): gate blades, active wayfinding, tickets, boarding contrast pair. Always paired with plate-ink, never with gray.
- **Plate ink** (`#0e1114`): type and pictograms sitting on yellow. Does not invert in night ops.

### Neutral
- **Hall** (`#e8eaed` / night `#12151a`): page ground.
- **Paper** (`#f4f5f7` / night `#1c2128`): rail and alternate bands.
- **Ink** (`#0e1114` / night `#eef0f3`): body on hall.
- **Steel** (`#3d454d` / night `#9aa3ad`): secondary captions, tinted from ink, not generic gray-on-color.
- **Line** (`#c5cad1` / night `#2c343e`): hairline dividers.
- **Idle** (`#d5d9de` / night `#252b33`): inactive plates.

### Named Rules
**The Plate Rule.** Type on yellow is plate-ink. Never muted gray on a plate.
**The Hall Rule.** Ground is cool concrete. Warm cream is out of system.

## Typography

**Display Font:** Barlow Condensed 800 (self-hosted)
**Body Font:** Barlow 400–700 (self-hosted)

**Character:** Highway-and-airport grotesk. Condensed for destinations; proportional Barlow for reading. Tabular figures on proof.

### Hierarchy
- **Display** (800, clamp 3.4rem–6rem, 0.82): name on the gate blade.
- **Headline** (800, 3–4rem): section destinations (Work, Experience).
- **Title** (700, 1.5–2rem, uppercase): companies, system group names.
- **Body** (400, 1rem, max ~62ch): blurbs and highlights.
- **Label** (700, 0.75–0.875rem, tracked uppercase): plates, tickets, table heads.

### Named Rules
**The Destination Rule.** Anything that is a place you can go is Condensed uppercase. Body copy is never condensed.

## Layout

Desktop: a 11.5rem left wayfinding rail, main column to the right. Mobile: yellow identity bar, then a horizontal destination strip. Horizontal padding 20px (32px from `sm`). More space above a heading than below it. Flagship work is not a repeating card grid: one yellow plate, one black FIDS strip, one hanging sign, then a timetable.

## Elevation & Depth

Mostly flat enamel. Depth is tonal (hall vs paper vs ink vs plate), not stacked cards.

### Shadow Vocabulary
- **ID document** (`box-shadow: 4px 12px 28px rgba(14,17,20,0.22)`): the portrait only. Soft offset plus blur. Not a hard neobrutal block.

### Named Rules
**The Flat Plate Rule.** Wayfinding plates have no drop shadow. If it is a sign, it is printed on the wall.

## Shapes

Radius is 0. Silhouettes are rectangles: plates, tickets, ID, timetable cells. Pictograms are filled ISO-like marks, one weight, no emoji.

## Components

### Buttons
- **Shape:** square (`0px`)
- **Boarding / primary:** ink fill, plate type, 12×20 padding, Condensed uppercase, leading pictogram
- **On a yellow field:** plate-ink fill, plate type
- **Ghost on yellow:** transparent with 2px plate-ink ring
- **Focus:** 2px plate-ink outline, 3px offset, 5px plate halo

### Tickets
Store links as yellow stubs with black type and a platform pictogram. Not pills.

### Navigation
Rail plates: idle fill vs plate fill when you-are-here. Each destination has its own pictogram. Mobile: same plates in a horizontal scroller.

### Gate blade
Full-width yellow field. GATE line, display name, ID portrait, boarding plate. The first viewport.

## Do's and Don'ts

### Do:
- **Do** put proof in a timetable or a plate, never in four equal stat cards.
- **Do** let a flagship product own a whole bay with a unique hall object.
- **Do** keep yellow at region scale.
- **Do** honor `prefers-reduced-motion` by skipping the blade clip.

### Don't:
- **Don't** use Inter, geometric display defaults, or gradient text.
- **Don't** wrap sections in rounded cards or nest cards.
- **Don't** add kickers or 01/02/03 eyebrows above headings.
- **Don't** put gray type on yellow or colored grounds.
- **Don't** circular-crop the portrait.
