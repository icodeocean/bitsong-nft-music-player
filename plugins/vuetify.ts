import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"

import { dark } from "~/utils/themes"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "dark",
      themes: {
        dark,
      },
    },
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
