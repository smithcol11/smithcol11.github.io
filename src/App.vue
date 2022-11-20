<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar intro="Colin Smith's Portfolio" />
  </header>
  <RouterView />
</template>

<style scoped></style>
