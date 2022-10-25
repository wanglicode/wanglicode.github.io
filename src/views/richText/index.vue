<template>
  <div class="hotzone-contianer">
    <div class="img-box">
      <hotZone :zonesInit="zones" :image="imgUrl"></hotZone>
    </div>
  </div>
</template>

<script>
import hotZone from './lib'
export default {
  name: 'htz',
  data () {
    return {
      imgUrl: require('./hotZoneimg.jpg'),
      zones: [
        {
          heightPer: 0.7,
          leftPer: 0.1,
          widthPer: 0.5,
          topPer: 0.1,
          url: 'https://www.vue3js.cn/'
        }
      ]
    }
  },
  created () {
    let Obj = {
      tempName: '', // 模板名称array
      tempType: '1', // 模板类型string('1':手机端,'2':电脑端)
      // tempList:array
      tempList: [
        {
          type: 0, // 模块类型:int(0:图片导航,1:商品模块,2:标题栏,3:文本模块,4:空白占位,5:分隔符,6:热区,7:视频组件)
          timeId: 1, // 时间戳:int(前端生成,便于编辑相应的模块)
          imgUrl: '', // 图片导航中图片地址
          linkMode: '1', // 图片链接方式string('1':h5链接,'2':小程序链接)
          h5Link: '', // h5链接地址string
          appId: '', // 小程序AppIDstring
          appUrl: '' // 小程序页面路径
        },
        {
          type: 1,
          timeId: 2
        }
      ]
    }
  },
  methods: {
    change () {}
  },
  components: {
    hotZone
  },
  mounted () {}
}
</script>

<style lang="less">
.hotzone-contianer {
  .img-box {
    width: 400px;
  }
}
</style>
