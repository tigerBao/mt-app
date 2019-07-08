<template>
  <div>
    <div class="m-istyle">
      <dl @mouseover="over" >
        <dt>有格调</dt>
        <dd v-for="item in navList" :key="item.dataType" :class="{active: kind == item.dataType}" :data-type="item.dataType">{{item.text}}</dd>
      </dl>
      <ul class="ibody">
        <li v-for="(item, index) in list" :key="index">
          <el-card :body-style="{ padding: '0px'}" shadow="never">
            <img :src="item.image" alt="" class="image">
            <div class="cbody">
              <div class="poi-info">
                <div class="title" :title="item.title">{{item.title}}</div>
                <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
                <div class="price-info">
                  <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{ item.price_info.current_price }}</span>
                  </span>
                  <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
                  <span class="sold bottom-right-info">{{item.address}}</span>
                </div>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
    <div class="m-istyle">
      <dl @mouseover="over" class="youhui">
        <dt>狠优惠</dt>
        <dd :class="{active: kind =='youAll'}" data-type="youAll">全部</dd>
        <dd :class="{active: kind =='youFood'}" data-type="youFood">美食</dd>
        <dd :class="{active: kind =='youSpa'}" data-type="youSpa">休闲</dd>
      </dl>
      <ul class="ibody">
        <li v-for="(item, index) in list2" :key="index" class="youWidth">
          <el-card :body-style="{ padding: '0px'}" shadow="never">
            <img :src="item.image" alt="" class="youImage">
            <div class="cbody">
              <div class="poi-info">
                <div class="title" :title="item.title">{{item.title}}</div>
                <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
                <div class="gaiqian"><p v-if="(item.change !== 'null')">{{item.change}}</p></div>
                <div class="price-info">
                  <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{ item.price_info.current_price }}</span>
                  </span>
                  <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
                  <span class="sold bottom-right-info">{{item.address}}</span>
                </div>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: 'all',
      navList: [
        {
          dataType: 'all',
          text: '全部'
        },
        {
          dataType: 'food',
          text: '约会聚餐'
        },
        {
          dataType: 'spa',
          text: '丽人SPA'
        },
        {
          dataType: 'moive',
          text: '电影演出'
        },
        {
          dataType: 'travel',
          text: '品质出游'
        }
      ],
      list: [
        {
          image: 'https://p1.meituan.net/poi/69a8fd4950e96c4728dfe9f585bdf19b60121.jpg@266w_150h_1e_1c',
          title: '伊贤居西部美食 （灯市口店）',
          sub_title: '双人套餐，提供免费WIFI',
          price_info: {
            current_price: 99,
            old_price: 134
          },
          address: '王府井/东单'
        },
        {
          image: 'https://p0.meituan.net/msmerchant/7fed2224f3b8ac93de4f5cd29d0331fe113913.jpg@460w_260h_1e_1c',
          title: 'kinglove金乐喜来登',
          sub_title: '8英寸欧式水果生日蛋糕-率先推出蛋糕店免费送货贴心服务，同城',
          price_info: {
            current_price: 78.8,
            old_price: 128
          },
          address: '梨园'
        },
        {
          image: 'https://p0.meituan.net/bbia/418f103cfab615d1a96e5fbdf850d1053180361.jpg@460w_260h_1e_1c',
          title: '丽晶酒店大堂吧',
          sub_title: '芒果柠檬蛋糕1个，约1镑，圆',
          price_info: {
            current_price: 188,
            old_price: 208
          },
          address: '王府井/东单'
        },
        {
          image: 'https://p0.meituan.net/msmerchant/2d4026fd852c8dda739170ad34d01e4f258385.jpg@460w_260h_1e_1c',
          title: '幸福西饼生日蛋糕 （银河SOHO店）',
          sub_title: '芒果拿破伦1个，约650克，方形，甜点下午茶，百分百新鲜制作，',
          price_info: {
            current_price: 109,
            old_price: 148
          },
          address: '朝阳门'
        },
        {
          image: 'https://p0.meituan.net/msmerchant/c3918b4cc45717329deb19eecd2b6f2d41538.jpg@460w_260h_1e_1c',
          title: '木棉小厨 （东华门大街店）',
          sub_title: '特色小龙虾套餐1份',
          price_info: {
            current_price: 298,
            old_price: 491
          },
          address: '王府井/东单'
        },
        {
          image: 'https://p0.meituan.net/msmerchant/5a90bec514a49bde7b21c6eab14ea1ae292498.jpg@460w_260h_1e_1c',
          title: '313羊庄.铁锅烀羊肉 （王府井店）',
          sub_title: '单人自助餐',
          price_info: {
            current_price: 128,
            old_price: 178
          },
          address: '王府井/东单'
        }
      ],
      list2: [
        {
          image: 'https://p1.meituan.net/poi/69a8fd4950e96c4728dfe9f585bdf19b60121.jpg@266w_150h_1e_1c',
          title: '魔影国际影城 （红居东街店）',
          sub_title: '千与千寻',
          change: '改签',
          price_info: {
            current_price: 58,
            old_price: 180
          },
          address: '已售4.3万'
        },
        {
          image: 'https://p0.meituan.net/deal/0226a49df1da3969745bc78e5c24648e1286236.jpg@0_474_5033_3051a%7C388h_640w_2e_90Q%7C266w_150h_1e_1c',
          title: 'Rodeo Restaurant&Bar',
          sub_title: '[团结湖/朝阳公园]一款特制鸡尾酒',
          change: 'null',
          price_info: {
            current_price: 1,
            old_price: 234
          },
          address: '已售67'
        },
        {
          image: 'https://p1.meituan.net/dpmerchantalbum/c8d1eb36f135d6e7f27ab48e3a068286396696.jpg@266w_150h_1e_1c',
          title: '爱之裳鲜花 （红居东街店）',
          sub_title: '[北京西站/六里桥]',
          change: 'null',
          price_info: {
            current_price: 25,
            old_price: 99999999
          },
          address: '已售570'
        },
        {
          image: 'https://p1.meituan.net/poi/69a8fd4950e96c4728dfe9f585bdf19b60121.jpg@266w_150h_1e_1c',
          title: '魔影国际影城 （金源店）',
          sub_title: '蜘蛛侠：英雄远征',
          change: '改签',
          price_info: {
            current_price: 48,
            old_price: 180
          },
          address: '已售9.6万'
        },
        {
          image: 'https://p1.meituan.net/deal/a49be868b2ee49173d7e423b762957ec922250.jpg@0_107_3543_2147a%7C388h_640w_2e_90Q%7C266w_150h_1e_1c',
          title: '井格重庆火锅',
          sub_title: '[19店通用]井格夏日畅饮劵1张',
          change: 'null',
          price_info: {
            current_price: 38,
            old_price: 4000
          },
          address: '已售566'
        },
        {
          image: 'https://p1.meituan.net/dpmerchantpic/d58146efca48d6239d9c44300aed2dde468618.jpg@266w_150h_1e_1c',
          title: '外教中国英语外教',
          sub_title: '[公主纹/万寿路]',
          change: 'null',
          price_info: {
            current_price: 1,
            old_price: 944666
          },
          address: '已售2'
        },
        {
          image: 'https://p1.meituan.net/wedding/283e6021c6506f19436d9547a04821b5147868.jpg@266w_150h_1e_1c',
          title: '德国高仪国际卫浴技术',
          sub_title: '[丽泽桥]',
          change: 'null',
          price_info: {
            current_price: 1,
            old_price: 500000
          },
          address: '已售2'
        },
        {
          image: 'https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@266w_150h_1e_1c',
          title: '耀莱成龙影城 （丽泽桥店）',
          sub_title: '蜘蛛侠：英雄远征',
          change: '改签',
          price_info: {
            current_price: 39,
            old_price: 5100
          },
          address: '已售9.6万'
        },
        {
          image: 'https://p0.meituan.net/joymerchant/f6dfd89ea61722fe09a81969ca41e62b-1186314115.jpg@266w_150h_1e_1c',
          title: '反弹工厂蹦床公园',
          sub_title: '[朝阳区]团建趣味拓展轰趴基地私人定制',
          change: 'null',
          price_info: {
            current_price: 39.9,
            old_price: 100
          },
          address: '已售0'
        },
        {
          image: 'https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@266w_150h_1e_1c',
          title: '恒业影城北京IMAX店',
          sub_title: '蜘蛛侠：英雄远征',
          change: '改签',
          price_info: {
            current_price: 39.9,
            old_price: 100
          },
          address: '已售9.6万'
        }
      ]
    }
  },
  methods: {
    over (e) {
      console.log(e)
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
