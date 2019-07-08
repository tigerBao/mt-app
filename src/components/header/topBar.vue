<template>
<el-row class="m-header m-header-topbar">
  <el-col :span = 14>
    <geo/>
  </el-col>
  <el-col :span = 10>
    <my-nav/>
  </el-col>
</el-row>

</template>

<script>
import Geo from './geo.vue'
import MyNav from './nav.vue'
export default {
  components: {
    Geo,
    MyNav
  }
}
</script>

<style lang='scss'>
  @import '@/assets/css/public/header/topbar.scss'
  </style>
