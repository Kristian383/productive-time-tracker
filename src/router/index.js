import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

const routes = [
  { path: "/", redirect: "/time-entries" },
  {
    path: "/time-entries",
    name: "Time entries",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TimeEntriesView.vue"),
  },
  {
    path: "/new-time-entry",
    name: "Add time entry",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddTimeEntry.vue"),
  },
  {
    path: "/add-time-entry",
    name: "Add time entry",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/NewTimeEntry.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (store.getters.isMobile) {
    store.commit("removeSidebar");
    next();
  } else {
    next();
  }
});

export default router;
