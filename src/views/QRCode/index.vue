<template>
	<div class="qrcode_box">	
		<el-input type=textarea rows="10" v-model="req.content"></el-input>
		<el-button type="primary" @click="generate" style="width:120px;margin:20px 0px;">生成二维码</el-button>
		<el-image v-show="imgUrl" style="width: 400px; height: 400px" :src="imgUrl" fit="fill" />
	</div>
</template>

<script setup lang="ts">
import {reqGetQRCode} from '@/api/qrCode/index'
import {getQRCodeReq} from '@/api/qrCode/type'
import {ref,reactive} from 'vue'

let req = reactive<getQRCodeReq>({
	content:''
})
let imgUrl = ref()
const generate = async() =>{
	let result = await reqGetQRCode(req)
	console.log(result)
	imgUrl.value = window.URL.createObjectURL(result)
	console.log(imgUrl)
}

</script>

<style scoped lang=scss>
.qrcode_box{
	display:flex;
	flex-direction:column;

}
</style>