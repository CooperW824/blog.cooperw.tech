<template>
	<div class="flex flex-col w-full sm:w-11/12 lg:w-3/4 h-full items-center">
		<ArticleHeader :blog-head="blog.head" />
		<Content v-for="content in blog.body" :content="content" />
	</div>
</template>

<script setup lang="ts">
import { testBlog } from '../../types/testblog';
import type { Blog } from '../../types/blog';

const route = useRoute();
const id = ref(route.params.id);
const blog = ref<Blog>(testBlog);
</script>
