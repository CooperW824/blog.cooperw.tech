<template>
    <div class="bg-base-200 w-full my-2 px-2">
        <p class="text-3xl text-primary h-6">"</p>
        <p class="text-lg text-primary pl-4">{{ content.content }}</p>
        <p class="text-3xl text-primary flex items-center ">"<span class="text-sm"> - {{ content.quoted }}</span></p>
    </div>
</template>
<script setup lang="ts">
import { type quote } from '~/types/blog';

const props = defineProps<{ content: quote }>();
const content = ref(props.content);
</script>