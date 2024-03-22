<template> <button @click="onClickButton" :type="type">
        <slot></slot>
    </button> </template>
<script setup lang='ts'>

type PropType = {
    type?: "button" | "submit" | "reset" | undefined
}

withDefaults(defineProps<PropType>(), {
    type: 'button'
})

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