<template>
    <div class="flex flex-col  w-full h-fit items-center justify-center">
        <div class="flex w-11/12 h-8 bg-base-200 justify-between items-center rounded-t-lg px-4">
            <p class=""> {{ content.language }}</p>
            <button @click="handleCopy"> Copy Code</button>
        </div>
        <div class="flex w-11/12 h-fit bg-base-300 font-mono rounded-b-lg px-4">
            <p> {{ content.content }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type code } from '../types/blog';

const props = defineProps<{ content: code }>();
const content = ref(props.content);

const handleCopy = () => {
    navigator.clipboard.writeText(content.value.content);
};
</script>
