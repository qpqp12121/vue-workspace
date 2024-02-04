<template>
  <table id="list">
    <tr>
      <td style="width: 50px">글제목</td>
      <td>{{ detailed.title }}</td>
    </tr>
    <tr style="height: 200px;">
      <td colspan="2">{{ detailed.content }}</td>
    </tr>
  </table>
  <br>
  <button style="float: right;" v-on:click="showList">목록</button>
</template>

<script>
export default {
  props: ['detailed'], 
  methods: {
    showList() {
      this.$emit('show-list');
    }
  }
  
}
</script>