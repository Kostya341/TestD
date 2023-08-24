import { createRouter, createWebHistory } from "vue-router";
import Main from "../main.vue";
import Section from "../Section.vue";
import Catalog from "../Another/Catalog.vue";
import Bread from "../Categories/Bread.vue";
import Pizza from "../Categories/Pizza.vue";
import Salad from "../Categories/Salad.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "",
        component: Section,
      },
      {
        path: "/Catalog",
        name: "Catalog",
        component: Catalog,
        children: [
          {
            path: "/Catalog/Bread",
            name: "Bread",
            component: Bread,
          },
          {
            path: "/Catalog/Pizza",
            name: "Pizza",
            component: Pizza,
          },
          {
            path: "/Catalog/Salad",
            name: "Salad",
            component: Salad,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
