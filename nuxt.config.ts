// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", // "@nuxtjs/supabase",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt", // "@prisma/nuxt",
    "@unlok-co/nuxt-stripe",
    "nuxt-lodash",
    "@nuxtjs/google-fonts",
  ],
  runtimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK_KEY,
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://js.stripe.com/v3/",
          defer: true,
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
