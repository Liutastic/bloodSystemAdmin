<template>
  <div class="content">
    <el-container style="height: 100vh; width: 100vw">
      <el-aside width="200px">
        <div class="logo-box">平台logo占位符</div>
        <el-collapse>
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>
              清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
            </div>
            <div>
              帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
            </div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>
              用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
            </div>
            <div>
              结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-aside>
      <el-container>
        <el-header>
          <div class="tool-box">
            <Time></Time>
            <el-image :src="convertHttp(avatarURL)"></el-image>

            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom i-label"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
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
      avatarURL: ''
    }
  },
  mounted () {
    // console.log(this.$store.state)

  },
  methods: {
    convertHttp,
    // 从storage中获得数据，或者请求初始化数据的方法
    initialData () {
      this.avatarURL = window.localStorage.getItem('item')
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
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-aside {
  padding-left: 10px;
}
.el-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-image {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin-left: 10px;
}
.el-dropdown-menu {
  margin-top: 30px;
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
}
</style>