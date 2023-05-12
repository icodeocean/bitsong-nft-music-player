<template>
  <div class="background-gradient"></div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.background-gradient {
  position: fixed;
  width: 100%;
  height: 100%;

  background: url("~/assets/img/Gradient.png") no-repeat;
  opacity: 0.8;
  filter: blur(90px);
}
</style>
