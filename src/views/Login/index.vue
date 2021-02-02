<template>
  <div class="content">
    <el-card :body-style="cardStyle" shadow="hover">
      <el-form label-position="left" label-width="50px">
        <el-form-item label="用户">
          <el-input
            maxlength="20"
            type="text"
            placeholder="请输入用户名"
            size="mini"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            maxlength="20"
            placeholder="请输入密码"
            show-password
            type="password"
            size="mini"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Operation from './js/operation'
import Property from './js/property'
export default {
  mixins: [Operation, Property],
}
</script>

<style lang="scss" scoped src="./scss/index.scss">
/deep/ .el-card__body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>