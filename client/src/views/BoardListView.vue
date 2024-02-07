<!-- BoardListView.vue -->
<template>
  <br>
  <div class="container">
    <table class="table"> <!--bootstrap css-->
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, i) in boardList" v-bind:key="i" @click="goToBoardInfo(board.no)">
          <td>{{ board.no }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
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
  computed: {
    
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
    goToBoardInfo(boardNo) { //컴포넌트 바꿔야 되니 라우터한테 요청
      this.$router.push({path: '/boardInfo', query: { "boardNo": boardNo }});
    }
  }
};
</script>