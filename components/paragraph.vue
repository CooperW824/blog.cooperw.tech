<template>
    <p class="pl-2 h-fit  w-full">{{ text }}</p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type paragraph } from '~/types/blog';

const props = defineProps<{ content: paragraph }>();
const text = ref(props.content.content);
</script>
