<template>
    <Button v-for="(item) in filterList" :key="item.id">{{ item.name }}</Button>
</template>
<script setup lang='ts'>
import filterConstant from '@/constants/filterConstant';
import Button from './Button.vue';

//`보유기관` `도서명` `저자명`

const filterList: Array<FilterType> = [
    { id: "filterList_1", name: filterConstant.MAINTENACE_AGENCY },
    { id: "filterList_2", name: filterConstant.BOOK_NAME },
    { id: "filterList_3", name: filterConstant.AUTHOR_NAME },
];


</script>
<style scoped></style>