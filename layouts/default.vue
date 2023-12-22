<template>
	<div class="flex w-full h-fit min-h-screen flex-col items-center">
		<Header></Header>
		<div class="flex flex-grow flex-shrink basis-auto h-fit justify-center ">
			<slot></slot>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
 
</script>
