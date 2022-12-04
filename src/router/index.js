import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WorkHistory from "../views/WorkHistory.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Education from "../views/Education.vue";
import Skills from "../views/Skills.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: About,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/workHistory",
      name: "workHistory",
      component: WorkHistory,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/education",
      name: "education",
      component: Education,
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
    },
  ],
});

export default router;
