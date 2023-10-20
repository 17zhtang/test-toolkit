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
      <el-table border style="margin-top: 15px" :data="records">
        <el-table-column label="id" width="80px" prop="id"></el-table-column>
        <el-table-column label="环境" width="80px" prop="environment"></el-table-column>
        <el-table-column label="账号" width="230px" prop="account"></el-table-column>
        <el-table-column label="描述"  prop="detail"></el-table-column>
        <el-table-column label="创建人" width="100px" prop="creator" ></el-table-column>
        <el-table-column label="操作" width="250px">
          <template #="{ row, index }">
            <el-button type="primary">查看</el-button>
            <el-button type="success">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
			<div style="margin-top:20px">
			<el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    />
	</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {reactive,onMounted,ref} from 'vue'
import { reqGetTestAccounts } from "@/api/testAccount/index"
import type {getTestAccountsRquestData,testAccountRecord} from "@/api/testAccount/type" 
let total = ref<number>(0)
let currentPage = ref<number>(1)
let pageSize = ref<number>(10)
let account = ref<string>('')
let environment = ref<number>(null)
let detail = ref<string>(null)
let creator = ref<string>(null)
let getTestAccountsFrom = reactive<getTestAccountsRquestData>({
	account: null,
  environment: null,
	detail:null,
	creator:null,
})
let records = ref<testAccountRecord[]>()

const getTestAccounts = async () => {
  //发请求
  let result: any = await reqGetTestAccounts(getTestAccountsFrom)
	records.value = result.data.records
};


onMounted(() => {
	getTestAccounts();
});


</script>

<style scoped></style>
