<template>
  <div>
    <input type="text" v-model="todo" /> 
    <button v-on:click="addTodoSplice">추가</button>
    <!-- <button v-on:click="addTodoPush">추가</button> -->
  </div>
  <div>
    <ul>
      <li v-for="thing in todoList" v-bind:key="thing.no">
        {{ thing.no }} | {{ thing.text }}
        <button @click="deleteTodo(thing.no)">삭제</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: '오늘 할 일', //사용자 입력값 저장하는 곳
      todoList: [ {no: 1, text: 'todo1'}, {no: 2, text: 'todo2'} ]
    };
  },
  methods: {
    addTodoSplice() {
      let no, text;
      no = this.todoList[this.todoList.length-1].no + 1;
      text = this.todo;
      //splice(몇번째자리,삭제할개수(추가만하면'0'), 추가할 값)
      this.todoList.splice(this.todoList.length, 0, {no, text});
      this.todo = ''
    },
    addTodoPush() {
      this.todoList.push( {no: this.todoList[this.todoList.length -1].no + 1, text: this.todo});
      this.todo = '';
    },

    deleteTodo(no) {
      //filter(function(ele, idx, array){ })
      this.todoList = this.todoList.filter(todo => todo.no == no? false : true);
    }
    //문제
    //아예 목록 사라지면 no읽을 수 없어 오류발생
    //할 일 추가시 삭제된 번호는 없어진 상태에서 추가 됨
  }
}
</script>