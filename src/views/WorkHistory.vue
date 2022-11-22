<script setup>
import WorkItem from "../components/WorkItem.vue";

const dtna = {
  position: "Software Engineer Intern",
  company: "Daimler Truck North America",
  date: "March 2022 - Current",
  location: "Portland, OR",
  tasks: [
    "XR development, VRED, Unity",
    "Full Stack development & deployment",
    "Hackathon planning, coordination, & testing",
    "Stackholder management",
  ],
};
const onsemi = {
  position: "Software Engineer Intern",
  company: "Onsemi",
  date: "July 2021 - March 2022",
  location: "Portland, OR",
  tasks: [
    "Agile development, daily standup, sprints",
    "Application development using QML",
    "Autonomous robot development using Rospy and Python",
  ],
};
const wells = {
  position: "Lead Teller",
  company: "Wells Fargo",
  date: "August 2016 - July 2021",
  location: "Portland, OR",
  tasks: ["Customer service", "Leadership position"],
};
</script>

<template>
  <div class="pageView">
    <div class="mx-auto w-full drop-shadow-lg rounded-md max-w-4xl">
      <WorkItem :content="dtna" />
      <WorkItem :content="onsemi" />
      <WorkItem :content="wells" />
    </div>
  </div>
</template>
