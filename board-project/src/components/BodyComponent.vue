<template>
  <!--이 부분 데이터 가져와서 그리기-->
  <!-- 
  <ul id="myUL">
    <li>Hit the gym<span class="close">X</span></li>
    <li class="checked">Pay bills<span class="close">X</span></li>
    <li>Meet George<span class="close">X</span></li>
    <li>Buy eggs<span class="close">X</span></li>
    <li>Read a book<span class="close">X</span></li>
    <li>Organize office<span class="close">X</span></li>
  </ul> -->

  <ul id="myUL">
    <li v-for="thing in list" v-bind:key="thing.no" v-bind:class="{checked: thing.cancelFlag}" @click="cancelTodo(thing.no)">
      {{ thing.no }} | {{ thing.todo }}
      <span @click="deleteTodo(thing.no)" class="close">X</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list'], //todo-list하고 v-bind:todo-list 등 처리하니 오류생겼음 (?)
  
  methods: {
    //할일삭제
    deleteTodo(no) {
      this.$emit('delete-todo', no);
    },

    //완료 줄긋기
    cancelTodo(no) {
      this.$emit('cancel-todo', no);
    }
  },
}
</script>