<template>
  <div class="day1-container">
    <vue2-org-tree
      :data="data"
      label-class-name="labelClassName"
      collapsable
      :horizontal="true"
      @on-expand="onExpand"
      @on-node-click="NodeClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        id: 0,
        label: "XXX科技有限公司",
        aa: '33',
        expand: true,
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端",
              },
              {
                id: 6,
                label: "研发-后端",
              },
              {
                id: 9,
                label: "UI设计",
              },
              {
                id: 10,
                label: "产品经理",
              },
            ],
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部",
              },
              {
                id: 8,
                label: "销售二部",
              },
            ],
          },
          {
            id: 4,
            label: "财务部",
          },
          {
            id: 9,
            label: "HR人事",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    collapse(list) {
      var _this = this;
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false;
        }
        child.children && _this.collapse(child.children);
      });
    },
    NodeClick(e,data){
    console.log(e)
    console.log('样式--', e.target.style.color = 'red')
    // e 为 event
    console.log(data)
    // 当前项的所有详情 如：id label children
}
  },
};
</script>

<style lang="less">
.day1-container {
  padding: 20px;
}

.labelClassName {
  background-color: orange;
  color: #fff;
  // padding: 10px;
  // width: 200px;

  &:hover {
    cursor: pointer;
  }
}
</style>
