import { createApp } from "vue";

import App from "./App.js";
import MyComponent from "./MyComponent.js";

const app = createApp(App);
app.component("my-component", MyComponent);

app.config.errorHandler = (err: any) => {
  console.error(err);
};

export default app.mount("#app");
