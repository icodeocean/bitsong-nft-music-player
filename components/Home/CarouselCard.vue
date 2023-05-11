<template>
  <v-carousel :show-arrows="false" class="rounded-lg">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
      class="d-flex align-end pb-12"
    >
      <div class="d-lg-flex d-sm-block pa-8">
        <div>
          <div class="text-h4">Happier Than Ever</div>
          <div class="mt-2 text-medium-emphasis text-primary">
            Billie Eilish
            <v-icon size="30" icon="mdi-circle-small"></v-icon>
            Single track
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="my-auto d-sm-inline-flex d-lg-block">
          <v-btn
            variant="outlined"
            class="font-weight-light text-secondary text-subtitle-1 px-6 ma-1"
          >
            <v-icon icon="mdi-heart"></v-icon>2, 585 LIKE
          </v-btn>
          <v-btn
            color="secondary"
            class="font-weight-light text-subtitle-1 px-6 ma-1"
          >
            <v-icon icon="mdi-play-circle"></v-icon>PLAY NOW
          </v-btn>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = ref([
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
])
</script>
