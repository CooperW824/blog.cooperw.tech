<template>
	<div class="flex flex-col w-full sm:w-11/12 lg:w-1/2 h-full">
		<div class="flex items-center">
			<ArticleHeader :blog-head="blog.head" />
		</div>
		<div class="flex flex-col items-start ml-2">
			<Content v-for="content in blog.body" :content="content" />
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
