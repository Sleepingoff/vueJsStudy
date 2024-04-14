<template>
    <form @submit.prevent="onSubmitForm">
        <Input @change:input="handleChangeInput" />
        <Button>검색</Button>
    </form>

</template>
<script setup lang='ts'>
import { Ref } from 'vue';
import Input from './Input.vue';
import Button from './Button.vue';
const emits = defineEmits(['change:input'])
const onSubmitForm = (e: Event) => {
    const elem = e.target as HTMLFormElement;
    elem.reset();
}
const handleChangeInput = (value: Ref<string>) => {
    emits('change:input', value);
}

</script>
<style scoped>
form {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
}
</style>