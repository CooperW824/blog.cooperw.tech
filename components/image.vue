<template>
    <div class="flex w-full items-center justify-center flex-col my-4">
        <NuxtImg :src="img.src" :alt="img.alt" ></NuxtImg>
        <p class="mt-1">{{ img.caption }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type image } from '~/types/blog';

const props = defineProps<{ content: image }>();
const img = ref(props.content);
</script>
