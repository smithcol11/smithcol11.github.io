<script setup>
const props = defineProps({
  intro: String,
});
</script>

<template>
  <div class="shadow-lg bg-slate-800 text-slate-50">
    <div class="flex flex-row pt-5 pl-5">
      <img
        src="../assets/images/me.jpg"
        alt="A headshot of me, Colin."
        class="w-20 h-20 rounded-full"
      />
      <h1 class="text-2xl pt-5 pl-5">{{ intro }}</h1>
    </div>

    <nav class="flex flex-row">
      <RouterLink class="navbarLink" to="/">Home</RouterLink>
      <RouterLink class="navbarLink" to="/about">About</RouterLink>
      <RouterLink class="navbarLink" to="/workHistory">Work History</RouterLink>
      <RouterLink class="navbarLink" to="/projects">Projects</RouterLink>
      <RouterLink class="navbarLink" to="/contact">Contact</RouterLink>
    </nav>
  </div>
</template>

<style scoped></style>
