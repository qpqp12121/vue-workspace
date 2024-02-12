<template>
  <div class="container">
    <div class="container comment">
    <p>댓글 목록</p>
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
  border-radius: 5px;
  padding: 20px;
}
.no {
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
  padding-top: 30px;
  text-align: center;
}
.box td{
  height: 30px;
  padding: 10px 20px;
}

.box tr:nth-child(2n+1) {
  /* text-align: left; */
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

}
.box tr:nth-child(2n) {
  text-align: right;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>