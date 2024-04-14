<template>
    <ul>
        <li>
            <span>{{ bookConstants.REQUEST_FLAG }}</span>
            <span>{{ bookConstants.MAINTENACE_AGENCY }}</span>
            <span>{{ bookConstants.BOOK_NAME }}</span>
            <span>{{ bookConstants.AUTHOR_NAME }}</span>
        </li>
        <li v-for="(result, idx) in resultList" :key="idx">
            <span>{{ result.REQUEST_FLAG }}</span>
            <span>{{ result.MAINTENACE_AGENCY }}</span>
            <span>{{ result.BOOK_NAME }}</span>
            <span>{{ result.AUTHOR_NAME }}</span>
        </li>
        <li v-if="!resultList[0]"><span>검색 결과가 없습니다.</span></li>
    </ul>
</template>
<script setup lang='ts'>
import bookConstants from '@/constants/bookConstants';


type Proptype = {
    resultList: Array<BookType>
}

defineProps<Proptype>();

</script>
<style scoped>
ul {
    list-style: none;
    background: rgb(198, 198, 198);
    border-radius: 8px;
    padding: 0;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 4px 16px;
}

li:first-child {
    background-color: rgb(136, 255, 136);
    border-radius: 8px;
}
</style>