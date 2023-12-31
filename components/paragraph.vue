<template>
	<p class="my-1.5 h-fit w-full">{{ text }}</p>
</template>

<script setup lang="ts">
import { type paragraph } from '~/types/blog';

const props = defineProps<{ content: paragraph }>();
const text = ref(props.content.content);
</script>
