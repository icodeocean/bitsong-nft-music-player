import { createVuetify, ThemeDefinition } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"

export default defineNuxtPlugin((app) => {
  const mainnetDark: ThemeDefinition = {
    dark: true,
    colors: {
      primary: "#FAFAFA",
      dark: "#212121",
      secondary: "#FF005C",
    },
  }

  const vuetify = createVuetify({
    ssr: true,
    defaults,
    theme: {
      defaultTheme: "mainnetDark",
      themes: {
        mainnetDark,
      },
    },
    // Add the custom iconset
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  })

  app.vueApp.use(vuetify)
})
