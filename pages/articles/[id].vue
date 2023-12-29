<template>
	<div class="flex flex-col w-full sm:w-11/12 lg:w-1/2 h-fit ">
		<div class="flex w-full items-center">
			<ArticleHeader :blog-head="blogMeta" />
		</div>
		<div class="flex flex-col flex-grow flex-shrink basis-auto w-full items-start px-4 overflow-y-auto">
			<Content v-for="content in blog.body" :content="content" />
		</div>
		<hr class="h-0.5 bg-secondary my-1 w-11/12 sm:w-full border-none rounded-sm" />
		<div class="flex w-full items-center justify-center mb-1 px-2">
			<!-- <a class="text-primary">Previous Article</a> -->
			<a href="#top" class="text-primary text-2xl">Back to top</a>
			<!-- <a class="text-primary">Next Article</a> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { testBlog } from '../../types/testblog';
import { type BlogHead, type Blog } from '../../types/blog';
import { generateClient } from 'aws-amplify/api';
import { downloadData } from 'aws-amplify/storage';
import * as queries from '../../src/graphql/queries';
import type { GetPostQueryVariables } from '~/src/API';

const route = useRoute();
const id = ref(route.params.id);

const api = generateClient({
	authMode: 'iam',
});

const getBlogMeta = async (): Promise<BlogHead> => {
	const blogDetails: GetPostQueryVariables = { id: id.value as string };
	const { data, errors } = await api.graphql({ query: queries.getPost, variables: blogDetails });
	if (errors || !data?.getPost) {
		console.error(errors);
		return {
			title: 'Error Requesting Blog',
			description: 'Error Requesting Blog Description',
			author: 'Error Requesting Blog Author',
			date: '1970-01-01T00:00:00.000Z',
			tags: ['Error Requesting Blog Tags'],
			picture: 'Error Requesting Blog Picture',
			id: id.value as string,
		};
	}

	return {
		title: data.getPost.title as string,
		description: data.getPost.description as string,
		author: data.getPost.authorName as string,
		date: data.getPost.createdAt as string,
		tags: data.getPost.tags as string[],
		picture: data.getPost.picture as string,
		id: data.getPost.id as string,
	};
};

const blogMeta = ref<BlogHead>(await getBlogMeta());

useHead({
	title: blogMeta.value.title,
	meta: [
		{ name: 'description', content: blogMeta.value.description },
		{ name: 'author', content: blogMeta.value.author },
		{ name: 'date', content: blogMeta.value.date },
		{ name: 'keywords', content: blogMeta.value.tags.join(', ') },
	],
	bodyAttrs: {
		class: 'test',
	},
});

const getBlogContent = async (): Promise<Blog> => {
	const blogItemKey = `${id.value}/blog.json`;
	const { result } = downloadData({
		key: blogItemKey,
		options: { accessLevel: 'guest' },
	});
	const { body } = await result.catch((err) => {
		console.error(err);
		return { body: null };
	});
	if (!body) {
		console.error('Error downloading blog content');
		return {
			head: blogMeta.value,
			body: [
				{
					type: 'heading',
					content: 'Error downloading blog content',
					size: 2,
				},
			],
		};
	}

	return await (JSON.parse(await body.text()) as Promise<Blog>);
};

const blog = ref<Blog>({
	head: blogMeta.value,
	body: [],
});

onMounted(async () => {
	blog.value = await getBlogContent();
	// blog.value = testBlog;
});
</script>
