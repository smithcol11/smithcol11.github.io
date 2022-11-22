<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar intro="Colin Smith's Portfolio" />
  </header>
  <div
    class="fixed bg-slate-50 dark:bg-slate-700 w-full h-screen -z-10 top-0"
  ></div>
  <RouterView />
</template>

<style scoped></style>
