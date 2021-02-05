<template>
  <div class="content">
    <el-container style="height: 100vh; width: 100vw">
      <el-aside width="200px">
        <div class="logo-box">
          <el-image
            class="logo"
            :src="convertHttp('/images/logo.png')"
          ></el-image>
          <p>无偿献血管理系统</p>
        </div>
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          unique-opened
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <!-- <el-menu-item index="/home/about">选项1</el-menu-item> -->
              <el-menu-item index="/home/volunteer">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item>选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item>选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="tool-box">
            <Time></Time>
            <el-tooltip
              class="item"
              effect="loght"
              :content="username"
              placement="top-start"
              :visible-arrow="false"
            >
              <el-image
                class="avatarImg"
                :src="convertHttp(avatarURL)"
              ></el-image>
            </el-tooltip>

            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom i-label"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled style="color: #409eff">{{
                  username
                }}</el-dropdown-item>
                <el-dropdown-item @click.native="toHome">主页</el-dropdown-item>
                <el-dropdown-item @click.native="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Time from '@/components/Time.vue'
import convertHttp from '@/utils/convertHttp'
export default {
  components: {
    Time
  },
  data () {
    return {
      avatarURL: '',
      username: 'admin'
    }
  },
  mounted () {
    // console.log(this.$store.state)
    this.initialData()
  },
  methods: {
    convertHttp,
    // 从storage中获得数据，或者请求初始化数据的方法
    initialData () {
      this.avatarURL = window.localStorage.getItem('avatar')
      this.username = window.localStorage.getItem('username')
    },
    logout () {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.setItem('token', '')
        this.$router.push('/login')
        this.$successMsg('您已退出登录')
      }).catch(() => { })
    },
    toHome () {
      if (this.$route.path === '/home') {
        this.$infoMsg('您当前已在首页')
        return
      }
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.right-border {
  border-right: 1px solid #e6e6e6;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-main {
  background-color: #eef0f3;
}
.el-aside {
  // padding: 0 10px;
  padding-right: 10px;
}
.el-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 20px 10px 0px #e6e6e6;
}
.avatarImg {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin-left: 10px;
}
.el-dropdown-menu {
  margin-top: 30px;
}
ul {
  border: none;
}
.tool-box {
  height: 36px;
  // width: 36px;
  // margin-left: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.i-label {
  position: relative;
  top: 14px;
}
.logo-box {
  height: 60px;
  // background-color: #808080;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  .logo {
    height: 100%;
    width: 60px;
  }
  p {
    font-size: 14px;
  }
}
</style>