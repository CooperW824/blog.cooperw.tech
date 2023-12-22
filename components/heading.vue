<template>
	<div class="text-primary font-semibold">
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
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { heading } from '~/types/blog';

const props = defineProps<{ content: heading }>();
const component = ref(props.content);
</script>
