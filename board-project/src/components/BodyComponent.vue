<template>
  
  <!--이 부분 나중에 데이터를 가져와서 그려야 됨-->
  <!-- <ul id="myUL">
    <li>Hit the gym<span class="close">X</span></li>
    <li class="checked">Pay bills<span class="close">X</span></li>
    <li>Meet George<span class="close">X</span></li>
    <li>Buy eggs<span class="close">X</span></li>
    <li>Read a book<span class="close">X</span></li>
    <li>Organize office<span class="close">X</span></li>
  </ul> -->
  <!--  -->
  <ul id="myUL">
    <li v-for="thing in list" v-bind:key="thing.no">
      {{ thing.no }} | {{ thing.todo }} 
      <span class="close" @click="deleteTodo(thing.no)">X</span></li>
  </ul>

</template>

<script>
export default {
  //todoview에서 props로 값 받아서 위에서 looping 돌기
  //: 데이터 목록으로 나오게
  props: ['list'],
  
  methods: {
    //2.클릭한 글의 선 그어지게 //list class="checked"? 바꿔주는 event
    
    //3.해당 글번호 글 삭제//close click event
    deleteTodo(no) {
      this.$emit('delete-todo', no);
    }
  }
  


};
</script>