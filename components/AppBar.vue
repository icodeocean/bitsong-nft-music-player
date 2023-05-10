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
  </v-app-bar>
</template>

<style scoped>
.background {
  background-color: rgba(33, 33, 33, 0.48);
}
</style>
