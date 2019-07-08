<template>
  <div class="layout-default">
    <el-container>
      <el-header height>
        <my-header></my-header>
      </el-header>
      <el-main>
       <router-view />
      </el-main>
      <el-footer >
        <my-footer height />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/footer.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss'
</style>
