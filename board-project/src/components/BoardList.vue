<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>글번호</th>
          <th>글제목</th>
          <th>조회수</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in list" v-bind:key="board.no">
          <td>{{ board.no }}</td>
          <td v-on:click="showRead(board)">{{ board.title }}</td>
          <td>{{ board.view }}</td>
          <td><button v-on:click="deleteBoard(board.no)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <br>
    <button style="float: right;" v-on:click="showWrite">글쓰기</button>
    <br>
  </div>
</template>

<script>
export default {
  props: ['list'],

  methods: {
    //글삭제
    deleteBoard(no) {
      this.$emit('delete-board', no)
    },
    //글등록
    showWrite() {
      this.$emit('show-write')
    },
    //글상세
    showRead(board) {
      this.$emit('show-read', board);
    }
  }
};
</script>
