<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="账号">
          <el-input v-model="account"></el-input>
        </el-form-item>
        <el-form-item label="环境">
          <el-input v-model="environment"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input  v-model="detail"></el-input>
        </el-form-item>
				<el-form-item label="创建人">
          <el-input v-model="creator"></el-input>
        </el-form-item>
				<el-form-item >
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 15px">
      <el-button type="primary" icon="Plus">添加测试账号</el-button>
      <el-table border style="margin-top: 15px">
        <el-table-column label="id" width="80px"></el-table-column>
        <el-table-column label="环境" width="80px"></el-table-column>
        <el-table-column label="账号" width="230px"></el-table-column>
        <el-table-column label="描述" width="800px"></el-table-column>
        <el-table-column label="创建人"></el-table-column>
        <el-table-column label="操作">
          <template #="{ row, index }">
            <el-button type="private">查看</el-button>
            <el-button type="success">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {reactive,onMounted,ref} from 'vue'
import { reqGetTestAccounts } from "@/api/testAccount/index"
import type {getTestAccountsRquestData} from "@/api/testAccount/type" 
let account = ref<string>('')
let environment = ref<number>(null)
let detail = ref<string>(null)
let creator = ref<string>(null)
let getTestAccountsFrom = reactive<getTestAccountsRquestData>({
	account: '123',
  environment: null,
	detail:null,
	creator:null,
})


const getTestAccounts = async () => {
  //发请求
  let result: any = await reqGetTestAccounts(getTestAccountsFrom);
	console.log(result)
};


onMounted(() => {
	getTestAccounts();
});
</script>

<style scoped></style>
