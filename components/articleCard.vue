<template>
	<a :href="`articles/${content.id}`" class="w-80 h-fit m-4 rounded-xl bg-base-200 shadow-xl shadow-neutral flex flex-col items-center justify-start">
		<NuxtImg :src="content.picture" class="w-full max-h-48 rounded-t-xl"></NuxtImg>
        <div>
            <div class="flex w-full items-center justify-around">
                <p class="text-primary">{{ content.author }}</p>
                <p class="text-primary">{{ new Date(content.date).toDateString() }}</p>
            </div>
            <h1 class="text-xl font-sans font-semibold my-2 w-full text-center">{{ content.title }}</h1>
            <p class="text-base font-sans font-light my-2 w-full text-center">{{ truncatedDescription }}</p>
            <a :href="`articles/${content.id}`" class="btn btn-primary btn-link text-xl sm:text-2xl px-0 ring-0 text-center w-full">Read More</a>
        </div>
	</a>
</template>

<script setup lang="ts">
import { type BlogHead } from '~/types/blog';

const props = defineProps<{ content: BlogHead }>();
const content = ref(props.content);
const truncatedDescription = computed(() => {
    return content.value.description.slice(0, 100).concat('...');
});
</script>
