<template>
  <div class="m-header">
    <el-row>
      <top-bar></top-bar>
    </el-row>
    <el-row>
      <search-bar></search-bar>
    </el-row>
  </div>
</template>

<script>
import TopBar from './topBar.vue'
import SearchBar from './searchBar.vue'
export default {
  components: {
    TopBar,
    SearchBar
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>
