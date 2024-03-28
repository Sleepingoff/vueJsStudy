<template>
    <form @submit="onSubmitLogin">
        <Input type="text" v-model="username" />
        <div v-show="!username">올바른 username을 입력해주세요</div>
        <Input type="password" v-model="password" />
        <div v-show="!password">올바른 password를 입력해주세요</div>
        <Button type="submit" @click="handleClickLogin">로그인</Button>
    </form> 
</template>
<script setup lang='ts'>
import Button from '@/components/atoms/Button.vue';
import Input from '@/components/atoms/Input.vue';
import useAuth from '@/composables/useAuth';
import useCheckAuth from '@/composables/useCheckAuth';
import router, { url } from '@/router/router.config';
import { ref } from 'vue';

const { setUserInfo } = useAuth();
const username = ref<string>("");
const password = ref<string>("");

const onSubmitLogin = (e: Event) => {
    e.preventDefault();
    router.push(url.home);
}

const handleClickLogin = () => {
    const userInfo = { username: username.value, password: password.value }
    const isCorrectInfo = useCheckAuth(userInfo);
    if (!isCorrectInfo) {
        alert("올바른 정보를 입력해주세요");
    } else {
        setUserInfo(userInfo);
    }

}

</script>
<style scoped></style>