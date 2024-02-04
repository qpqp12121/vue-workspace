<template>
  <footer>
    <p>===== Footer =======</p>
    <h4>2강 게시판</h4>
  </footer>

  <!--props로 html data 전달 받음-->
  <div v-html="data" />

  <!--slot
    : props 필요없이 데이터 넘겨받을 수 있음 (html코드 통째로)
    - 특정위치에 넣고 싶으면 name 지정하여 사용
    - 넘겨주는 곳에서도 v-slot:attr값 지정
      ex. <template v-slot:header>내용</template>   -->
  <slot name="header" />
  <slot></slot> <!--name X-->
  <slot name="footer" />

</template>

<script>
export default {
  props: ['data']
}
</script>