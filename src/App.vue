<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="menu">
    <Navbar />
  </div>

  <div class="main">
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0 !important;
}
</style>

<style scoped>
.menu {
  padding: 20px;
  background-color: lightblue;
}
.main {
  padding: 20px;
}
</style>
