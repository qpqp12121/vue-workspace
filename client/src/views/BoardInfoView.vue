<template>
  <div>
    <br>
    <div class="container">
    <table class="table" style="border: 1px solid;">
          <tr>
            <th>번호</th>
            <td>{{ boardInfo.no }}</td>
            <th>작성일</th>
            <td>{{ createdDate }}</td>
            <th>이름</th>
            <td>{{ boardInfo.writer }}</td>
          </tr>
          <br>
          <tr>
            <th>제목</th>
            <td colspan="6">{{ boardInfo.title }}</td>
          </tr>
          <br>
          <tr>
            <td colspan="6">{{ boardInfo.content }}</td>
            </tr>
        </table>
        <button class="btn btn-warning col-4" v-on:click="goToUpdate(boardInfo.no)">수정</button>
    </div>

    </div>
      <CommentList />
    <div>

  </div>
</template>

<script>
import CommentList from './CommentListView.vue'
import axios from 'axios'

export default {
  data() {
    return {
      boardInfo: {},
    }
  },
  components: {
    CommentList
  },
  computed: {
    createdDate() {
      let result = null;
      if(this.boardInfo.created_date != null) {
        let created = new Date(this.boardInfo.created_date);
        let year = created.getFullYear();
        let month = ('0' + (created.getMonth() + 1)).slice(-2);
        let date = ('0' + created.getDate()).slice(-2);

        result = `${year}년 ${month}월 ${date}일`;
      }
      return result;
    }
  },
  created() {
    let searchNo = this.$route.query.boardNo;
    this.getBoardInfo(searchNo);
  },
  methods: {
    async getBoardInfo(boardNo) {
      let result = await axios.get('/api/boards/' + boardNo)
                    .catch(err => console.log(err));
      let info = result.data;
      this.boardInfo = info;              
    },
    goToUpdate(boardNo) { //컴포넌트 바꿔야 되니 라우터한테 요청
      this.$router.push({path: '/boardForm', query: { "boardNo": boardNo }});
    }
  }
  
}
</script>

<style>

</style>