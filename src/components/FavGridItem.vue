<script setup>
const props = defineProps({
  link: String,
  imgSrc: String,
  altText: String,
});
</script>

<template>
  <a :href="link" class="hover:bg-fuchsia-500" target="_blank">
    <img
      :src="imgSrc"
      :alt="altText"
      class="w-32 h-32 hover:p-1 duration-300"
    />
  </a>
</template>
