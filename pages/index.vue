<template>
    <div class="flex flex-col w-full h-fit items-center ">
        <h1 class="text-4xl font-sans font-semibold">Cooper's Blog</h1>
        <p class="text-xl text-center font-sans font-light mb-4 w-11/12">A blog about software development, technology, and life.</p>
        <div class="flex items-center w-full justify-around flex-wrap ">
            <ArticleCard v-for="article in articles" :content="article" />
        </div>
    </div>
</template>

<script setup lang="ts">

const articles = useArticles();

</script>