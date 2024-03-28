<template>
    <input :type="type" v-model="modelValue" @change="onChangeInput" />
</template>
<script setup lang='ts'>
import { ref } from 'vue';


type PropType = {
    type: string,
}

defineProps<PropType>();

const emits = defineEmits(['change'])

const modelValue = ref();
const onChangeInput = () => {
    emits('change', modelValue);
}
</script>
<style scoped>
input {
    border: 1px solid black;
    border-radius: 8px;
    padding: 4px;
}
</style>