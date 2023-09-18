<template>
	<div>
		<h1>测试</h1>
	</div>
</template>

<script setup lang="ts">
let api = import.meta.env
console.log(api)	
</script>

<style scoped lang="scss">
div {
	h1 {
		color: $base-color
	}
}
</style>