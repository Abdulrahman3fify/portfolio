# App screenshots

One image per featured project, named to match the `shot` field in
`src/data.ts`. Current files came from the App Store listings linked on each
project (Apple's public lookup API), downscaled to 420px wide and saved as
WebP — ~13-31KB each.

To replace one, drop in a file with the same name. Sources are all 9:16, which
is what the card slot expects; anything else gets object-cover cropped.

If a file is missing the card renders a generated fallback tile, so a bad path
never shows a broken image.
