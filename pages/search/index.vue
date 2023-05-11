<template>
  <app-page>
    <template v-slot:title>Result For "{{ route.query.query }}"</template>
    <template v-slot:content>
      <v-container class="px-0 mx-0">
        <v-row no-gutters>
          <home-vertical-card v-for="n in 12" :lg="3" :sm="6" :xs="6">
            <template v-slot:image>
              <v-img src="/img/bendeniz.png" alt="weekend"></v-img>
            </template>
            <template v-slot:title>Without Me</template>
            <template v-slot:content>
              180 Tracks
              <v-icon size="30" icon="mdi-circle-small"></v-icon>
              5 Albums
            </template>
          </home-vertical-card>
        </v-row>
      </v-container>

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
const route = useRoute()
const page = ref(1)
</script>
