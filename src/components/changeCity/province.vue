<template>
<div>
  <span class="name">按省份选择:</span>
  <m-select
   :list="provinceList"
   title="省份"
   :value="province"
   :showWrapperActive="provinceActive"
   @change_active="changeProvinceActive"
   @change="changeProvince"
   className="province"
      />
  <m-select
  :list="cityList"
   title="城市"
   :value="city"
    :showWrapperActive="cityActive"
     @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      classNam e="city"
      />
  <span>直接搜索：</span>
  <el-select v-model="searchWord"  filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
    <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
  </el-select>
</div>

</template>

<script>
import MSelect from './select.vue'
import api from '@/api/index.js'
export default {
  data () {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      cityActive: false,
      provinceActive: false,
      searchList: ['山东', '甘肃', '黑龙江', '六安'],
      searchWord: '',
      loading: false,
      cityDisabled: true
    }
  },
  created () {
    api.getProvince().then(res => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName
        return item
      })
    })
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive (flag) {
      // console.log('changeProvinceActive', flag)
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (item) {
      // console.log(item, '222222')
      this.province = item.name
      this.cityDisabled = false
      // console.log(item.cityInfolist)
      this.cityList = item.cityInfoList || []
    },
    changeCity (item) {
      this.city = item.name
      console.log(item)
      item.nearCity = [{
        'id': 20000,
        'name': '阿城区1',
        'pinyin': 'achengqu',
        'acronym': 'gz'
      },
      {
        'id': 300000,
        'name': '双城1',
        'pinyin': 'shuangcheng',
        'acronym': 'sc'
      },
      {
        'id': 400000,
        'name': '巴彦县1',
        'pinyin': 'bayanxian',
        'acronym': 'byx'
      }]
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    },
    remoteMethod (val) {}
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss"
</style>
