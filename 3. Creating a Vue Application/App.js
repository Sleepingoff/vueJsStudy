import { ref } from "vue";
import MyComponent from "./MyComponent";

export default {
  setup() {
    const message = ref("hello world!");
    const handleClickMessage = (event) => {
      const error = "error";
      throw error;
    };
    return {
      message,
      handleClickMessage,
      MyComponent,
    };
  },
  template: ` {{message}}<MyComponent @click:message="handleClickMessage" />`,
};
