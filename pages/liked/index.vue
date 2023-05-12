<template>
  <app-page>
    <template v-slot:title>
      <div class="d-flex">
        <div
          class="pa-12 text-center rounded-lg text-secondary text-h2 bs-bg-blur"
        >
          <v-icon icon="mdi:mdi-thumb-up"></v-icon>
        </div>
        <div class="py-4 px-7 d-flex flex-column">
          <div>
            <div class="text-h4">Liked songs</div>
            <v-card-subtitle class="text-primary pa-0 text-body-1">
              96 Music
              <v-icon size="30" icon="mdi-circle-small"></v-icon>
              02:56:21
            </v-card-subtitle>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="secondary" height="48">
            <span class="mr-1 text-body-1 d-flex align-center">
              <v-icon icon="mdi:mdi-play-circle" class="h-auto"></v-icon>
            </span>
            <span class="my-auto">Play all</span>
          </v-btn>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <v-table class="bs-bg-dark">
        <thead>
          <tr>
            <th class="text-left">Title & Artist</th>
            <th class="text-left">Album</th>
            <th class="text-left">Liked date</th>
            <th class="text-left">Duration</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody class="text-caption">
          <like-list-item
            v-for="n in 10"
            title="Title & Artist"
            album="Album"
            image="/img/weekend.png"
            artist="Drake"
            date="09 May 2023"
            duration="02:33"
          >
          </like-list-item>
        </tbody>
      </v-table>

      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          rounded="circle"
        ></v-pagination>
      </div>
    </template>
  </app-page>
</template>

<script setup lang="ts">
const page = ref(1)
</script>
