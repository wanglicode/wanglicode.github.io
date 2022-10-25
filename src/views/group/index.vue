<template>
  <div class="group-container">
    <div>处理group数据</div>
    <el-table
      :data="tableData"
      style="width: 100%;"
      >
       <el-table-column
        label="组"
        width="180">
        <template
        slot-scope="{row}"
        >
        <div :style="{'background-color': row.bgcColor}">{{ row.group }}</div>
        </template>
      </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return{
      tableData: [],
      reqData: [{group:12}, {group:32} ,{group:12}, {group:12},{group:132}, {group:2},{group:123}, {group:2}],
      colorEum: {},
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      // 重置颜色
      this.colorEum = {}
      // reqData模拟后台请求列表
      this.tableData = this.reqData.map(item => {
        // 已经生成颜色的值直接赋值
         if(this.colorEum[item.group]){
          item.bgcColor = this.colorEum[item.group]
         }else{
          // group里面没有产生颜色key,生成颜色key
          let randomColor = this.getRandomColor()
          while(Object.values(this.colorEum).includes(randomColor)) { // 这一步是为了防止,和其他组的key生成相同的颜色
          randomColor = this.getRandomColor()
          }
          this.colorEum[item.group]  = randomColor
          item.bgcColor = randomColor
         }

         return item
      })
    },
    // 获取随机颜色
    getRandomColor() {
      return '#' + Math.floor( Math.random() * 0xffffff ).toString(16)
    },
  }
}
</script>

<style>

</style>