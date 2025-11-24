---
title: Morethan-Log for Astro - Personal Blog Template
h1: Morethan-Log for Astro
description: The morethan-log personal blog template for Astro JS. Clean design, fast builds, multilingual, search, RSS, and typed configs out of the box.
date: '2025-07-30'
announcement: The personal blog template that powers my website
image: '/img/posts/placeholder-projects.svg'
aiGenerated: false
---

When it comes to choosing a template for a site, I go feral. It turns into endless procrastination and scrolling through every possible option until I finally find my hidden gem.

That is how I stumbled on [morethan-log](https://github.com/morethanmin/morethan-log). The template stuck with me hard, and I tried to port it manually from the original repo, but that did not work out.

So I just gave the task to a layout dev to rebuild the whole template into static HTML, then asked AI agents to port it to my beloved Astro JS and wrap it in a bunch of goodies under the hood. That is how ✨ [Morethan-Log for Astro](https://github.com/JustSereja/morethan-log-astro) ✨ appeared.

## 📦 What's under the hood
- Multilingual setup (English and Russian out of the box) with a clear way to add new locales via `src/config/locales.ts`.
- Search, dark theme, per-language RSS, plus typed frontmatter so you do not forget the description or the date.
- The whole site structure lives in `src/config/site.ts`: navigation, categories, contact sections, feature switches, and date formats.
- Write plain Markdown and plug in MDX with React islands only where you actually want interactivity.
- Ready-made placeholders for images, Open Graph tags, and other SEO bits, so the page looks good even without custom covers.

## 🚀 How to start

```bash
npm create astro@latest -- --template JustSereja/morethan-log-astro
cd your-blog
npm run dev
```

The local server waits at `http://localhost:4321`. Tweak files in `src/` and see changes right away. If it is easier to start from a GitHub template, hit the button on the repo, clone your fork, then `npm install` and `npm run dev`.

## ⚙️ Tune it to yourself

- `src/config/site.ts` holds the title, descriptions, author, menu, categories, contacts, feature flags, and date formats for each language.
- `src/config/locales.ts` lists the languages: code, locale, label, and default. That keeps links and hreflang in sync.
- You can give every language its own links or even different author names. Emoji and custom SVG icons are supported.
- Styles sit in `public/css/style.css`. Change the variables to get your palette. Light and dark themes are already in place.

## 📝 Content and posts

All posts live in `src/content/posts/<lang>/<category>/`. To connect translations, keep filenames the same across languages.

```markdown
---
title: 'New project'
h1: 'New project'
description: 'Short teaser for the cards'
date: '2025-07-30'
announcement: 'Optional text for lists'
image: '/img/posts/your-cover.jpg'
aiGenerated: false
draft: false
---
```

You almost never need `permalink`. The folder already defines the language and category. Pages in `src/content/pages` work the same way.

## 🎁 A couple of bonuses

- RSS is generated for each language: `/rss.xml` for the default and `/<lang>/rss.xml` for the rest. Subscribers get only their language.
- In the production build `dist/404.html` is copied to `dist/404/index.html`, so GitHub Pages and Netlify keep the 404 page alive.
- Need a third language? Add it to `src/i18n/ui.ts`, extend translations, and drop in new content folders.
- To pull the latest template updates, run `make update-template`. The script grabs fresh code, updates components and assets, and leaves your content and configs untouched.

The same template runs here on [sereja.com](https://sereja.com/). Take it, set it up, and write. If you spot a bug or think of something cool, open an issue on [GitHub](https://github.com/JustSereja/morethan-log-astro) or just ping me.
