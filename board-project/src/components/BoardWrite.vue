<template>
  <table id="list">
    <tr>
      <td>글제목</td>
      <td><input type="text" v-model="title"></td>
    </tr>
    <tr>
      <td colspan="2">
        <textarea v-model="content"></textarea>
      </td>
    </tr>
  </table>
  <br>
  <button style="float: left;" @click="showList">뒤로</button>
  <button style="float: right;" v-on:click="boardSave">저장</button>
</template>

<script>
export default {
  data() {
    return {
      title: '', //사용자 type="text" 입력한 값의 value속성 넘어오게
      content: '',
    }
  },
  methods: {
    boardSave() {
      this.$emit('save-board', this.title, this.content);
    },
    showList() {
      this.$emit('show-list');
    }
  }
  
}
</script>