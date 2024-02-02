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
  <button style="float:right;" v-on:click="boardSave">저장</button>
</template>

<script>
export default {
  data() {
    return {
      title: '', //사용자가 type="text" 입력한 값 value속성이 넘어오게
      content: ''
    };
  },

  methods: {
    boardSave() {
      this.$emit('saveBoard', this.title, this.content); //부모comp의 메서드 실행 요청
    }
  }
}
</script>
