import { ref } from "vue";

export default {
  emits: ["click:message"],
  setup(_, { emit }) {
    const message = ref("make error");
    const onClickMessage = (event) => {
      emit("click:message", event);
    };
    return { message, onClickMessage };
  },
  template: `<div @click="onClickMessage">{{message}}</div>`,
};
