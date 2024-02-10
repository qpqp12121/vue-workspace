<template>
  <br>
  <div class="containerCom">
    <p class="com">댓글 목록</p>
    <div v-if="commentList.length==0" class="no">댓글 없음</div>
    <table class="table">
      <template v-for="(comment, i) in commentList" :key="i">
        <tr>
          <td class="width">{{ comment.content }}<br>
            <span class="right">{{ comment.writer }} | {{ comment.created_date }}</span>
          </td>
        </tr>
      </template>
    </table>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      commentList: [],
      
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
.containerCom {
  border: 1px solid #ddd;
  width: 1296px;
  padding: 30px;
  margin-left: 68px;
}
.width {
  width: 1200px;
  text-align: left;
  border: 1px solid #ddd;
}
.right {
  float: right;
}
.com {
  text-align: left; 
  font-weight: bolder;
}
.no {
  border: 1px solid #ddd;
  height: 100px;
  padding-top: 30px;
}

</style>