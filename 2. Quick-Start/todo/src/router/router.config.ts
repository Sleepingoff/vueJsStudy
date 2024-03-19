import { createMemoryHistory, createRouter } from "vue-router";
import pageConfig from "./page.config";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import useAuth from "@/composables/useAuth";

export const url = pageConfig;
const routes = [
  { path: url.splash, component: LoginPage, name: "Login" },
  { path: url.home, component: HomePage, name: "Home" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { getUserInfo } = await useAuth();
  const userInfo = getUserInfo();

  //로그인하지 않고 다른 페이지로 가는 경우
  if (to.name !== "Login" && !userInfo) next({ name: "Login" });
  //로그인 하고 로그인 페이지로 가는 경우
  else if (to.name === "Login" && userInfo) next({ name: "Home" });
  else next();
});

export default router;
