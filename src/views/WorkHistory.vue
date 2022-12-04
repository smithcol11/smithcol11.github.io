<script setup>
import ListItem from "../components/ListItem.vue";

const jobs = [
  {
    title: "Software Engineer Intern",
    subtitle: "Daimler Truck North America",
    date: "March 2022 - Current",
    location: "Portland, OR",
    details: [
      "XR development, VRED, Unity",
      "Full Stack development & deployment",
      "Hackathon planning, coordination, & testing",
      "Stackholder management",
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Onsemi",
    date: "July 2021 - March 2022",
    location: "Portland, OR",
    details: [
      "Agile development, daily standup, sprints",
      "Application development using QML",
      "Autonomous robot development using Rospy and Python",
    ],
  },
  {
    title: "Lead Teller",
    subtitle: "Wells Fargo",
    date: "August 2016 - July 2021",
    location: "Portland, OR",
    details: ["Customer service", "Leadership position"],
  },
];
</script>

<template>
  <div class="pageView">
    <div class="mx-auto w-full drop-shadow-lg rounded-md max-w-4xl">
      <div v-for="(job, index) in jobs">
        <ListItem :content="job" />
      </div>
    </div>
  </div>
</template>
