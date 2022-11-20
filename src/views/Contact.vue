<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const msg = ref("");

function sendMsg(event) {
  event.preventDefault();
  console.log(`
    Contact Sent:
    \tName:${name.value}
    \tEmail:${email.value}
    \tMessage:${msg.value}
  `);

  name.value = "";
  email.value = "";
  msg.value = "";
}
</script>

<template>
  <div class="pageView">
    <form
      class="mx-auto p-5 shadow-lg w-full max-w-lg"
      @submit.prevent="sendMsg"
    >
      <div class="grid col-span-1 pt-5">
        <label for="name">Your Name:</label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          placeholder="Type name here..."
          class="border rounded-md border-slate-300 mt-1 p-2"
        />
      </div>
      <div class="grid col-span-1 pt-5">
        <label for="email">Your Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Type email here..."
          class="border rounded-md border-slate-300 mt-1 p-2"
        />
      </div>
      <div class="grid col-span-1 pt-5">
        <label for="msg">Message:</label>
        <textarea
          id="msg"
          v-model="msg"
          type="text"
          required
          placeholder="Type message here..."
          class="border rounded-md border-slate-300 mt-1 p-2"
        />
      </div>
      <div class="flex pt-5 h-16">
        <button
          type="submit"
          class="mr-1 ml-auto w-1/4 bg-emerald-500 rounded-lg hover:bg-emerald-600"
        >
          Send
        </button>
        <button
          type="reset"
          class="ml-1 mr-auto w-1/4 bg-fuchsia-500 rounded-lg hover:bg-fuchsia-600"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
