<template>
    <ClientOnly>
        <ArticleHeader/>
        <div v-for="component in testBlog.body">
            <Paragraph v-if="component.type === 'paragraph' "/>
            <Heading v-if="component.type === 'heading' "/>
            <Code v-if="component.type === 'code' "/>
            <Quote v-if="component.type === 'quote' "/>
            <Image v-if="component.type === 'image' "/>
            <Iframe v-if="component.type === 'iframe' "/>
            <Embed v-if="component.type === 'embed' "/>
            <List v-if="component.type === 'list' "/>
            <Link v-if="component.type === 'link' "/>
        </div>
    </ClientOnly>
</template>

<script
    setup
    lang="ts"
>
import { testBlog } from "../../types/testblog";
import type { Blog } from "../../types/blog";
import Link from "../../components/link.vue";

const route = useRoute();
const id = ref(route.params.id);
const blog = ref<Blog>(testBlog);



</script>