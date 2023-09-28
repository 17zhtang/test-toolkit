<template>
	<div class="layout">
		<el-container class="container">
			<el-header class="header" style="background:#138D75">Header</el-header>
			<el-container>
				<el-aside style="background:#AEB6BF" width="200px">Aside</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout {
	width: 100%;
	height: 100vh;

	.container {
		width: 100%;
		height: 100vh;
		.header{
			height:80px
		}
	}
}
</style>