import { ref } from "vue";

export default {
  setup() {
    const message = ref("hello world!");
    const handleClickMessage = () => {
      const error = message.value;
      throw error;
    };
    return {
      message,
      handleClickMessage,
    };
  },
};
