<template>
  <div class="box">
    <div>
      <Logo></Logo>
    </div>
    <div class="right">
      <Breadcrumb></Breadcrumb>
      <Avatar></Avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import Avatar from './Avatar/index.vue'
</script>

<style scoped lang="scss">
.box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width:100%;
  .right {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 200px);
  }


}
</style>