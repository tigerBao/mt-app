<template>
<div class="m-menu">
  <dl class="nav" @mouseleave="menuLeave">
    <dt>全部分类</dt>
    <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
      <i :class="item.name"></i>
      {{item.title}}
      <span class="arrow"></span>
    </dd>
  </dl>
  <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
    <template v-for="(item,index) in curDetail.children">
      <h4 :key="index">{{item.title}}</h4>
      <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
    </template>
  </div>
</div>
</template>

<script>
// import api from '@/api/index.js'
export default {
  data () {
    return {
      curDetail: null,
      menuList: [{
        title: '美食',
        icon: 'food',
        children: [{
          title: '美食',
          children: ['代金券', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '外卖',
        icon: 'takeout',
        children: [{
          title: '外卖',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '酒店',
        icon: 'hotel',
        children: [{
          title: '酒店星级',
          children: ['经典型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      },
      {
        title: '榛果民宿',
        icon: 'homestay',
        children: [{
          title: '榛果民宿',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '猫眼电影',
        icon: 'movie',
        children: [{
          title: '猫眼电影',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '机票/火车',
        icon: 'airport',
        children: [{
          title: '机票/火车',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '休闲娱乐/KTV',
        icon: 'ktv',
        children: [{
          title: '休闲娱乐/KTV',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '生活服务',
        icon: 'life',
        children: [{
          title: '生活服务',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '丽人/美发/医学美容',
        icon: 'hair',
        children: [{
          title: '丽人/美发/医学美容',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '结婚/婚纱摄影/婚宴',
        icon: 'marry',
        children: [{
          title: '结婚/婚纱摄影/婚宴',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '亲子/儿童乐园/幼教',
        icon: 'offspring',
        children: [{
          title: '亲子/儿童乐园/幼教',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '运动健身/健身中心',
        icon: 'sport',
        children: [{
          title: '运动健身/健身中心',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '家装/建材/家居',
        icon: 'furniture',
        children: [{
          title: '家装/建材/家居',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '学习培训/音乐培训',
        icon: 'study',
        children: [{
          title: '学习培训/音乐培训',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '医疗健康/宠物/爱车',
        icon: 'health',
        children: [{
          title: '医疗健康/宠物/爱车',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      },
      {
        title: '酒吧/密室跳脱',
        icon: 'bar',
        children: [{
          title: '酒吧/密室跳脱',
          children: ['美团外卖', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', '聚餐宴请', '烧烤烤肉']
        }]
      }
      ]
    }
  },
  created () {
    // api.menuList().then(res => {
    //   this.menuList = res.data.data
    // })
  },
  methods: {
    menuEnter (item) {
      this.curDetail = item
    },
    menuLeave () {
      var self = this
      this.timer = setTimeout(function () {
        self.curDetail = null
      }, 200)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>

<style lang="scss">

</style>
