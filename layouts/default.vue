<template>
  <div>
    <v-app>
      <app-drawer></app-drawer>
      <app-bar></app-bar>
      <v-main>
        <slot></slot>
      </v-main>
    </v-app>
  </div>
</template>
