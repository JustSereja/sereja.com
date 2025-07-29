# sereja.com

My personal blog where I document cool stuff I find or create. Built with [Astro](https://astro.build) using the [morethan-log-astro](https://github.com/JustSereja/morethan-log-astro) template.

🌐 **[Live Site](https://sereja.com)**

## 🚀 Features

- 🌍 Multilingual (English/Russian)
- 📱 Responsive design
- 🌙 Dark mode
- 🔍 Search functionality
- 📝 Markdown support
- 🏷️ Categories (Blog & Projects)
- 📊 SEO optimized
- 💬 Social links

## 📝 Writing Posts

### Creating a New Post

1. Create a new `.md` file in the appropriate directory:
   - Blog posts: `src/pages/blog/`
   - Projects: `src/pages/projects/`

2. Add frontmatter:

```markdown
---
layout: '../../layouts/Post.astro'
title: 'Your Post Title'
h1: 'Display Title'
date: 15.03.2024
custom_category: 'blog'
image: '/img/posts/your-image.jpg'
description: 'A brief description of your post'
hreflang_en: '/blog/my-post'
hreflang_ru: '/ru/blog/my-post'
---

Your post content here...
```

### Multi-language Posts

For Russian translations, create the same file structure under `src/pages/ru/`:

```
src/pages/blog/my-post.md        # English
src/pages/ru/blog/my-post.md     # Russian
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔄 Updating from Template

To get new features from the template:

1. Add the template as a remote:
```bash
git remote add template https://github.com/JustSereja/morethan-log-astro.git
```

2. Fetch and merge updates:
```bash
git fetch template
git merge template/main --allow-unrelated-histories
```

3. Resolve any conflicts and update your configuration in `src/site.config.ts`

## 📦 Deployment

The site can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Just connect your repository and it will build automatically.

## 📄 License

This project is based on the [morethan-log-astro](https://github.com/JustSereja/morethan-log-astro) template.

---

*Just documenting cool stuff I find or create. Hope you enjoy!*