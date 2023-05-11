<template>
  <v-navigation-drawer class="bs-bg-dark px-3 py-3 text-primary">
    <div style="height: 100px" class="pa-md-4 mx-lg-auto">
      <v-img src="/logo-institutional.svg" alt="BitSong Music" />
    </div>

    <v-list nav class="text-weight-light">
      <span class="ml-0"> Menu </span>
      <v-list-item
        v-for="(menuItem, index) in menuList"
        :prepend-icon="menuItem.icon"
        :title="menuItem.title"
        :value="menuItem.value"
        :key="index"
        :to="menuItem.to"
        exact
        class="mb-3 mt-5 text-subtitle-1"
      ></v-list-item>

      <v-divider class="my-10"></v-divider>

      <span> My Playlists </span>
      <v-list-item
        v-for="(listItem, index) in playList"
        :title="listItem.title"
        :value="listItem.value"
        :key="index"
        :to="listItem.to"
        class="mb-3 mt-5 text-subtitle-1"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useNavList } from "~/composables/useNavList"
const { menuList, playList } = useNavList()
</script>
