<template>
  <!-- task 7 -->
  <Toggle @click:toggle="handleClickToggle" />
  <ProfileCard carreer="개발자" :active="active" nickname="eggme" description="find Sleepingoff" />
</template>

<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue';
import Toggle from '@/components/Toggle.vue';
import { ref } from 'vue';

const active = ref<boolean>(false);

const handleClickToggle = (value: boolean) => {
  if (value) active.value = true;
  else active.value = false;
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
