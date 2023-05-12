<template>
  <tr>
    <td class="d-flex text-left py-1 my-auto h-full">
      <img :src="image" alt="weekend" class="rounded-lg" />
      <div class="py-1 ml-3">
        <div>{{ title }}</div>
        <div>{{ artist }}</div>
      </div>
    </td>
    <td>{{ album }}</td>
    <td>{{ date }}</td>
    <td>{{ duration }}</td>
    <td>
      <div class="d-flex justify-between mr-8">
        <v-icon icon="mdi:mdi-play"></v-icon>
        <v-spacer></v-spacer>
        <v-icon icon="mdi:mdi-dots-vertical"></v-icon>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  album: String,
  image: String,
  artist: String,
  date: String,
  duration: String,
})
</script>
