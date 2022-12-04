<script setup>
const props = defineProps(["content"]);
</script>

<template>
  <div
    class="bg-slate-100 dark:bg-slate-800 duration-300 border border-slate-100 dark:border-gray-800"
  >
    <div
      class="dark:text-slate-50 text-slate-900 shadow select-none bg-inherit px-5 py-3 text-lg text-center font-bold"
    >
      {{ content.title }}
    </div>
    <img
      v-if="content.logo != null"
      :src="content.logo"
      :alt="content.alt"
      class="relative w-24 sm:w-36 float-right p-5 rounded-full"
    />
    <div class="px-5 py-3 text-md font-light bg-white dark:bg-slate-900">
      <p class="font-bold text-violet-500" v-if="content.subtitle != null">
        {{ content.subtitle }}
      </p>
      <p class="italic pl-3" v-if="content.date != null">
        {{ content.date }}
      </p>
      <p class="italic pl-3 pb-5" v-if="content.location != null">
        {{ content.location }}
      </p>
      <div class="">
        <ul class="pl-5" v-for="details in content.details">
          <li>- {{ details }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
