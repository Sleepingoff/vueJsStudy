<template>
    <input type="text" v-model="modelValue" @change="onChangeInput" />
</template>
<script setup lang='ts'>
import { ref } from 'vue';

const emits = defineEmits(['change:input'])

const modelValue = ref<string>("");
const onChangeInput = () => {
    emits('change:input', modelValue);
}

</script>
<style scoped>
input {
    border-radius: 6px;
    border: 1px solid black;
    padding: 4px;
}
</style>