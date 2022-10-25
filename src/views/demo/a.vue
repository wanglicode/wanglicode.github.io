<template>
  <div class="a-container">
    <el-form
      style="width:500px"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name" label-position="top">
        <div class="box">
          <div class="box1">
            <el-input v-model="ruleForm.name"></el-input>
          </div>
          <div class="box2"></div>
        </div>
      </el-form-item>
    </el-form>
    我是a页面
    <div>
      <button @click="jumpB">点击跳转</button>
    </div>
    <slot-name>
      我是第一个插槽
      <h4>你是谁</h4>
      <template slot="wl">
        <div>w我是有名的</div>
      </template>
    </slot-name>
  </div>
</template>

<script>
import slotName from "@/components/slotName.vue";
export default {
  name: "aPage",
  components: {
    slotName,
  },
  data() {
    return {
      arr: [{ a: 1 }, { b: 2 }],
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    // console.log('a页面:', process.env)
    this.$store.commit;
    console.log("a");
    this.$nextTick(() => {
      console.log("b");
    });
    console.log("c");
  },
  methods: {
    jumpB() {
      const newArr = JSON.stringify(this.arr);
      this.$router.push(`/b?arr=${newArr}`);
    },
  },
};
</script>

<style>
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.box1 {
  width: 300px;
}

.box2 {
  width: 150px;
  background-color: red;
}
</style>
