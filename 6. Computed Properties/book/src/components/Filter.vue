<template>
    <label @click="onClickRadio"><input type="radio" name="all" v-model="inversedModelValue"
            :checked="inversedModelValue" />
        <span>전체</span>
    </label>
    <label>
        <input type="radio" name="all" v-model="modelValue" :checked="modelValue" />
        <label v-for="(item) in filterList" :key="item.id" @click="onClickCheckBox">
            <input type="checkbox" name="" v-model="item.checked" :checked="item.checked" />
            <span>{{ item.name }}</span>
        </label>
    </label>
</template>
<script setup lang='ts'>
import useLocal from '@/store/useLocal';
import { computed, ref, watch } from 'vue';


type Filters = FilterType<string>;

type Proptype = {
    filterList: Array<Filters>
}
const prop = defineProps<Proptype>();
const filterList = ref(prop.filterList);
const checkedList = computed(() => filterList.value.map(item => item.checked))
const checkedNameList = computed(() => filterList.value.filter(item => item.checked).map(item => item.name));



const modelValue = ref<boolean>(false);
const inversedModelValue = computed(() => !modelValue.value)

const onClickRadio = () => {
    modelValue.value = false;
    unCheckAll();
}

const onClickCheckBox = () => {
    modelValue.value = true;
}

const unCheckAll = () => {
    filterList.value = filterList.value.map((item: FilterType<string>) => ({ ...item, checked: false }));
}

watch(checkedList, () => {
    const { setLocal } = useLocal();
    setLocal("filter", checkedNameList.value);
    const allChecked = checkedList.value.every(item => item);
    const allUnChecked = checkedList.value.every(item => !item);
    if (allChecked || allUnChecked) {
        modelValue.value = false;
        setLocal("filter", filterList.value.map(item => item.name))
    }
})

</script>
<style scoped>
label {
    margin: 8px;
}

span {
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
}

input {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

input[type="checkbox"]:checked~span {
    background-color: grey;
    color: white;
}

input[type="radio"]:checked~span {
    background-color: blue;
    color: white;
}

/* name속성이 작동하지 않음 */
input[type="radio"]:not(:checked)~span,
input[type="radio"]:not(:checked)~label>span {
    background-color: rgb(224, 224, 224);
}
</style>