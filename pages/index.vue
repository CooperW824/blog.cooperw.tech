<template>
	<div class="flex flex-col w-full h-fit items-center">
		<h1 class="text-4xl font-sans font-semibold">Cooper's Blog</h1>
		<p class="text-xl text-center font-sans font-light mb-4 w-11/12">
			A blog about software development, technology, and life.
		</p>
		<div class="flex items-center w-full justify-around flex-wrap">
			<ArticleCard v-for="article in articles" :content="article" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BlogHead } from '~/types/blog';
import { generateClient, head } from 'aws-amplify/api';
import * as queries from '~/src/graphql/queries';
import type { PostsByTimeCreatedQueryVariables } from '~/src/API';
import { ModelSortDirection } from '~/src/API';

const api = generateClient({
	authMode: 'iam',
});

const articles = useArticles();
const nextToken = useNextToken();

const getArticles = async (): Promise<BlogHead[]> => {
	const articlesListDetails: PostsByTimeCreatedQueryVariables = {
		type: 'article',
		sortDirection: ModelSortDirection.DESC,
		limit: 20,
		filter: { published: { eq: true } },
	};

    if (nextToken.value) {
        articlesListDetails.nextToken = nextToken.value;
    }

	const { data, errors } = await api.graphql({
		query: queries.postsByTimeCreated,
		variables: articlesListDetails,
	});
	if (errors || !data?.postsByTimeCreated?.items) {
		console.error(errors);
		return [
			{
				title: 'Error Requesting Blog',
				description: 'Error Requesting Blog Description',
				author: 'Error Requesting Blog Author',
				date: '1970-01-01T00:00:00.000Z',
				tags: ['Error Requesting Blog Tags'],
				picture: 'Error Requesting Blog Picture',
				id: 'Error Requesting Blog ID',
			},
		];
	}

    nextToken.value = data.postsByTimeCreated.nextToken;

	return data.postsByTimeCreated.items.map((item) => ({
		title: item?.title as string,
		description: item?.description as string,
		author: item?.authorName as string,
		date: item?.createdAt as string,
		tags: item?.tags as string[],
		picture: item?.picture as string,
		id: item?.id as string,
	}));
};


onMounted(async () => {
	articles.value = await getArticles();
});

useHead({
    title: 'Cooper\'s Blog',
    meta: [
        { name: 'description', content: 'Welcome to my blog! A blog about software development, technology, and life.' },
        { name: 'date', content: new Date().toDateString() },
        { name: 'keywords', content: 'blog, software, development, technology, life' },
    ],
});
</script>
