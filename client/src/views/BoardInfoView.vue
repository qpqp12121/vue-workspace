<template>
  <div id="info" class="container">
    <br>
    <table class="table form-center">
      <tr class="first">
        <th>번호</th>
        <td>{{ boardInfo.no }}</td>
        <th colspan="2">작성일</th>
        <td colspan="2">{{ createdDate }}</td>
        <th colspan="2">이름</th>
        <td colspan="2">{{ boardInfo.writer }}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td colspan="8" class="title">{{ boardInfo.title }}</td>
      </tr>
      <tr>
        <td colspan="9" class="content">{{ boardInfo.content }}</td>
      </tr>
    </table>
  
    <div class="btn-center">
      <button class="btn btn-secondary" @click="goToUpdate(boardInfo.no)">수정</button>
    </div>  
  </div>
  <br>
  <Comment />

</template>

<script>
import axios from 'axios'
import Comment from './CommentView.vue'

export default {
  components: {
    Comment
  },
  data() {
    return {
      boardInfo: {}
    }
  },
  created() {
    let searchNo = this.$route.query.boardNo;
    this.getBoardInfo(searchNo);
  },
  computed: {
    createdDate() {
      let created = new Date(this.boardInfo.created_date);
      let year = created.getFullYear();
      let month = ('0' + (created.getMonth() + 1)).slice(-2);
      let date = ('0' + created.getDate()).slice(-2);

      return `${year}년 ${month}월 ${date}일`
    }
  },
  methods: {
    async getBoardInfo(boardNo) {
      let result = await axios.get('/api/boards/' + boardNo)
                          .catch(err => console.log(err));
      this.boardInfo = result.data;                    
    },
    goToUpdate(no) {
      this.$router.push({ path: '/boardForm', query: {no}});
    }
  }
}
</script>

<style>
#info th, #info td{
  border: 1px solid #ccc;
}
#info th {
  background-color: rgb(227, 245, 252);
}
#info {
  margin-top: 10px;
}
.first {
  height: 35px;
}
.title {
  text-align: left;
  padding-left: 10px;
  height: 45px;
}
.form-center {
  text-align: center;
}
.content {
  vertical-align: top;
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
  height: 300px;
}
.btn-center {
  text-align: center;
}

</style>