<template>
  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" v-model="todo" id="myInput" placeholder="Title...">
    <span @click="saveTodo" class="addBtn">Add</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '' //사용자 입력값
    }
  },

  methods: {
    saveTodo() {
      this.$emit('save-todo', this.todo);
    }
  }
}
</script>