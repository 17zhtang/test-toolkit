<template>
  <div>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">{{
        item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
let $route = useRoute();

</script>

<style scoped lang="scss">
:deep(.el-breadcrumb .el-breadcrumb__inner) {
  color: white !important;
}
</style>