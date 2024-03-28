<template>
    <Button v-for="(item) in filterList" :key="item.id">{{ item.name }}</Button>
</template>
<script setup lang='ts'>
import Button from './Button.vue';

type Proptype = {
    filterList: Array<FilterType>
}
defineProps<Proptype>();

</script>
<style scoped></style>