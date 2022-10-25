<template>
  <div>
    <!-- demo -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    let menu = [
      {
        name: '一级菜单',
        type: 0,
        childern: [
          {
            name: '跳转页面',
            type: 0,
            childern: []
          },
          { name: '上级页面的按钮', type: 1, childern: [] }
        ]
      },
      {
        name: '商品管理',
        type: 0,
        childern: [
          {
            name: '跳转页面',
            type: 0,
            childern: []
          },
          { name: '上级页面的按钮', type: 1, childern: [] }
        ]
      }
    ]

    let str = 'sdfadfawl#/2222'
    console.log(str.indexOf('#5'))
    console.log('菜单处理前:', menu)
    console.log('菜单处理后:', this.filterMenu([...menu]))
  },
  methods: {
    filterMenu (menu) {
      let arr = []
      menu.forEach(element => {
        if (element.childern.length) {
          element.childern = this.filterMenu(element.childern)
          let index = element.childern.findIndex(item => {
            return item.type == 1
          })
          if (index !== -1) {
            let brr = element.childern.map(item => {
              return item
            })
            element.childern = []
            arr.push(element)
            arr = arr.concat(brr)
          } else {
            arr.push(element)
          }
        } else {
          arr.push(element)
        }
      })

      return arr
    }
  }
}
</script>

<style></style>
