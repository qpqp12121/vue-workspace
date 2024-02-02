<template>
  
  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" v-model="todo" id="myInput" placeholder="Title...">
    <!-- <span onclick="newElement()" class="addBtn">Add</span> -->
    <span @click="todoSave" class="addBtn">Add</span>
  </div>

</template>

<script>
export default {
  data() {
    return {
      todo: ''
    }
  },

  methods: {
    todoSave() {
      this.$emit('saveTodo', this.todo);
    }
  }


};
</script>