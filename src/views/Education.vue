<script setup>
import ListItem from "../components/ListItem.vue";
import psuLogo from "../assets/images/psuLogo.png";
import pccLogo from "../assets/images/pccLogo.png";

const psu = {
  title: "Portland State University",
  subtitle: "B.S. Computer Science",
  date: "September 2019 - Current",
  location: "Portland, OR",
  details: [
    "CS Upper Division",
    "Capstone Team Lead",
    "MECOP",
    "Data Structures, AI & ML, Alogrithms, Languages, Full Stack, Web & Cloud Security, Web Development,",
  ],
  logo: psuLogo,
  alt: "An image of the PSU logo.",
};
const pcc = {
  title: "Portland Community College",
  subtitle: "A.S. Computer Science",
  date: "September 2016 - June 2019",
  location: "Portland, OR",
  details: ["CS Intro", "General Studies", "Business Intro Courses"],
  logo: pccLogo,
  alt: "An image of the PCC logo.",
};
</script>

<template>
  <div class="pageView">
    <div class="mx-auto w-full drop-shadow-lg rounded-md max-w-4xl">
      <ListItem :content="psu" />
      <ListItem :content="pcc" />
    </div>
  </div>
</template>
