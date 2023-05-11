<template>
  <app-page>
    <template v-slot:title>Explore in Bitsong</template>
    <template v-slot:content>
      <v-card class="rounded-lg pa-5" color="#262626">
        <v-text-field
          clearable
          v-model="query"
          label="Search track name, artist and more"
          type="text"
          variant="outlined"
        >
          <template v-slot:append>
            <v-btn
              color="secondary"
              class="font-weight-light text-subtitle-1 px-7 mt-n2"
              @click="showResult"
              :disabled="query === ''"
            >
              SEARCH
            </v-btn>
          </template>
        </v-text-field>
        <div class="mt-5">
          <span class="text-primary mr-2">Trend Keywords:</span>
          <v-chip
            variant="outlined"
            color="rgba(250,250,250,0.5)"
            class="mx-2"
            v-for="(trend, index) in trends"
            :key="index"
            >{{ trend }}</v-chip
          >
        </div>
      </v-card>

      <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
        <span>Categories</span>
        <NuxtLink
          class="text-secondary text-capitalize text-caption my-auto mr-8"
        >
          see all
        </NuxtLink>
      </div>
      <v-container class="px-0 mx-0">
        <v-row no-gutters>
          <home-horizontal-card
            v-for="n in 6"
            :lg="4"
            :sm="6"
            :xs="12"
            title="Hip-Hop"
            content="2,585 Track"
          >
            <template v-slot:image>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              ></v-img>
            </template>
            <template v-slot:action>
              <v-icon
                icon="mdi-play-circle-outline"
                color="secondary"
                class="bs-cursor-pointer"
              ></v-icon>
            </template>
          </home-horizontal-card>
        </v-row>
      </v-container>

      <div class="mt-10 text-h5 text-primary d-flex justify-space-between">
        <span>Genres</span>
        <NuxtLink
          class="text-secondary text-capitalize text-caption my-auto mr-8"
        >
          see all
        </NuxtLink>
      </div>
      <v-container class="px-0 mx-0">
        <v-row no-gutters>
          <home-vertical-card v-for="n in 6" :lg="4" :sm="6" :xs="12">
            <template v-slot:title>
              <div class="text-h5">African</div>
            </template>
            <template v-slot:content>
              <div>Eiusmod occaecat mollit quis nisi irure.</div>
              <v-btn class="mt-3 px-12" color="secondary" variant="outlined">
                Play
              </v-btn>
            </template>
          </home-vertical-card>
        </v-row>
      </v-container>
    </template>
  </app-page>
</template>

<script setup lang="ts">
const query = ref("")
const trends = ref(["Pop music", "Workout", "Billie eilish", "Godzila"])

const showResult = () => {
  if (query.value !== "") {
    navigateTo({
      path: `/search`,
      query: {
        query: query.value,
      },
    })
  }
}
</script>
