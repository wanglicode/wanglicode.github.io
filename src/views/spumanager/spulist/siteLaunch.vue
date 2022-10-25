<template>
  <!-- 站外投放 -->
  <el-dialog
    title="站外投放"
    :visible.sync="siteLaunchShow"
    width="40%"
    :before-close="handleClose"
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="目标网页:">
        <el-input v-model="ruleForm.detailUrl"></el-input> </el-form-item
      ><el-form-item label="图片地址:">
        <el-input v-model="ruleForm.imageUrl"></el-input>
      </el-form-item>
      <el-form-item label="渠道库存:">
        <el-input v-model="ruleForm.stock"></el-input>
      </el-form-item>
      <el-form-item label="Google分类:">
        <el-select v-model="ruleForm.googleCate" placeholder="请选择活动区域">
          <el-option label="我是Google分类" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="GTIN编码:">
        <el-input v-model="ruleForm.gtinCode"></el-input>
      </el-form-item>
      <el-form-item label="佣金比例:">
        <el-input v-model="ruleForm.commissionRate"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'siteLaunch',
  props: ['siteLaunchShow'],
  data () {
    return {
      // 站外投放的表单
      ruleForm: {
        detailUrl: '', // 目标网页
        imageUrl: '', // 图片地址
        stock: '', // 渠道库存
        googleCate: '0', // 谷歌分类
        gtinCode: '', // GTIN编码
        commissionRate: '', // 佣金比例
        skuCode: '' // 商品的skuCode
      },
      rules: {
        name1: [{ required: true, message: '请选择营销方式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 关闭邀请购买的弹窗
    handleClose () {
      this.$emit('closeShow', false)
    }
  }
}
</script>

<style></style>
