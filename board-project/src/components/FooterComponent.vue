<template>
  <footer>
    <h3>2강입니다</h3>
  </footer>
  <div v-html="data"></div>
  <slot name="header"></slot> <!--특정위치에 넣고 싶으면 name 지정해서(넘겨주는 곳에서도 attr값 지정해서)-->
  <slot></slot><!--html템플릿을 그대로 사용-->
  <slot name="footer"></slot>
</template>
<script>
  export default {
    props: ['data']
  }
</script>
