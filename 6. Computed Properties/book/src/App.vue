<template>
  <main>
    <article>
      <SearchBar @change:input="handleChangeSearch" />
      <Filter :filter-list="filterList" />
    </article>
    <section>
      <ResultList :result-list="resultList" />
    </section>
  </main>
</template>
<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import ResultList from '@/components/ResultList.vue';
import bookConstants from '@/constants/bookConstants';
import data from '@/assets/book_data.json';
import Filter from '@/components/Filter.vue';
import useLocal from '@/store/useLocal';
const dataList = ref<DataType[]>(data.data);

const filterList = Object.values(bookConstants).map((list, idx) => {
  return { id: `book-filters-${idx}`, name: list }
});

const resultList = computed({
  get: () => [],
  set: (value: BookType[]) => {
    return value;
  }
});

const { getLocal, setLocal } = useLocal();

setLocal("filter", Object.values(bookConstants));
const filters = getLocal("filter");

const storedFilter = computed(() => filters);

const handleChangeSearch = (value: Ref<string>) => {
  throttle(search, 1000, value.value)();
}


const search = (query: string) => {
  resultList.value = [];
  dataList.value.forEach(data => {
    storedFilter.value.forEach((filter: string) => {
      const filtering = filter as keyof DataType;
      if (data[filtering].includes(query)) {
        resultList.value.push({
          AUTHOR_NAME: data.저자명,
          BOOK_NAME: data.도서명,
          MAINTENACE_AGENCY: data.보유기관,
          REQUEST_FLAG: data.청구기호,
        })

      }
    })
  })
}

const throttle = (callback: Function, delay: number, value: string) => {
  let timer: number | undefined;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        callback(value);
        timer = undefined;
      }, delay);
    }
  };
};
//todo: 필터가 변경될 때마다 resultList 업데이트해야함

watch(storedFilter.value, () => {
  resultList.value = [];
})
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
