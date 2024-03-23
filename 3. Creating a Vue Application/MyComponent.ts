import { ref } from "vue";

export default {
  emits: ["click:message"],
  setup(_: any, { emit }: any) {
    const message = ref("make error");
    const onClickMessage = (event: MouseEvent) => {
      emit("click:message", event);
    };
    return { message, onClickMessage };
  },
  template: `<div @click="onClickMessage">{{message}}</div>`,
};
