<script setup>
import ListItem from "../components/ListItem.vue";

const skills = [
  {
    title: "Languages",
    subtitle: "Functional, OOP, Imperative",
    details: [
      "C, C++, Java, Python",
      "JavaScript, TypeScript, QML",
      "HTML, CSS",
      "Haskell, Pascal",
    ],
  },
  {
    title: "Web Technologies & Storage",
    subtitle: "Frameworks, Libraries, Databases, Tools, Concepts",
    details: [
      "Vue, React",
      "Bootstrap, TailwindCSS, Bulma",
      "Vite, Vitest",
      "Vue-Router, Pinia (Store / State Management), Cookies",
      "Node, Express, Passport, Environment Variables, APIs, Routes",
      "MySQL, Postgres, MongoDB",
    ],
  },
  {
    title: "Networking",
    subtitle: "Security, Development, Production",
    details: [
      "Firewalls, DNS, Ports & Forwarding",
      "VPS, VPN (WireGuard), Proxies",
    ],
  },
  {
    title: "Operating Systems",
    subtitle: "Files Systems, Commands",
    details: ["Windows, Linux, & Mac Desktops", "Linux Servers"],
  },
  {
    title: "Other",
    details: [
      "Git, GitHub, GitLab, Gitea",
      "Docker, FOSS, Self-Hosting, GPIO",
      "Keras, SKLearn, AI, ML, ROSPY & Robotics",
      "Hardware: Building PCs",
    ],
  },
];
</script>

<template>
  <div class="pageView">
    <div class="mx-auto w-full drop-shadow-lg rounded-md max-w-4xl">
      <div v-for="(skill, index) in skills">
        <ListItem :content="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
