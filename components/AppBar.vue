<template>
  <v-app-bar
    :elevation="2"
    height="100"
    class="bs-bg-dark bs-border-bottom px-16 d-flex justiny-between"
  >
    <v-text-field
      hide-details
      label="Search"
      variant="underlined"
      append-inner-icon="mdi-magnify"
      single-line
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-avatar size="56" color="surface-variant">
      <v-img src="/img/v-avatar.png" alt="John"></v-img>
    </v-avatar>
    <div class="ml-2">
      <p>Ted Chow</p>
      <p class="text-caption">51.00 ETH</p>
    </div>

    <v-menu left bottom>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-chevron-down" v-bind="props"></v-btn>
      </template>

      <v-list class="bs-bg-blur pa-3 mt-5">
        <div class="text-center">
          <div class="text-caption">Current balance</div>
          <div class="text-h5">51.00ETH</div>
        </div>
        <v-divider class="my-3"></v-divider>
        <v-list-item
          v-for="(item, index) in menuList"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :key="index"
          :to="item.to"
          class="text-caption text-uppercase text-primary ma-2 rounded"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.background {
  background-color: rgba(33, 33, 33, 0.48);
}
</style>

<script setup lang="ts">
import { useUserMenuList } from "~/composables/useNavList"
const menuList = useUserMenuList()
</script>
