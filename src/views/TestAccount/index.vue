<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="账号">
          <el-input v-model="getTestAccountsFrom.account"></el-input>
        </el-form-item>
        <el-form-item label="环境">
          <el-select v-model="getTestAccountsFrom.environment">
            <el-option label="测试环境" value="1" />
            <el-option label="预发布环境" value="2" />
            <el-option label="生产环境" value="3" />
            <el-option label="其他" value="4" />
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="getTestAccountsFrom.detail"></el-input>
        </el-form-item>
        <el-form-item label="创建人">
          <el-input v-model="getTestAccountsFrom.creator"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 15px">
      <el-button type="primary" icon="Plus" @click="showDialog"
        >添加测试账号</el-button
      >
      <el-table border style="margin-top: 15px" :data="records">
        <el-table-column label="id" width="80px" prop="id"></el-table-column>
        <el-table-column label="环境" width="80px" prop="environment">
          <template #="{ row, index }">
            <span>{{ env[row.environment - 1] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="账号"
          width="230px"
          prop="account"
        ></el-table-column>
        <el-table-column label="描述" prop="detail"></el-table-column>
        <el-table-column
          label="创建人"
          width="100px"
          prop="creator"
        ></el-table-column>
        <el-table-column label="操作" width="250px">
          <template #="{ row, index }">
            <el-button type="primary">查看</el-button>
            <el-button type="success" @click="edit(row)">编辑</el-button>
            <el-popconfirm
              width="220"
              confirm-button-text="确定"
              cancel-button-text="取消"
              :title="`确定删除 ${row.account} ?`"
            >
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-pagination
          v-model:current-page="getTestAccountsFrom.currentPage"
          v-model:page-size="getTestAccountsFrom.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </el-card>
    <el-dialog v-model="visible" :title="addtestAccountForm.id?'编辑测试账号':'添加测试账号'" width="40%" align-center>
      <el-form>
        <el-form-item label="账号">
          <el-input
            v-model="addtestAccountForm.account"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="环境">
          <el-select v-model="addtestAccountForm.environment">
            <el-option label="测试环境" value="1" />
            <el-option label="预发布环境" value="2" />
            <el-option label="生产环境" value="3" />
            <el-option label="其他" value="4" />
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            type="textarea"
            v-model="addtestAccountForm.detail"
            :rows="4"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="addOrUpdateTestAccount"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { reactive, onMounted, ref } from "vue";
import { reqGetTestAccounts, reqAddTestAccount,reqSaveTestAccount } from "@/api/testAccount/index";
import type {
  getTestAccountsRquestData,
  testAccountRecord,
} from "@/api/testAccount/type";
let total = ref<number>(0);

let visible = ref<boolean>(false);
let getTestAccountsFrom = reactive<getTestAccountsRquestData>({
  account: null,
  environment: null,
  detail: null,
  creator: null,
  currentPage: 1,
  pageSize: 10,
});
let records = ref<testAccountRecord[]>();

let addtestAccountForm = reactive({
  id: null,
  account: null,
  environment: null,
  detail: null,
});
const env = ["测试", "预发布", "生产", "其他"];
const getTestAccounts = async () => {
  //发请求
  let result: any = await reqGetTestAccounts(getTestAccountsFrom);
  records.value = result.data.records;
  total.value = result.data.total;
};

const handleCurrentChange = () => {
  getTestAccounts();
};

const search = () => {
  getTestAccounts();
};

const handleSizeChange = () => {
  getTestAccountsFrom.currentPage = 1;
  getTestAccounts();
};

const showDialog = () => {
  visible.value = true;
  Object.assign(addtestAccountForm, {
    id: null,
    account: null,
    environment: null,
    detail: null,
  });
};

const addOrUpdateTestAccount = async () => {
	let result = null
	if(addtestAccountForm.id){
		result = await reqSaveTestAccount(addtestAccountForm)
	}else{
		result = await reqAddTestAccount(addtestAccountForm);
	}
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: addtestAccountForm.id?"更改成功":"添加成功",
    });
  } else {
    ElMessage({
      type: "error",
      message: addtestAccountForm.id?"更改失败":"添加失败",
    });
  }
  visible.value = false;
	getTestAccounts()
};

const edit = (row) =>{
	Object.assign(addtestAccountForm, {
    id: row.id,
    account: row.account,
    environment: row.environment,
    detail: row.detail,
  });
	visible.value = true
	
}

onMounted(() => {
  getTestAccounts();
});
</script>

<style scoped></style>
