<template>
	<div class="flex w-full h-screen flex-col items-center">
		<Header></Header>
		<div class="flex flex-grow flex-shrink basis-auto overflow-y-auto overflow-x-hidden justify-center ">
			<slot></slot>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
</script>
