<template>
  <div class="logo_box">
    <svg-icon name="logo" width="80px" height="40px"></svg-icon>
    <h1 class="title">测试工具箱</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style scoped lang="scss">
.logo_box{
  display:inline-flex;
  justify-content:center;
  align-items: center;
  width:200px;
  height:60px;
}
.title{
  color:white;

}
</style>
