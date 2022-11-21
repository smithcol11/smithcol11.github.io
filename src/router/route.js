import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WorkHistory from "../views/WorkHistory.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home,
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
  ],
});

export default router;
