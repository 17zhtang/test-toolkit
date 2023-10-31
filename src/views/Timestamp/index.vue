<template>
	<div>
		<el-date-picker
        v-model="datetime"
        type="datetime"
        placeholder="选择时间"
				value-format="X"
      />
			<Switch style="width:15px;height:15px;margin:0 10px"></Switch>
			<el-input v-model="datetime" style="width:150px" placeholder="时间戳"></el-input>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
let datetime = ref()
</script>

<style scoped>

</style>