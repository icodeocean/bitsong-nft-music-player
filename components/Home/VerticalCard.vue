<template>
  <v-col :lg="lg" :sm="sm" :xs="xs" class="rounded-xl pa-3">
    <v-card color="#262626" class="pa-0 ma-0">
      <slot name="image"></slot>
      <v-card-actions
        class="d-block font-weight-light text-primary h-auto mt-auto pa-2"
      >
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">
          <slot name="title"></slot>
        </v-card-title>
        <v-card-text>
          <slot name="content"></slot>
        </v-card-text>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps({
  lg: Number,
  sm: Number,
  xs: Number,
})
</script>
