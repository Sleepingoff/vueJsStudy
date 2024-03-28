<template>
    <form @submit.prevent="onSubmitForm">
        <Input @change:input="handleChangeInput" />
        <Button>검색</Button>
    </form>
    <div>
        dropdown
    </div>

</template>
<script setup lang='ts'>
import Input from './Input.vue';
import Button from './Button.vue';
import { Ref } from 'vue';
import * as 

const onSubmitForm = (e: Event) => {
    const elem = e.target as HTMLFormElement;
    elem.reset();
}
const handleChangeInput = (value: Ref<string>) => {

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