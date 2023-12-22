<template>
	<ClientOnly>
		<Paragraph v-if="component.type === 'paragraph'" />
		<Heading v-if="component.type === 'heading'" />
		<Code v-if="component.type === 'code'" />
		<Quote v-if="component.type === 'quote'" />
		<Image v-if="component.type === 'image'" />
		<Iframe v-if="component.type === 'iframe'" />
		<Embed v-if="component.type === 'embed'" />
		<List v-if="component.type === 'list'" />
		<Link v-if="component.type === 'link'" />
	</ClientOnly>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Content } from '../types/blog';
import Link from '../../components/link.vue';


const props = defineProps<{content: Content}>();
const component = props.content;
</script>