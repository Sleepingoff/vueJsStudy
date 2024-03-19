<template>
    <input :type="type" />
</template>
<script setup lang='ts'>

type PropType = {
    type: string
}

const props = defineProps<PropType>();

</script>
<style scoped>
input {
    border: 1px solid black;
    border-radius: 8px;
    padding: 4px;
}
</style>