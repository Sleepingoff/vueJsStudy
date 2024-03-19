<template> <button @click="onClickButton">
        <slot></slot>
    </button> </template>
<script setup lang='ts'>

const emits = defineEmits(['click']);

const onClickButton = (e: MouseEvent) => {
    emits('click', e);
}

</script>
<style scoped>
button {
    color: white;
    background-color: black;
    border: none;
    border-radius: 99999px;
}
</style>