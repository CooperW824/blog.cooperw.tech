<template>
	<div class="flex flex-col w-full sm:w-11/12 lg:w-1/2 h-full">
		<div class="flex w-full items-center">
			<ArticleHeader :blog-head="blog.head" />
		</div>
		<div class="flex flex-col w-full items-start px-4 just">
			<Content v-for="content in blog.body" :content="content" />
		</div>
		<hr class="h-0.5 bg-secondary my-1 w-11/12 sm:w-full border-none rounded-sm" />
		<div class="flex w-full items-center justify-between mb-1 px-2">
			<a class="text-primary">Previous Article</a>
			<a href="#top" class="text-primary text-2xl">Back to top</a>
			<a class="text-primary">Next Article</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { testBlog } from '../../types/testblog';
import type { Blog } from '../../types/blog';

const route = useRoute();
const id = ref(route.params.id);
const blog = ref<Blog>(testBlog);
</script>
