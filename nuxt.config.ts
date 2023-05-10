import vuetify from "vite-plugin-vuetify";

const shortTitle = "Bitsong NFT Music Player";
const description =
  "Bitsong NFT Music Player";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  modules: [
    "@kevinmarrec/nuxt-pwa",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],

  app: {
    head: {
      title: "BitSong Music Player",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto" },
      ],
      meta: [],
    },
  },

  pwa: {
    meta: {
      name: shortTitle,
      author: "Ted Chow",
      theme_color: "#4f46e5",
      description: description,
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: "#4f46e5",
      description: description,
    },
  },
});
