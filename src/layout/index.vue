<template>
	<div class="layout">
		<el-container class="container">
			<el-header class="header">
				<Header></Header>
			</el-header>
			<el-container>
				<el-aside style="background:#AEB6BF" width="200px">
					<el-scrollbar>
						<el-menu>
							<Menu :menuList="userStore.menuRoutes"></Menu>
						</el-menu>
					</el-scrollbar>
				</el-aside>
				<el-main>
					<MainContent></MainContent>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import MainContent from './MainContent/index.vue'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout {
	width: 100%;
	height: 100vh;

	.container {
		width: 100%;
		height: 100vh;

		.header {
			height: 60px;
			background: #138D75;
			padding: 0px;
		}
	}
}
</style>