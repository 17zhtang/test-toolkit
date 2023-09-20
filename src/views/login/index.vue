<template>
	<div class="container">
		<el-row>
			<el-col :span="13">
			</el-col>
			<el-col :span="6">
				<el-card class="box-card">
					<div>
						<h1 class='title'>测试</h1>
					</div>
					<el-form class="form">
						<el-form-item  label="账号" class="input">
							<el-input v-model="loginForm.account"></el-input>
						</el-form-item>
						<el-form-item label="密码" class="input">
							<el-input v-model="loginForm.password"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" class="login_button" @click="login">登录</el-button>
						</el-form-item>
					</el-form>
				</el-card>
			</el-col>
			<el-col :span="5">1</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {reqLogin} from '@/api/user/index'
import {ElMessage} from 'element-plus'
let loginForm = reactive({account:'',password:''})


const login = async() =>{
	let result =await reqLogin(loginForm)
	console.log(result.code)

	if(result.code == 200){
		ElMessage({
			type:'success',
			message:'登录成功'
		})
	} else {
		ElMessage({
			type:'error',
			message:'登录失败'
		})
	}
}
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100vh;
	background: url('@/assets/images/background.jpg') no-repeat;
	background-size: cover;
	.title{
		text-align: center;
		font-size:40px
	}
	.box-card {
		width: 100%;
		height: 50vh;
		margin-top: 20vh;

		.form {
			margin-top: 50px;

			.input{
				margin:40px 0px
			}
		}

		.login_button {
			width: 100%;
			margin-left: 44px;
			margin-top:20px
		}
	}

}
</style>