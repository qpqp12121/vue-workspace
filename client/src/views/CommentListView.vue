<template>
  <br>
  <div class="container">
    <p style="text-align: left;">댓글 목록</p>
    <table>
      <template v-for="(comment, i) in commentList" :key="i">
        <div style="border: 1px solid #ddd;">
        <tr>
          <td>{{ comment.content }}</td>
        </tr>
        <tr>
          <td>{{ comment.writer }} | {{ comment.created_date }}</td>
        </tr>
      </div> 
      </template>
    </table>  
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
      let result = await axios.get('/api/comments/' + boardNo)
                          .catch(err => console.log(err));
      this.commentList = result.data;
    },

  }
};

</script>

<style>
.container {
  border: 1px solid #ddd;
}


</style>