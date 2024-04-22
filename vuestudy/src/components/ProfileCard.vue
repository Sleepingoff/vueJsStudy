<!-- task 7 -->
<template>
    <div class="card">
        <span class="active" :class="active ? 'online' : 'offline'"></span>
        <img :src="profile" alt="image">
        <div class="profile">
            <span>@{{ nickname }}</span>
            <p>소개: {{ description }}</p>
            <p :style="{ fontSize: carreer === '개발자' ? '20px' : carreer === '디자이너' ? '18px' : '16px' }">직업: {{ carreer
                }}</p>
        </div>
    </div>
</template>
<script setup lang='ts'>
import profile from "@/assets/vue.svg";

type PropType = {
    nickname: string,
    description: string,
    carreer: string,
    active: boolean
}
defineProps<PropType>();
</script>
<style scoped>
img {
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1/1;
}

.card {
    border: 1px solid black;
    width: 300px;
    height: 160px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    position: relative;
}

.card>img {
    flex-shrink: 0;
    border-radius: 50%;
    flex-grow: 0;
    flex-basis: 40%;
}

.card> :last-child {
    flex-grow: 1;
}

.profile {
    text-align: left;
}

.profile>span {
    font-weight: bold;
    font-size: large;
}

span.active {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: calc(160px / 2 - 16px);
}

.online {
    background-color: greenyellow
}

.offline {
    background-color: grey;
}
</style>