<script setup>
import { ref } from "vue";
import sun from "../assets/icons/sun-solid.svg";
import moon from "../assets/icons/moon-solid.svg";

const props = defineProps({
  intro: String,
});

const mode = ref(0);

function changeMode() {
  if (mode.value == 0) mode.value = 1;
  else mode.value = 0;

  let page = document.getElementById("html");
  page.classList.toggle("dark");
}
</script>

<template>
  <div class="shadow-lg bg-slate-800 text-slate-50">
    <div class="flex flex-row pt-1 pl-1">
      <img
        src="../assets/images/me.jpg"
        alt="A headshot of me, Colin."
        class="w-20 h-20 rounded-full"
      />
      <h1 class="text-2xl pt-5 pl-5">{{ intro }}</h1>
    </div>

    <nav class="flex flex-row h-14 pt-3">
      <ul class="w-full">
        <!-- <RouterLink class="navbarLink" to="/">Home</RouterLink> -->
        <RouterLink class="navbarLink" to="/">About</RouterLink>
        <RouterLink class="navbarLink" to="/workHistory"
          >Work History</RouterLink
        >
        <RouterLink class="navbarLink" to="/projects">Projects</RouterLink>
        <RouterLink class="navbarLink" to="/contact">Contact</RouterLink>
        <button
          @click="changeMode"
          class="rounded-full float-right mr-5 p-1 bg-slate-900 w-6 h-6 sm:h-8 sm:w-8 hover:p-0.5 duration-200"
        >
          <svg
            v-if="mode == 0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="text-amber-300 fill-current"
          >
            <path
              d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"
            />
          </svg>
          <svg
            v-if="mode == 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="text-stone-200 fill-current pl-1"
          >
            <path
              d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
            />
          </svg>
        </button>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
