<template>
  <div v-if="submitData.text">
    <p>피드백이 성공적으로 전송되었습니다!</p>
    <p>피드백: {{ submitData.text }}</p>
    <p>이메일: {{ submitData.email }}</p>
  </div>

  <form @submit.prevent="onSubmitForm">
    <textarea v-model="textValue"></textarea>
    <input type="email" v-model="emailValue" />
    <button>submit</button>
  </form>

  <div class="info" @mouseover.stop="onMouseOver" @mouseleave="onMouseLeave">More Info

    <div class="tooltips" v-show="showTooltips">hi!!</div>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue';


const emailValue = ref<string>("");
const textValue = ref<string>("");
const submitData = ref({
  email: "",
  text: ""
});

const showTooltips = ref<boolean>(false);

const onSubmitForm = () => {
  submitData.value = {
    email: emailValue.value,
    text: textValue.value
  }
  emailValue.value = "";
  textValue.value = "";
}

const onMouseOver = () => {
  showTooltips.value = true;
}

const onMouseLeave = () => {
  showTooltips.value = false;
}

</script>

<style scoped>
.info {
  position: relative;
}

.tooltips {
  position: absolute;
  inset: 0;
  margin-top: 1rem;
}
</style>
