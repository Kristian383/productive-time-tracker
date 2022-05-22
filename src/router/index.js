import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

const routes = [
  { path: "/", redirect: "/time-entries" },
  {
    path: "/time-entries",
    name: "Time entries",
    props: (route) => ({ query: route.query }),
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TimeEntriesView.vue"),
  },
  {
    path: "/:notFound(.*)*",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFoundView.vue"),
    meta: { title: "Not Found" },
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
