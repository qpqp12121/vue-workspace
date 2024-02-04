<template>
  <header>
    <h2>간단 게시판</h2>
    <p>Vue로 작성하는 게시판</p>
  </header>
  <p>{{ rootList }}</p>
  <p>{{ rootStr }}</p>
  <p>{{ rootData }}</p> <!--data 안 넘어와서 출력X(?)-->
  <p>===== Header =======</p>
</template>
<script>
export default {
  props: ['rootData'], //App.vue에서 전달X(?)
  inject: ['rootList', 'rootStr']
}
</script>