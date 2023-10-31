<template>
	<div>
	<div>
		<el-input type="textarea" v-model="input" rows="4"> 
		</el-input>
	</div>
  <div style="margin:15px 0px">
    <el-button @click="tran" type="primary"> 转换</el-button>
  </div>
	<div>
		<el-input type="textarea"  v-model="json" rows="30"></el-input>
	</div>
</div>
</template>

<script setup lang="ts">
import formatJson from "@/utils/jsonFormat";
import {ref} from 'vue'
let input = ref<string>()
let json = ref()
const tran = () => {
  json.value = formatJson(input.value)
};
</script>

<style scoped></style>
