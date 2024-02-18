const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Bigeco",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "AI developer",
    bio: "Moving forward overcoming limit.",
    email: "lc26482648@gmail.com",
    linkedin: "bigeco",
    github: "bigeco",
    instagram: "",
  },
  projects: [
    {
      name: `bigeco-log`,
      href: "https://github.com/bigeco/bigeco-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "bigeco-log",
    description: "welcome to bigeco-log!",
  },

  // CONFIG configration (required)
  link: "https://bigeco-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "bigeco/bigeco-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
