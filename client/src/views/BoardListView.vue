<template>
  <div class="container">
    <table class="table list-center">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, i) in boardList" :key="i" @click="goToBoardInfo(board.no)">
          <td>{{ board.no }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ createdDate(board.created_date) }}</td>
          <td>{{ board.comment_cnt }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      boardList: []
    }
  },
  created() {
    this.getBoardList();
  },
  methods: {
    async getBoardList() {
      let result = await axios.get('/api/boards')
                          .catch(err => console.log(err));
      let list = result.data;
      this.boardList = list;                    
    },
    createdDate(createdDate) {
      let result = null;
      if(createdDate != null){
        let created = new Date(createdDate);
        let year = created.getFullYear();
        let month = ('0' + (created.getMonth() + 1)).slice(-2);
        let date = ('0' + created.getDate()).slice(-2);

        result = `${year}년 ${month}월 ${date}일`
      }  
      return result;
    },
    goToBoardInfo(boardNo) {
      this.$router.push({ path: '/boardInfo', query: { boardNo } });
    }
  }
}
</script>

<style>
.list-center {
  text-align: center;
}
</style>
