<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="h-screen flex flex-col justify-between">
    <header>
      <Navbar intro="Colin's Portfolio" />
    </header>

    <div
      class="fixed bg-slate-50 dark:bg-slate-700 w-full h-screen -z-10 top-0 duration-300"
    ></div>
    <main class="mb-auto">
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped></style>
