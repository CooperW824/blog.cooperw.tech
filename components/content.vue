<template>
	<ClientOnly>
		<Paragraph v-if="component.type === 'paragraph'" :content="(component as paragraph)" />
		<Heading v-if="component.type === 'heading'" :content="(component as heading)" />
		<Code v-if="component.type === 'code'" :content="(component as code)" />
		<Quote v-if="component.type === 'quote'" :content="(component as quote)" />
		<Image v-if="component.type === 'image'" :content="(component as image)" />
		<Embed v-if="component.type === 'embed'" :content="(component as embed)" />
		<List v-if="component.type === 'list'" :content="(component as list)" />
		<Link v-if="component.type === 'link'" :content="(component as link)" />
	</ClientOnly>
</template>

<script setup lang="ts">
import {
	type heading,
	type Content,
	type paragraph,
	type image,
	type embed,
	type code,
	type quote,
	type list,
	type link,
} from '../types/blog';
import Link from '../../components/link.vue';

const props = defineProps<{ content: Content }>();
const component = props.content;
</script>
