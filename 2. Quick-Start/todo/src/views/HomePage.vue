<template>
    <header><span>{{ username }}님 안녕하세요! 오늘은 어떤 일을 해볼까요?</span></header>
    <main>
        <ul>
            <li v-if="!todos.length">{{ "등록된 할 일이 없네요!" }}</li>
            <li v-for="(todo, idx) in todos" :key="todo.id"><span>{{ idx }}</span>{{ todo.todo }}</li>
        </ul>
        <form @submit="onSubmitTodos">
            <Input type="text" v-model="newTodos" />
            <Button type="submit">새로운 할 일 추가</Button>
        </form>
    </main>
</template>
<script setup lang='ts'>
import Button from '@/components/atoms/Button.vue';
import Input from '@/components/atoms/Input.vue';
import useAuth from '@/composables/useAuth';
import useTodos from '@/store/useTodos';
import { ref } from 'vue';

const { getUserInfo } = useAuth();
const username = getUserInfo();

const { getTodos, setTodos } = useTodos();
const currentTodos = getTodos();

type Todos = Array<Todo>
const todos = ref<Todos>(currentTodos);
const newTodos = ref<string>("");

const onSubmitTodos = (e: Event) => {
    e.preventDefault();
    todos.value = setTodos(newTodos.value);
    const elem = e.target as HTMLFormElement;
    elem.reset();
}
</script>
<style scoped>
li {
    list-style-type: none;
}

li>span::after {
    content: "|";
    padding: 4px;
    color: grey;
}
</style>