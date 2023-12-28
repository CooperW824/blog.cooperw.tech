<template>
	<div class="flex items-center justify-center w-full my-2">
		<embed :src="content.src" :title="content.src" class="w-full aspect-video" />
	</div>
</template>

<script setup lang="ts">
 } from 'vue';
import { type embed } from '~/types/blog';
const props = defineProps<{ content: embed }>();
const content = ref(props.content);
</script>
