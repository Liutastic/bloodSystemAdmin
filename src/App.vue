<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      params: {
        testParams: 233
      }
    }
  },
  mounted () {
    // this.login({ username: 'ldw2333', password: '123456' })
  },
  methods: {
    ...mapMutations(['login'])
  }
}

</script>
