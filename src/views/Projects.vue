<script setup>
import CarouselItem from "../components/CarouselItem.vue";
import { ref } from "vue";

const current = ref(0);

const timeSync = {
  title: "Time Sync",
  description:
    "This project was done with a group during our full stack web dev class. \
  The app was meant to a way to find, share, and join events with people in your area.",
  features: [
    "Personal and group messaging",
    "Event searching, planning, and sharing",
    "A timeline, to display these events and general posts",
    "Comments and likes on timeline",
    "User accounts, authentication, settings",
  ],
  tech: [
    "MongoDB",
    "Express",
    "React",
    "Node",
    "Passport",
    "Docker",
    "Bootstrap",
  ],
  link: "https://github.com/smithcol11/TimeSync",
};

const connect4 = {
  title: "Connect 4 AI",
  description:
    "During an AI class, my group and I set out to create a Connect 4 AI. \
    We used both Q tables and a min max algorithm with alpha beta pruning to \
    create two different agents and test them against each other.",
  features: [
    "Command line Connect 4 board",
    "Two agents, including Q table and Min Max",
    "The Q table agent was hardly better than random, while the \
    Min Max was pretty decent, but made silly errors often",
    "After, we created a document analyzing the two agents",
  ],
  tech: ["Python", "Q Tables", "Min Max", "Alpha Beta Pruning"],
  link: "https://github.com/smithcol11/Connect4AI",
};

const website = {
  title: "This Website",
  description:
    "This website you are on now, is the final project for my web development class. \
    We needed to create a personal site using HTML, CSS, and JS, then host it on GitHub Pages.",
  features: [
    "Functional navbar with routing",
    "An About page",
    "Recent work experience",
    "Highlight different projects",
    "A contact me page, which contains GitHub, LinkedIn, and email form",
  ],
  tech: ["Vue", "Vue-Router", "Vite", "TailwindCSS", "SPA", "SSR"],
  link: "https://github.com/smithcol11/smithcol11.github.io",
};

function setCurrent(active) {
  current.value = active;
}

function changeCurrent(change) {
  let value = current.value + change;
  if (value == 3) current.value = 0;
  else if (value == -1) current.value = 2;
  else current.value = value;
}
</script>

<template>
  <div class="pageView">
    <div
      class="w-full max-w-4xl mx-auto shadow-lg border border-slate-100 dark:border-gray-700 dark:bg-slate-900 h-[500px]"
    >
      <button
        @click="changeCurrent(-1)"
        class="relative float-left top-1/2 w-8 h-16 bg-slate-400 bg-opacity-20 duration-200 hover:h-20 hover:w-10 hover:bg-opacity-30"
      >
        ❮
      </button>
      <button
        @click="changeCurrent(1)"
        class="relative top-1/2 float-right w-8 h-16 bg-slate-400 bg-opacity-20 duration-200 hover:h-20 hover:w-10 hover:bg-opacity-30"
      >
        ❯
      </button>
      <CarouselItem v-if="current == 0" :content="timeSync" />
      <CarouselItem v-if="current == 1" :content="connect4" />
      <CarouselItem v-if="current == 2" :content="website" />
    </div>
    <div class="grid grid-cols-3 mx-auto">
      <button
        v-if="current == 0"
        class="bg-emerald-500 rounded-full w-4 h-4 m-5 hover:w-5 hover:h-5 duration-200"
        @click="setCurrent(0)"
        aria-label="Navigate to project 1."
      ></button>
      <button
        v-else
        class="dark:bg-slate-200 bg-slate-700 rounded-full w-4 h-4 m-5 hover:w-5 hover:h-5 duration-200"
        @click="setCurrent(0)"
        aria-label="Navigate to project 1."
      ></button>
      <button
        v-if="current == 1"
        class="bg-emerald-500 rounded-full w-4 h-4 m-5 hover:w-5 hover:h-5 duration-200 hover:ml-4"
        @click="setCurrent(1)"
        aria-label="Navigate to project 2."
      ></button>
      <button
        v-else
        class="dark:bg-slate-200 bg-slate-700 rounded-full w-4 h-4 m-5 hover:w-5 hover:h-5 duration-200 hover:ml-4"
        @click="setCurrent(1)"
        aria-label="Navigate to project 2."
      ></button>
      <button
        v-if="current == 2"
        class="bg-emerald-500 rounded-full w-4 h-4 m-5 hover:w-5 hover:h-5 duration-200 hover:ml-4"
        @click="setCurrent(2)"
        aria-label="Navigate to project 3."
      ></button>
      <button
        v-else
        class="dark:bg-slate-200 bg-slate-700 rounded-full w-4 h-4 m-5 hover:w-5 hover:h-5 duration-200 hover:ml-4"
        @click="setCurrent(2)"
        aria-label="Navigate to project 3."
      ></button>
    </div>
  </div>
</template>
