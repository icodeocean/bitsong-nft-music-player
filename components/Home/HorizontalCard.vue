<template>
  <v-col :lg="lg" :sm="sm" :xs="xs" class="rounded-xl pa-3">
    <v-card color="#262626" class="pa-1">
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-2 rounded-lg" size="120">
          <slot name="image"></slot>
        </v-avatar>
        <div>
          <v-card-title class="text-h5">{{ title }}</v-card-title>
          <v-card-subtitle class="text-primary">{{ content }}</v-card-subtitle>
          <v-card-actions class="text-h4 font-weight-light h-auto mt-auto">
            <slot name="action"></slot>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps({
  lg: Number,
  sm: Number,
  xs: Number,
  title: String,
  content: String,
})
</script>
