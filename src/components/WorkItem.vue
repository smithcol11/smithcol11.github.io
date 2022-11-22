<script setup>
const props = defineProps({
  content: Object,
});
</script>

<template>
  <details
    open
    class="bg-slate-700 open:bg-slate-700 dark:bg-slate-800 dark:hover:bg-gray-800 hover:bg-slate-800 duration-200 border border-slate-300 dark:border-gray-800"
  >
    <summary
      class="text-slate-50 shadow select-none bg-inherit px-5 py-3 text-lg cursor-pointer text-center font-semibold"
    >
      {{ content.company }}
    </summary>
    <div class="px-5 py-3 text-md font-light bg-white dark:bg-slate-900">
      <p class="font-bold">
        {{ content.position }}
      </p>
      <p class="italic pl-3">
        {{ content.date }}
      </p>
      <p class="italic pl-3">
        {{ content.location }}
      </p>
      <div class="pt-5">
        Tasks:
        <p class="pl-5" v-for="tasks in content.tasks">- {{ tasks }}</p>
      </div>
    </div>
  </details>
</template>

<style scoped></style>
