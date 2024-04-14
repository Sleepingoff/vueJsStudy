<template>
  <main>
    <article>
      <SearchBar @change:input="handleChangeSearch" />
      <Filter :filter-list="filterList" />
    </article>
    <section>
      <ResultList :result-list="resultList"></ResultList>
    </section>
  </main>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import ResultList from '@/components/ResultList.vue';
import bookConstants from '@/constants/bookConstants';
import data from '@/assets/book_data.json';
import Filter from '@/components/Filter.vue';


const filterList = Object.values(bookConstants).map((list, idx) => {
  return { id: `book-filters-${idx}`, name: list }
});

const resultList = ref<Array<BookType>>([]);
const dataList = ref<Array<BookType>>(data.data);

const handleChangeSearch = (value: Ref<string>) => {
  //데이터가 많아서 너무 오래 걸림!
  /*resultList.value = dataList.value.filter((data) => {
    return value.value.match(data.AUTHOR_NAME || data.BOOK_NAME || data.MAINTENACE_AGENCY || data.REQUEST_FLAG);
  })*/
  // switch (value.value) {
  //   case filter.BOOK_NAME:
  //   case bookConstants.AUTHOR_NAME:
  //   case bookConstants.MAINTENACE_AGENCY:
  //   case bookConstants.REQUEST_FLAG:
  //   default:
  //     dataList.value.find((list, idx)=>{

  //     })
  // }
}


</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
