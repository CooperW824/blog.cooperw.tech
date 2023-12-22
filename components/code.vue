<template>
	<div class="flex flex-col w-full h-fit items-center justify-center">
		<div class="flex w-full h-8 bg-base-200 justify-between items-center rounded-t-lg px-4">
			<p class="">{{ content.language }}</p>
			<button
				@click="handleCopy"
                title="Copy code to clipboard"
				class="hover:text-accent w-4 h-4 active:w-5 active:h-5 active:text-secondary transition-all duration-300"
			>
				<font-awesome-icon :icon="['fas', 'copy']" class="w-full" />
			</button>
		</div>
		<div class="flex w-full h-fit bg-base-300 font-mono rounded-b-lg px-4 overflow-x-auto">
			<p class="whitespace-pre my-4">{{ content.content }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type code } from '../types/blog';

const props = defineProps<{ content: code }>();
const content = ref(props.content);

const handleCopy = () => {
	navigator.clipboard.writeText(content.value.content);
};
</script>
