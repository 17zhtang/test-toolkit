<template>
	<div class="container">
		<el-row>
			<el-col :span="13">
				<svg-icon style="margin:100px 100px" name="login" width="700px" height="700px"></svg-icon>
			</el-col>
			<el-col :span="6">
				<el-card class="box-card">
					<div>
						<h1 class='title'>测试工具箱</h1>
					</div>
					<div v-show="loginFlag">
					<el-form class="form" >
						<el-form-item label="账号" class="input">
							<el-input v-model="loginForm.account" placeholder="钉钉手机号"></el-input>
						</el-form-item>
						<el-form-item label="密码" class="input">
							<el-input v-model="loginForm.password" placeholder="密码"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" class="login_button" @click="login">登录</el-button>
						</el-form-item>
					</el-form>
				</div>
				<div v-show="!loginFlag">
					<el-form class="form" v-show="!loginFlag">
						<el-form-item label="账号" class="input">
							<el-input v-model="regitserForm.account" placeholder="钉钉手机号"></el-input>
						</el-form-item>
						<el-form-item label="姓名" class="input">
							<el-input v-model="regitserForm.username" placeholder="姓名"></el-input>
						</el-form-item>
						<el-form-item label="密码" class="input">
							<el-input v-model="regitserForm.password" placeholder="密码"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" class="login_button" @click="register">注册</el-button>
						</el-form-item>
					</el-form>
				</div>
					<div class="change_button">
						<h1 @click="loginFlag = !loginFlag">{{ loginFlag ? "去注册" : "去登录" }}</h1>
					</div>
				</el-card>
			</el-col>
			<el-col :span="5">1</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { register } from 'module';
let loginForm = reactive({ account: '', password: '' })
let regitserForm = reactive({account:'',username:'',password:''})
let $router = useRouter();
//路由对象
let $route = useRoute();
let useStore = useUserStore()
//登录和注册标志，默认是登录
let loginFlag = ref(true)
const login = async () => {
	try {
			await useStore.userLogin(loginForm)
			//判断路由中是否有query参数
			let redirect: any = $route.query.redirect
			$router.push({ path: redirect || '/' })
			ElMessage({
				type: 'success',
				message: '登录成功',
			})
		} catch (error) {
			ElMessage({
				type: 'error',
				message: (error as Error).message,
			})
		}
}

const register = async() =>{
	try {
			await useStore.userRegister(regitserForm)
			loginFlag.value = true
			ElMessage({
				type: 'success',
				message: '注册成功，请登录',
			})
		} catch (error) {
			ElMessage({
				type: 'error',
				message: (error as Error).message,
			})
		}
}
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100vh;
	background-size: cover;

	.title {
		text-align: center;
		font-size: 40px
	}

	.box-card {
		width: 100%;
		height: 50vh;
		margin-top: 20vh;

		.form {
			margin-top: 50px;

			.input {
				margin: 40px 0px
			}


		}

		.change_button {
			width: 100%;
			display: inline-flex;
			justify-content: center;
			color: #409EFF;
		}

		.login_button {
			width: 100%;
			margin-left: 44px;
			margin-right: 44px;
			margin-top: 60px
		}
	}

}
</style>