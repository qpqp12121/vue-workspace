<template>
  <nav>
    <h1>{{ getToday }}</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/board">게시판</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link to="/store">Store</router-link>
  </nav>
  <router-view/>
</template>

<script>
  // import mix from '../src/mixins.js'

  export default {
    data() {
      return {
        rootData: 'hello' //HeaderComponent.vue로 전달X(?)
      }
    },
    provide() {
      return {
        rootList:  '\\ ( \' o \' ) /',
        rootStr: 'GoGo'
      }
    },
    // mixins: [mix], //여기에 import해서 사용도 가능(컴포넌트별로 할 경우) - 파일로 만든 건 전역
    computed: {
      getToday() {
        return this.$getToday('yyyy/MM/dd'); //$원래는 숨겨진 option의미하는데 이거는 무관 - mixin이 가지고 있는 거임
        //공통 사용 함수는 mixin이 가지고 있어 여기서 불러 옴
      }
    },
    // mounted() { //mixins.js테스트때 명확하게 보려고
    //   console.log('App.vue mounted');
    // }
  }
</script>

<style>
@import url("../src/assets/style.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
