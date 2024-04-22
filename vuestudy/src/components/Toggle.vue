<template>
    <button class="toggle" @click="onClickToggle">
        <label>
            <input type="radio" name="active" id="active" v-model="modelValue" :checked="modelValue"
                class="a11y-hidden">
        </label>
        <label>
            <input type="radio" name="active" id="default" v-model="inversedModelValue" :checked="inversedModelValue"
                class="a11y-hidden">
        </label>
        <span ref="thumb"></span>
    </button>
</template>
<script setup lang='ts'>
import { computed, ref } from 'vue';

const emits = defineEmits(["click:toggle"]);

const modelValue = ref<boolean>(false);
const inversedModelValue = computed(() => !modelValue.value);

const thumb = ref<HTMLSpanElement | undefined>();
const onClickToggle = () => {
    const toggle = thumb.value?.classList.toggle("active");
    emits("click:toggle", toggle)
}

</script>
<style scoped>
.a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

.toggle {
    display: flex;
    background-color: aquamarine;
    padding: 4px;
    border-radius: 99999px;
    width: calc(16px * 2 + 8px);
    border: none;
}

span {
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: white;
    transition: all 1s;
}

span.active {
    transform: translateX(16px);

}
</style>