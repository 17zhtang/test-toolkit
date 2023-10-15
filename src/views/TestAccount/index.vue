<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="账号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="环境">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top:15px">
      <el-button type="primary" icon="Plus">添加测试账号</el-button>
      <el-table border style="margin-top:15px">
        <el-table-column label="id" width="80px"></el-table-column>
        <el-table-column label="环境" width="80px"></el-table-column>
        <el-table-column label="账号" width="160px"></el-table-column>
        <el-table-column label="描述"></el-table-column>
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

</script>

<style scoped>

</style>