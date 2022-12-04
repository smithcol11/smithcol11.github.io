<script setup>
const props = defineProps({
  content: Object,
});
</script>

<template>
  <div class="p-2 text-sm sm:text-base">
    <h1 class="text-center font-bold pb-2 px-10 text-lg text-violet-500">
      {{ content.title }}
    </h1>
    <div class="text-center pb-1">
      <a
        :href="content.link"
        target="_blank"
        class="text-rose-500 italic font-bold hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md p-1 duration-300"
        >Link to GitHub</a
      >
    </div>
    <p class="px-8">{{ content.description }}</p>
    <div class="px-8 pt-3 italic">
      App Features:
      <p v-for="features in content.features" class="not-italic">
        - {{ features }}
      </p>
    </div>
    <div class="px-8 pt-3 italic">
      Tech Used
      <div class="grid grid-cols-2">
        <p v-for="tech in content.tech" class="not-italic">- {{ tech }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
