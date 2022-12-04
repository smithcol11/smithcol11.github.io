<script setup>
import CarouselItem from "../components/CarouselItem.vue";
import { ref } from "vue";

const current = ref(0);

const projects = [
  {
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
  },

  {
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
  },

  {
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
  },
  {
    title: "Onsemi Coding Challenge",
    description:
      "When applying to my Onsemi internship, I had to complete a coding challenge. \
      I needed to use QML, a language, to implement a chat applicaton.",
    features: [
      "Socket connections",
      "Real time chat messaging",
      "Unique user interaction, or DMs",
      "Global chat room",
      "Display connected and available users",
      "Database used to keep chat history for rooms and users",
    ],
    tech: ["QML", "SocketIO", "C++", "Qt Creator", "MongoDB"],
    link: "https://github.com/smithcol11/OnsemiCodingChallenge",
  },
];

const projectsLength = projects.length;

function setCurrent(active) {
  current.value = active;
}

function changeCurrent(change) {
  let value = current.value + change;
  if (value == projectsLength) current.value = 0;
  else if (value == -1) current.value = projectsLength - 1;
  else current.value = value;
}
</script>

<template>
  <div class="pageView">
    <div
      class="w-full max-w-4xl mx-auto shadow-lg border border-slate-100 dark:border-gray-700 dark:bg-slate-900 h-[650px]"
    >
      <button
        @click="changeCurrent(-1)"
        class="relative float-left top-1/2 w-7 h-14 bg-slate-400 bg-opacity-20 duration-300 hover:h-16 hover:w-8 hover:bg-opacity-30"
      >
        ❮
      </button>
      <button
        @click="changeCurrent(1)"
        class="relative top-1/2 float-right w-7 h-14 bg-slate-400 bg-opacity-20 duration-300 hover:h-16 hover:w-8 hover:bg-opacity-30"
      >
        ❯
      </button>
      <div v-for="(project, index) in projects">
        <CarouselItem v-if="current == index" :content="project" />
      </div>
    </div>
    <div class="flex flex-row mx-auto mt-1">
      <div v-for="(project, index) in projects">
        <button
          v-if="current == index"
          class="bg-emerald-500 rounded-full w-5 h-5 mx-2 hover:bg-violet-500 duration-300"
          @click="setCurrent(index)"
          aria-label="Navigate to project {{index}}."
        ></button>
        <button
          v-else
          class="dark:bg-slate-200 dark:hover:bg-violet-500 bg-slate-700 rounded-full w-5 h-5 mx-2 hover:bg-violet-500 duration-300"
          @click="setCurrent(index)"
          aria-label="Navigate to project {{index}}."
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
