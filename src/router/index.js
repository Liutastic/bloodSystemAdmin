import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Home from '../views/Home.vue'
import Login from '../views/Login/index.vue'
import About from '../views/About.vue'
import Volunteer from '../views/Volunteer/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/login'
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: 'about', component: About },
      { path: 'volunteer', component: Volunteer }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * 挂载路由导航守卫
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 访问登录页面的时候直接放行
  if (to.path === '/login') return next()

  // 访问其他页面时先检查token是否存在
  if (!window.localStorage.getItem('token')) {
    alert('请登录!')
    return next('/login')
  }

  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
