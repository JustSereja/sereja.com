/**
 * Site Configuration File
 * 
 * This file contains all the customizable options for sereja.com.
 * 
 * After updating this file:
 * 1. RSS feeds will be automatically updated
 * 2. Sitemap will be regenerated on build
 * 3. All metadata will be updated across the site
 */

export default {
  // Basic site information
  title: {
    en: "Just Sereja",
    ru: "Просто Серёжа"
  },
  description: {
    en: "It's just my personal blog where I'm trying to find some cool stuff and document it",
    ru: "Это просто мой личный блог, где я пытаюсь найти что-то крутое и задокументировать это"
  },
  siteUrl: "https://sereja.com", // Used for RSS, sitemap, and social cards
  
  // Author information
  author: {
    name: {
      en: "Sereja",
      ru: "Серёжа"
    },
    email: "just@sereja.com",
    avatar: "/img/avatar.png", // Author avatar image
    bio: {
      en: "I'm just a simple guy trying to find or create some cool stuff around the internet or in real life. Always in search of fun things and good jokes.",
      ru: "Я просто обычный парень, который пытается найти или создать что-то крутое в интернете или в реальной жизни. Всегда в поиске веселых вещей и хороших шуток."
    }
  },
  
  // Blog settings
  postsPerPage: 10,
  featuredImageFallback: "/img/posts/placeholder.svg", // Default image for posts without featured image
  
  // Social links - customize or remove as needed
  // Now supports language-specific links
  socialLinks: {
    en: {
      github: "https://github.com/JustSereja",
      twitter: "https://x.com/JustSereja_",
      telegram: "https://t.me/justsereja",
      tiktok: "https://www.tiktok.com/@justsereja",
      instagram: "https://www.instagram.com/just.sereja/",
      youtube: "https://www.youtube.com/@JustSereja",
      twitch: "https://www.twitch.tv/justsereja",
      // Add or remove social links as needed
    },
    ru: {
      github: "https://github.com/JustSereja",
      twitter: "https://x.com/prostosereja01",
      telegram: "https://t.me/prostosereja",
      tiktok: "https://www.tiktok.com/@prostosereja",
      instagram: "https://www.instagram.com/prostosereja01/",
      youtube: "https://www.youtube.com/@prosto-sereja",
      twitch: "https://www.twitch.tv/prostosereja01",
      // Add or remove social links as needed
    }
  },
  
  // Navigation categories (customize based on your content)
  // Set enabled: false to hide a category
  categories: {
    blog: {
      enabled: true,
      path: "/blog",
      icon: "💻",
      description: {
        en: "Personal thoughts, experiences, and insights from my journey",
        ru: "Личные мысли, опыт и идеи из моего путешествия"
      }
    },
    technology: {
      enabled: false,
      path: "/technology",
      icon: "🚀",
      description: {
        en: "Deep dives into web development, tools, and best practices",
        ru: "Глубокое погружение в веб-разработку, инструменты и лучшие практики"
      }
    },
    projects: {
      enabled: true,
      path: "/projects", 
      icon: "🛠️",
      description: {
        en: "Showcase of my work and open-source contributions",
        ru: "Витрина моих работ и вклада в открытый исходный код"
      }
    }
  },
  
  // Feature toggles
  features: {
    // Enable/disable dark mode toggle
    darkMode: true,
    // Enable/disable search functionality
    search: true,
    // Enable/disable RSS feed
    rss: true,
    // Enable/disable sitemap generation
    sitemap: true,
    // Enable/disable image lightbox in posts
    imageLightbox: true,
    // Enable/disable post navigation (prev/next)
    postNavigation: true,
    // Enable/disable reading time estimation
    readingTime: true,
    // Enable/disable post views counter
    viewCounter: true
  },
  
  // SEO & Meta tags
  seo: {
    // Default image for social sharing
    defaultImage: "/img/og-image.svg",
    // Twitter handle without @
    twitterHandle: "JustSereja_",
    // Google Analytics ID (if you have one)
    googleAnalytics: "", // e.g., "G-XXXXXXXXXX"
  },
  
  // Language settings
  defaultLanguage: "en",
  languages: ["en", "ru"],
  
  // Date format settings
  dateFormat: {
    // Options: 'en-US', 'ru-RU', etc.
    locale: 'en-US',
    options: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  }
} 