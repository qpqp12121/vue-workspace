<template>
  <div class="container comment">
    <p class="list">댓글 목록</p>
    <div v-if="commentList.length == 0" class="no">댓글 없음</div>
    <div class="box">
      <table class="table">
        <template v-for="(comment, i) in commentList" :key="i">
          <tr>
            <td>{{ comment.content }}</td>
          </tr>
          <tr>  
            <td class="right">{{ comment.writer }} | {{ comment.created_date }}</td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      commentList: []
    }
  },
  created() {
    let searchNo = this.$route.query.boardNo;
    this.getCommentList(searchNo);
  },
  methods: {
    async getCommentList(boardNo) {
      let result = await axios.get(`/api/comments/${boardNo}`);
      let list = result.data;
      this.commentList = list;
    }
  }

};

</script>

<style>
.comment {
  border: 1px solid #ccc;
  padding: 20px;
}
.list {
  text-align: left;
}
.no {
  border: 1px solid #ddd;
  height: 100px;
  padding-top: 30px;
}
.box td{
  height: 35px;
  padding: 10px 20px;
  border: 1px solid #ccc;  
}

.box tr:nth-child(2n+1) {
  text-align: left;
}
.box tr:nth-child(2n) {
  /* border-top: none; */
  text-align: right;
}
</style>