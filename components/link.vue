<template>
	<a :href="content.href" class="text-primary hover:text-accent active:text-secondary flex text-2xl items-center justify-center ">
   <span class="underline">{{ content.content }}</span>
   <font-awesome-icon class="h-4 ml-2" :icon="['fas', 'arrow-up-right-from-square']" />
   </a>
</template>

<script setup lang="ts">
import { type link } from '../types/blog';

const props = defineProps<{ content: link }>();
const content = ref(props.content);
</script>
