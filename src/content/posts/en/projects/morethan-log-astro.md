---
title: Morethan-Log for Astro - Modern Blog Template
h1: Morethan-Log for Astro
description: My Astro port of morethan-log. Clean design, fast build times, multilingual, search, RSS, and typed configs out of the box.
date: '2025-07-30'
announcement: The personal blog template that powers my website
image: '/img/posts/placeholder-projects.svg'
aiGenerated: false
---

I bumped into the original Notion-powered [morethan-log](https://github.com/morethanmin/morethan-log) template, loved the vibe, but didn't want to wire my blog to an external workspace. So I rebuilt the whole flow in Astro, added the helpers I missed, and shipped it as **Morethan-Log for Astro**. Same clean layout, zero vendor lock, and a few extra knobs I need day to day.

## What you get
- Multilingual blog ready on day one. English and Russian ship with the template, and adding more is just another entry in `src/config/locales.ts`.
- Built-in search, dark mode, RSS feeds per language, and typed frontmatter so you do not forget important fields.
- Categories, navigation, contact links, and feature toggles live in `src/config/site.ts`. Every option is typed, so your editor keeps you honest.
- Markdown or MDX posts with React islands when you need an interactive bit. Hydration works like any Astro project.
- Clean placeholders for posts, per-category RSS icons, Open Graph tags, and all the SEO bits already wired up.

## Quick start

```bash
npm create astro@latest -- --template JustSereja/morethan-log-astro
cd your-blog
npm run dev
```

The dev server runs at `http://localhost:4321`. Edit files under `src/`, save, and the preview reloads.

Prefer the GitHub template flow? Hit the "Use this template" button on the repo, clone your copy, then run `npm install` and `npm run dev`.

## Set up your details

- `src/config/site.ts` is the main control center: site title, descriptions, author info, navigation, categories, contact links, feature flags, and even date formats per locale.
- `src/config/locales.ts` lists every language. Point the code, native label, locales, and default flag there so links, `<html lang>`, and hreflang tags stay in sync.
- Want per-language contact links or different author names? The config supports per-locale labels and URLs, plus inline emoji or custom SVG icons.
- Styles live in `public/css/style.css`. Tweak variables there if you need different colors. The dark theme is already in place.

## Writing posts

Content lives under `src/content/posts/<lang>/<category>/`. Keep file names the same between languages so the template hooks them together automatically.

```markdown
---
title: 'New project'
h1: 'New project'
description: 'Short teaser that shows up in cards'
date: '2025-10-28'
announcement: 'Optional list summary'
image: '/img/posts/your-cover.jpg'
aiGenerated: false
draft: false
---
```

Leave the `permalink` alone unless you want a custom slug. The folder already gives you the language and category path. Pages under `src/content/pages` follow the same idea.

## Handy extras

- RSS feeds ship per language: `/rss.xml` for the default language, plus `/<lang>/rss.xml` for each locale. Full content, proper absolute URLs, and author info included.
- The build copies `dist/404.html` to `dist/404/index.html`, so GitHub Pages and Netlify both serve the not-found page correctly.
- Want more languages? Add them to `src/i18n/ui.ts`, extend the translations, update `site.ts`, and drop in matching content folders.
- Need to keep your fork fresh? Run `make update-template`. It pulls the latest template into a staging folder, syncs layouts, scripts, and assets, and leaves your content and config alone.

Grab the code, tweak the config, write posts in Markdown or MDX, and you have the same blog setup I use on [sereja.com](https://sereja.com/). If you spot a bug or think of a nice upgrade, open an issue on [GitHub](https://github.com/JustSereja/morethan-log-astro) or just ping me.
