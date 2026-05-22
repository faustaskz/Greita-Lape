export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface AnalyticsConfig {
  gaId?: string;
  metaPixelId?: string;
  gtmId?: string;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;
  socialLinks: SocialLinks;
  analyticsConfig: AnalyticsConfig;
  defaultLocale: string;
  supportedLocales: string[];
  ogImage: string;
}

const analyticsConfig: AnalyticsConfig = {
  gaId: import.meta.env.PUBLIC_GA_ID,
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID,
  gtmId: import.meta.env.PUBLIC_GTM_ID,
};

const config: SiteConfig = {
  siteName: "Greita Lapė",
  siteUrl: "https://greitalape.lt",
  siteDescription:
    "MB Greita Lapė — vidaus ir išorės apdailos specialistai. Profesionalus glaistymas, dažymas, fasadų šiltinimas ir gipso kartono darbai visoje Lietuvoje. Greitai, tiksliai, aukštos kokybės.",

  companyName: "MB GREITA LAPĖ",
  companyEmail: "info@greitalape.lt",
  companyPhone: "+370 600 00000",
  companyAddress: "Lietuva",

  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  analyticsConfig,

  defaultLocale: "lt",
  supportedLocales: ["lt"],

  ogImage: "/vidaus apdaila2.webp",
};

export default config;
