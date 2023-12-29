<template>
	<div class="flex flex-col items-start justify-start w-full" id="top">
		<NuxtImg :src="blogHead.picture" class="w-full max-h-48" :alt="blogHead.title"></NuxtImg>
		<h1
			class="text-4xl w-fit h-fit font-heading text-left font-sans font-semibold pb-1 bg-clip-text bg-gradient-to-r from-primary to-accent text-transparent flex items-center justify-start"
		>
			{{ blogHead.title }}
		</h1>
		<div class="flex w-11/12 sm:w-full h-fit items-center justify-center sm:justify-start">
			<p class="mr-4 text-primary">{{ blogHead.author }}</p>
			<p class="text-primary">{{ new Date(blogHead.date).toDateString() }}</p>
		</div>
		<div class="flex w-11/12 sm:w-full h-fit flex-wrap justify-start items-center my-1">
			<p class="mr-1">Tags:</p>
			<p class="m-1 px-4 py-1 bg-base-200 rounded-lg" v-for="tag in blogHead.tags" :key="tag">{{ tag }}</p>
		</div>
		<hr class="h-0.5 bg-secondary my-1 w-11/12 sm:w-full border-none rounded-sm" />
		<p class="text-left w-11/12 sm:w-full px-2">{{ blogHead.description }}</p>
		<hr class="h-0.5 bg-secondary my-1 w-11/12 sm:w-full border-none rounded-sm" />
	</div>
</template>

<script setup lang="ts">
import type { BlogHead } from '~/types/blog';

const props = defineProps<{ blogHead: BlogHead }>();
const blogHead = ref(props.blogHead);
</script>
