<script setup>
const props = defineProps({
  content: Object,
});
</script>

<template>
  <div class="p-3 text-sm">
    <h1 class="text-center pb-2 px-10 text-lg">{{ content.title }}</h1>
    <p class="px-8">{{ content.description }}</p>
    <div class="px-8 pt-3 italic">
      App Features:
      <p v-for="features in content.features" class="not-italic">
        - {{ features }}
      </p>
    </div>
    <div class="px-8 pt-3 italic">
      Tech Used
      <p v-for="tech in content.tech" class="not-italic">- {{ tech }}</p>
    </div>
    <div class="pt-3 px-8">
      <a
        :href="content.link"
        target="_blank"
        class="dark:text-fuchsia-500 text-fuchsia-600 italic hover:text-base duration-200"
        >Link to GitHub</a
      >
    </div>
  </div>
</template>

<style scoped></style>
