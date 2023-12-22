<template>
	<div class="text-primary font-semibold flex w-fit h-fit items-center" :id="component.content.toLocaleLowerCase().replace(/ /g, '-')">
		<div v-if="component.size === 2" class="w-fit flex flex-col items-center justify-center">
			<h2 class="text-3xl mb-0.5">
				{{ component.content }}
			</h2>
			<hr class="h-[1px] bg-secondary my-1 w-full border-none rounded-sm" />
		</div>
		<h3 class="text-2xl" v-else-if="component.size === 3">
			{{ component.content }}
		</h3>
		<h4 class="text-xl" v-else-if="component.size === 4">
			{{ component.content }}
		</h4>
		<h5 class="text-lg" v-else-if="component.size === 5">
			{{ component.content }}
		</h5>
		<h6 class="text-md" v-else-if="component.size === 6">
			{{ component.content }}
		</h6>
		<button
			@click="copyLink"
			class="ml-2 w-8 h-8 text-primary hover:text-accent duration-300 ease-in-out active:w-10 active:h-10 active:text-secondary transition-all"
			aria-label="Copy Heading Share Link"
			title="Copy Heading Share Link"
		>
			<font-awesome-icon :icon="['fas', 'link']" class="w-full h-full" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { heading } from '~/types/blog';

const props = defineProps<{ content: heading }>();
const component = ref(props.content);

const copyLink = () => {
	let link = window.location.href;
	// remove any existing hash
	link = link.split('#')[0];
	const URI = encodeURI(component.value.content.toLocaleLowerCase().replace(/ /g, '-'));
	link += `#${URI}`;
	navigator.clipboard.writeText(link);
};
</script>
