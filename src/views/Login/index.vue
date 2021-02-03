<template>
  <div class="content">
    <el-card :body-style="cardStyle" shadow="hover">
      <div class="title-box">
        <h3>无偿献血管理系统</h3>
        <p>使用用户名和密码登录</p>
      </div>

      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef"
        label-position="left"
        label-width="50px"
      >
        <el-form-item label="用户" prop="username">
          <el-input
            maxlength="20"
            type="text"
            placeholder="请输入用户名"
            size="mini"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            maxlength="20"
            placeholder="请输入密码"
            show-password
            type="password"
            size="mini"
            v-model="loginForm.password"
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
import Property from './js/property'
import Operation from './js/operation'
export default {
  mixins: [Property, Operation]

}
</script>

<style lang="scss" scoped src="./scss/index.scss">
</style>