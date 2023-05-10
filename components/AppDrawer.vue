<template>
  <v-navigation-drawer class="bs-bg-dark px-3 py-3 text-primary">
    <div style="height: 100px" class="pa-md-4 mx-lg-auto">
      <v-img src="/logo-institutional.svg" alt="BitSong Music" />
    </div>

    <v-list nav class="text-weight-light">
      <span class="ml-0"> Menu </span>
      <v-list-item
        v-for="(listItem, index) in listItems"
        :prepend-icon="listItem.icon"
        :title="listItem.title"
        :value="listItem.value"
        :key="index"
        class="mb-3 mt-5 text-subtitle-1"
      ></v-list-item>

      <v-divider class="my-10"></v-divider>

      <span> My Playlists </span>
      <v-list-item
        v-for="(playList, index) in playLists"
        :title="playList.title"
        :value="playList.value"
        :key="index"
        class="mb-3 mt-5 text-subtitle-1"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const listItems = ref([
  {
    title: "HOME",
    value: "home",
    icon: "mdi-home",
  },
  {
    title: "MY BIDS",
    value: "myBids",
    icon: "mdi-currency-usd",
  },
  {
    title: "EXPLORE",
    value: "explore",
    icon: "mdi-magnify",
  },
  {
    title: "LIKED SONGS",
    value: "likedSongs",
    icon: "mdi-heart-outline",
  },
  {
    title: "LIBRARY",
    value: "library",
    icon: "mdi-music-box-multiple-outline",
  },
])

const playLists = ref([
  {
    title: "playlist #1",
    value: "playlist1",
  },
  {
    title: "playlist #2",
    value: "playlist2",
  },
  {
    title: "playlist #3",
    value: "playlist3",
  },
])
</script>
