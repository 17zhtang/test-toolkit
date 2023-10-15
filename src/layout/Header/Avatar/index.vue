<template>
  <div>
    <el-popover placement="left" title="退出登录" :width="200" trigger="click" :visible="visible">
      <div style="text-align: right; margin: 0">
        <el-button size="small" text @click="visible = false">取消</el-button>
        <el-button size="small" type="primary" @click="visible = false">确定</el-button>
      </div>
      <template #reference>
        <div class="avatar_box">
          <h1 class="username">admin</h1>
          <img :src="test" class="avatar" @click="visible=true">
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
let test = 'src/assets/images/test.jpg'
</script>

<style scoped lang="scss">
.username{
  color: white;
  margin-right: 15px;
}
.avatar_box{
  display: flex;
  justify-content:center;
  align-items:center;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 40px;
  object-fit:cover;
}
</style>