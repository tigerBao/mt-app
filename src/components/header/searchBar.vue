<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name: 'goods'}">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name: 'goods'}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link :to="{name: 'goods'}" v-for="(item,index) in suggestList" :key="index">{{ item }}</router-link>
          <!-- <a :href="{name: 'goods'}" v-for="(item,index) in suggestList" :key="index">
            <router-link :to="{name: 'goods'}"/>
            {{ item }}</a> -->
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created () {
    api.searchHotWords().then(res => {
      this.hotPlaceList = res.data.data
      this.suggestList = res.data.data
    })
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    input () {
      api.search().then(res => {
        let val = this.searchWord
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1
        })
      })
    }
  }
}
</script>

<style lang="scss">
// @import "@/assets/css/public/header/index.scss";
// @import "@/assets/css/public/header/search.scss";
</style>
