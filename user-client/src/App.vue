<template>
  <div>
    <Header />
    <router-view :key="$route.fullPath" /> <!--unique한 값 주려면 fullPath-->
  </div>
</template>

<script>
import Header from './layouts/HeaderComponent.vue'

export default {
  components: {
    Header
  }
}

</script>
