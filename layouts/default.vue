<template>
	<div class="flex w-full h-fit min-h-screen flex-col">
		<Header></Header>
		<div class="flex flex-grow flex-shrink basis-auto overflow-y-auto justify-center w-full ">
			<slot></slot>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
 
</script>
