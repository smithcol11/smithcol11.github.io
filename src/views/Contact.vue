<script setup>
import { ref, Transition } from "vue";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

const name = ref("");
const email = ref("");
const msg = ref("");
const render = ref(false);
const sec = ref(3);

function renderTimer() {
  let timer = setInterval(() => {
    sec.value--;
    if (sec.value <= 0) {
      sec.value = 3;
      clearInterval(timer);
      render.value = false;
    }
  }, 1000);
}

function sendMsg(event) {
  render.value = true;
  console.log(`
    Contact Sent:
    \tName:${name.value}
    \tEmail:${email.value}
    \tMessage:${msg.value}
  `);

  const response = fetch(
    `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: msg.value,
      }),
    }
  );

  name.value = "";
  email.value = "";
  msg.value = "";

  renderTimer();
}
</script>

<template>
  <div class="pageView">
    <!-- <p class="text-center text-2xl">Find me here!</p> -->
    <div class="grid grid-cols-2 mx-auto pb-5 gap-5">
      <a href="https://github.com/smithcol11" target="_blank">
        <img
          :src="github"
          class="w-32 p-1 duration-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl mx-auto"
          alt="GitHub logo, click to navigate there."
        />
      </a>
      <a href="https://www.linkedin.com/in/colin-smith253/" target="_blank">
        <img
          :src="linkedin"
          class="w-32 p-1 duration-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl mx-auto"
          alt="LinkedIn logo, click to navigate there."
        />
      </a>
    </div>
    <form
      class="mx-auto p-5 shadow-lg w-full max-w-lg border dark:border-gray-700 dark:bg-slate-900"
      @submit.prevent="sendMsg"
    >
      <div class="grid col-span-1 pt-5">
        <label for="name">Your Name:</label>
        <input
          id="name"
          name="name"
          v-model="name"
          type="text"
          required
          placeholder="Type name here..."
          class="border rounded-md border-slate-300 mt-1 p-2 dark:bg-slate-900 dark:border-gray-700"
        />
      </div>
      <div class="grid col-span-1 pt-5">
        <label for="email">Your Email:</label>
        <input
          id="email"
          name="email"
          v-model="email"
          type="email"
          required
          placeholder="Type email here..."
          class="border rounded-md border-slate-300 mt-1 p-2 dark:bg-slate-900 dark:border-gray-700"
        />
      </div>
      <div class="grid col-span-1 pt-5">
        <label for="msg">Message:</label>
        <textarea
          id="msg"
          name="message"
          v-model="msg"
          type="text"
          required
          placeholder="Type message here..."
          class="border rounded-md border-slate-300 mt-1 p-2 dark:bg-slate-900 dark:border-gray-700"
        />
      </div>
      <div class="flex pt-5 h-16">
        <button
          type="submit"
          class="text-slate-900 mr-1 ml-auto w-1/4 bg-emerald-500 rounded-lg hover:bg-emerald-600 duration-300 hover:text-lg"
        >
          Send
        </button>
        <button
          type="reset"
          class="text-slate-900 ml-1 mr-auto w-1/4 bg-violet-500 rounded-lg hover:bg-violet-600 duration-300 hover:text-lg"
        >
          Reset
        </button>
      </div>
    </form>
    <Transition>
      <div
        v-if="render"
        class="w-full max-w-md animate-bounce ani bg-green-100 rounded-lg mt-10 px-6 py-6 mb-4 text-base text-green-700 mx-auto"
        role="alert"
      >
        Message sent successfully!
        <p class="pt-2 font-light">
          {{ sec }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
