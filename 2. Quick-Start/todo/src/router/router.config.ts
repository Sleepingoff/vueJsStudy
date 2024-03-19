import { createMemoryHistory, createRouter } from "vue-router";
import pageConfig from "./page.config";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";

const url = pageConfig;
const routes = [
  { path: url.splash, component: LoginPage },
  { path: url.home, component: HomePage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
