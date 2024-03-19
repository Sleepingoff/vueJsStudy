import { createApp } from "vue";
import "@/assets/global.css"
import App from "./App.vue";
import router from "./router/router.config";

const app = createApp(App);

app.use(router);
app.mount("#app");
