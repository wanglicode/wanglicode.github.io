<template>
  <!-- 邀请购买 -->
  <el-dialog
    title="邀请购买"
    :visible.sync="inviteBuyShow"
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
      <el-form-item label="营销文案:" prop="name1">
        <!-- 营销文案方式 -->
        <div class="marketing-box">
          <el-menu
            :default-active="ruleForm.name1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">文本</el-menu-item>
            <el-menu-item index="2">链接</el-menu-item>
            <el-menu-item index="3">文本加链接</el-menu-item>
          </el-menu>
        </div>
        <!-- 营销文案文本框 -->
        <div class="marketing-text">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="ruleForm.name2"
          >
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="邀请码种类:">
        <el-select
          style="width:100%"
          v-model="ruleForm.name3"
          placeholder="请选择活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发放路径:">
        <el-select
          style="width:100%"
          v-model="ruleForm.name3"
          placeholder="请选择发放路径"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邀请码数量:" prop="name1">
        <el-input v-model="ruleForm.name1"></el-input>
      </el-form-item>
      <el-form-item label="有效期:" prop="name1">
        <el-date-picker
          :default-time="['00:00:00', '23:59:59']"
          style="width:100%;minWidth:200px;"
          :picker-options="pickerOptions"
          class="search-datepicker"
          size="medium"
          :clearable="false"
          v-model="time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          align="right"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="生成渠道:" prop="name1">
        <el-button style="width:100%" type="primary" size="mini"
          >设置渠道</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'inviteBuy',
  props: ['inviteBuyShow'],
  data () {
    return {
      // 邀请购买的表单
      ruleForm: {
        // 营销文案
        name1: '1',
        // 营销文案输入文本
        name2: '',
        // 邀请码种类
        name3: '',
        // 发放路径
        name4: '',
        // 邀请码数量
        name5: '',
        // 生效渠道
        name6: ''
      },
      // 有效期
      time: '',
      pickerOptions: {
        // 时间格式
        disabledDate (time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24
        }
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
    },

    // 营销文案选中回调
    handleSelect (key) {
      this.ruleForm.name1 = key
    }
  }
}
</script>

<style scoped lang="less">
// 营销文案
.marketing-text {
  margin-top: 10px;
}
</style>
