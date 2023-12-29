<template>
	<div class="flex w-full items-center justify-center flex-col my-4">
		<NuxtImg :src="src" :alt="img.alt" class="w-full"></NuxtImg>
		<p class="mt-1">{{ img.caption }}</p>
	</div>
</template>

<script setup lang="ts">
import { type image } from '~/types/blog';
import { getUrl } from 'aws-amplify/storage';


/**
 * Some images might be stored with the article in S3, others might be from the web,
 * this function checks if the image is stored in S3 and returns the url for the image
 */
const getImage = async (): Promise<string> => {
	if (!props.content.s3) {
		return props.content.src;
	} else {
		// Gets the presigned url for the image
		const url = await getUrl({
			key: props.content.src,
			options: {
				accessLevel: 'guest',
				expiresIn: 60 * 5,
			},
		});

		return url.url.toString();
	}
};

const props = defineProps<{ content: image }>();
const img = ref(props.content);
const src = ref(await getImage());
</script>
