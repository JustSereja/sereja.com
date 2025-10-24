import type { SiteConfig } from './types';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locales';

const siteConfig: SiteConfig = {
  // Basic site information
  siteUrl: 'https://sereja.com',
  title: {
    en: 'Just Sereja',
    ru: 'Просто Серёжа',
  },
  description: {
    en: "It's just my personal blog where I'm trying to find some cool stuff and document it",
    ru: 'Это просто мой личный блог, где я пытаюсь найти что-то крутое и задокументировать это',
  },

  // Author information
  author: {
    name: {
      en: 'Sereja',
      ru: 'Серёжа',
    },
    email: 'just@sereja.com',
    avatar: '/img/avatar.png',
    bio: {
      en: "I'm just a simple guy trying to find or create some cool stuff around the internet or in real life. Always in search of fun things and good jokes.",
      ru: 'Я просто обычный парень, который пытается найти или создать что-то крутое в интернете или в реальной жизни. Всегда в поиске веселых вещей и хороших шуток.',
    },
  },

  // Blog settings
  postsPerPage: 10,
  featuredImageFallback: '/img/posts/placeholder.svg',

  // Social links
  socialLinks: {
    en: {
      github: 'https://github.com/JustSereja',
      twitter: 'https://x.com/JustSereja_',
      telegram: 'https://t.me/justsereja',
      tiktok: 'https://www.tiktok.com/@justsereja',
      instagram: 'https://www.instagram.com/just.sereja/',
      youtube: 'https://www.youtube.com/@JustSereja',
      twitch: 'https://www.twitch.tv/justsereja',
    },
    ru: {
      github: 'https://github.com/JustSereja',
      twitter: 'https://x.com/prostosereja01',
      telegram: 'https://t.me/prostosereja',
      tiktok: 'https://www.tiktok.com/@prostosereja',
      instagram: 'https://www.instagram.com/prostosereja01/',
      youtube: 'https://www.youtube.com/@prosto-sereja',
      twitch: 'https://www.twitch.tv/prostosereja01',
    },
  },

  categories: {
    blog: {
      enabled: true,
      path: '/blog',
      icon: '💻',
      label: {
        en: 'Blog',
        ru: 'Блог',
      },
      description: {
        en: 'Personal thoughts, experiences, and insights from my journey',
        ru: 'Личные мысли, опыт и идеи из моего путешествия',
      },
    },
    technology: {
      enabled: false,
      path: '/technology',
      icon: '🚀',
      label: {
        en: 'Technology',
        ru: 'Технологии',
      },
      description: {
        en: 'Deep dives into web development, tools, and best practices',
        ru: 'Глубокое погружение в веб-разработку, инструменты и лучшие практики',
      },
    },
    projects: {
      enabled: true,
      path: '/projects',
      icon: '🛠️',
      label: {
        en: 'Projects',
        ru: 'Проекты',
      },
      description: {
        en: 'Showcase of my work and open-source contributions',
        ru: 'Витрина моих работ и вклада в открытый исходный код',
      },
    },
  },

  navigation: [
    {
      id: 'blog',
      labelKey: 'ui.blog',
      path: '/blog',
    },
    {
      id: 'projects',
      labelKey: 'ui.projects',
      path: '/projects',
    },
    {
      id: 'about',
      labelKey: 'ui.about',
      translationKey: 'about',
    },
  ],

  // Feature toggles
  features: {
    darkMode: true,
    search: true,
    rss: true,
    sitemap: true,
    imageLightbox: true,
    postNavigation: true,
    readingTime: true,
    viewCounter: false,
  },

  // SEO & Meta tags
  seo: {
    defaultImage: '/img/og-image.svg',
    twitterHandle: 'JustSereja_',
    googleAnalytics: '',
  },

  // Language settings
  defaultLanguage: DEFAULT_LOCALE,
  languages: [...SUPPORTED_LOCALES],

  // Date format settings
  dateFormats: {
    en: {
      locale: 'en-US',
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    },
    ru: {
      locale: 'ru-RU',
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    },
  },
};

export default siteConfig;
export type { SiteConfig } from './types';
export { SUPPORTED_LOCALES, SUPPORTED_LOCALES as SUPPORTED_LANGUAGES } from './locales';
