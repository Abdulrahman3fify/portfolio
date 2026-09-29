# Portfolio homepage

Run `npm run dev -- --host 127.0.0.1 --port 5173` and open:

- Default homepage: `http://127.0.0.1:5173/?theme=light`
- Default homepage, dark: `http://127.0.0.1:5173/?theme=dark`
- Same, explicit alias: `http://127.0.0.1:5173/?vision`
- Prior redesign prototype: `http://127.0.0.1:5173/?next`
- Classic version: `http://127.0.0.1:5173/?classic`

This component is the default homepage at `/`; `?vision` remains a valid explicit alias, `?next` reaches the prior redesign prototype, and `?classic` reaches the classic version.

## Design

Warm ivory, deep navy, and blue-gray. A concise introduction and product imagery lead into four full-width selected project rows, an additional Musaned highlight, engineering approach, expandable employment history, and contact links. Small screens retain the product imagery and gain a keyboard-accessible navigation menu. Both color themes and reduced-motion preferences are supported.

## Content and assets

Profile links, the project directory, and career history reuse `src/data.ts`. The four case summaries use the experience and outcomes already recorded there. No additional performance claims, testimonials, or private code have been added. Vodafone content excludes Supabase as required by PRODUCT.md.

Store images reuse the existing `public/shots/` assets and their documented provenance. `public/vision/portrait.jpg` is the user-requested refined portrait produced in the associated Codex chat. The original portrait is preserved.

## Validation

TypeScript and Vite production build. Browser review of desktop and 390px mobile layouts, light/dark switching, Calo detail expansion, mobile menu and anchor navigation, earlier-role expansion, and console errors. Local CV resource checked for successful response.

## Work hierarchy and motion

Project names lead each row, followed by role, summary, visible outcomes, always-visible product links, and an explicitly labeled contribution disclosure. A project index links directly to Ooredoo, Vodafone, Calo, and Homzmart. Layout stacks on screens up to 800px.

The hero app screens fan into place once in under 800ms. Project imagery gently straightens on hover; contribution details, navigation underlines, and action arrows provide bounded feedback. CSS only, no new dependencies or scroll listeners. Reduced motion disables animation and transitions while retaining expanded state and color feedback.

## Web experience

Visible web work leads with AutomationPro · Ops Platform, then highlights TokenEyes (React.js), Faheem (Next.js), and SoloGusto/CarVentru dashboards using existing experience data. Hero and contact copy now include web experience. Python and Django are noted inline in the web stack line as foundational, beginner-level knowledge, as described by the user, rather than a separate learning strip.

AutomationPro · Ops Platform is a personal Next.js/TypeScript project (with an Electron desktop shell) verified against its own README and package.json: an operations dashboard with project and work-order detail flows and reusable dashboard UI (tables, forms, dialogs, filters, loading/empty/error states). It currently uses demo data — the source README states the sign-in is a frontend stub and API/database integration and secure sessions/RBAC are still pending. It is labeled "Frontend implementation · Demo data" here and in `src/data.ts`, with no metrics, links, or screenshot, since none were verified. Do not portray it as a live authenticated service or a complete backend.

## Recruiter positioning and directory

The visible title and HTML metadata use Senior Software Engineer / Mobile & Web. All available Musaned store links are visible. The experience toggle says more roles because some hidden roles are current. The existing shared og.png still needs a matching visual refresh before publishing.

The "More projects" directory (`src/vision/ProjectDirectory.tsx`) always shows all 16 remaining projects; there is no show/hide toggle. It has a prominent navy heading with the total count, a labeled `type=search` input filtering by name/category/domain/blurb/tags, and industry filter buttons (All plus each domain present, with counts, `aria-pressed`) combined with search via AND. A `role="status"`/`aria-live="polite"` line reports the match count without re-announcing the whole grid. Cards show name, domain, metric, full blurb, up to 3 tags, and every real link (all open in a new tab with a labeled, project-specific accessible name); projects without links simply omit that group. A no-results state offers a reset button that clears the query and domain filter. Clicking "Clear" or the no-results reset button returns keyboard focus to the search input via a ref, since the clicked button itself unmounts. Filtering remounts a keyed grid to replay a bounded ~220ms clip/opacity reveal with a small capped stagger; the very first render is unanimated. `prefers-reduced-motion: reduce` removes all of that (including the link-hover arrow shift) while keeping color/border and pressed-state feedback.
