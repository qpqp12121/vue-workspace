<template>
  <div>
    <input type="text" v-model="todo">

    <!--1.push-->
    <button @click="addTodo">추가(push)</button>

    <!--2.교수님 splice-->
    <button @click="addTodo2">추가(splice)</button>
  </div>
  <div>
    <ul>
      <!-- 양식: 1 | todo1 -->
      <li v-for="todo in todoList" v-bind:key="todo.no">
        {{todo.no}} | {{todo.text}}
      <button v-on:click="deleteTodo(todo.no)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        todo: 'todo1', //{no: 3, text: 'todo3'}, //배열의 크기로 no 쓰기
        todoList: [{no: 1, text: 'todo1'}, {no: 2, text: 'todo2'}]
      };
    },

    methods: {
      //1.push
      addTodo() {
        this.todoList.push({
          // no: this.todoList.length + 1,
          no: this.todoList[this.todoList.length -1].no + 1,
          text: this.todo
        })
        this.todo = '';
       },
      
      //2.교수님 splice
      addTodo2() {
        let no, text;
        // no = this.todoList.length+1; //삭제했을 때 오류 생겨서 아래 수정
        no = this.todoList[this.todoList.length -1].no + 1; 
        text = this.todo;
        // this.todoList.splice(no-1, 0, {no,text}); //삭제했을 때 오류 생겨서 아래 수정
        //splice(몇번째자리,삭제할개수(추가만하면'0'), 추가할 값)
        this.todoList.splice(this.todoList.length, 0, {no, text}); 
        this.todo = '';
      },
      
      deleteTodo(no) {
        console.log('no: ', no)
        this.todoList = this.todoList.filter(todo => todo.no == no ? false : true); //filter된 배열 다시 this.todoList에 담아줘야 화면에서 refresh
      }
    }

  }
</script>