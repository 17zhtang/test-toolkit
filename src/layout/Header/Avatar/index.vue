<template>
  <div>
    <el-popover
      placement="left"
      title="退出登录"
      :width="200"
      trigger="click"
      :visible="visible"
    >
      <div style="text-align: right; margin: 0">
        <el-button size="small" text @click="visible = false">取消</el-button>
        <el-button size="small" type="primary" @click="logout">确定</el-button>
      </div>
      <template #reference>
        <div class="avatar_box">
          <h1 class="username">{{useStore.username}}</h1>
          <img :src="useStore.avatar" class="avatar" @click="visible = true" />
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import useUserStore from "@/store/modules/user";
import { ElMessage } from 'element-plus'
let useStore = useUserStore();

let $router = useRouter();
//路由对象
let $route = useRoute();
const visible = ref(false);
let test = "https://hll-common.61info.cn/test/app-resource-ui/6541c9955aecc90001b4c7f7.png";

const logout = async () => {
  try {
    await useStore.userLogout();
    //判断路由中是否有query参数
    $router.push({ path: "/login" });
    ElMessage({
      type: "success",
      message: "退登成功",
    });
  } catch (error) {
    ElMessage({
      type: "error",
      message: (error as Error).message,
    });
  }
  // visible.value = false
};
</script>

<style scoped lang="scss">
.username {
  color: white;
  margin-right: 15px;
}
.avatar_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 40px;
  object-fit: cover;
}
</style>
