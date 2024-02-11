<template>
  <div class="container">
    <br>
    <h4>{{ title }}</h4>
    <br>
    <div class="all">
    <div class="row">
      <table class="table form">
        <tr>
          <th>No</th>
        </tr>
        <tr>
          <td><input class="form-control"  type="number" v-model="boardInfo.no" readonly></td>
        </tr>
        <tr>
          <th>제목</th>
        </tr>
        <tr>
          <td><input class="form-control" type="text" v-model="boardInfo.title"></td>
        </tr>
        <tr>
          <th>작성자</th>
        </tr>
        <tr>
          <td><input class="form-control" type="text" v-model="boardInfo.writer"></td>
        </tr>
        <tr>
          <th>내용</th>
        </tr>
        <tr>
          <td><textarea rows="10" cols="70" class="form-control" v-model="boardInfo.content" /></td>
        </tr>
        <tr>
          <th>작성일자</th>
        </tr>
        <tr>
          <td><input class="form-control" type="date" v-model="boardInfo.created_date"></td>
        </tr>
      </table>
    </div>
    
    <button class="left btn btn-primary" @click="saveInfo(searchNo)">저장</button>
    </div>

  </div>


</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      boardInfo: {
        no: null,
        title: '',
        writer: '',
        content: '',
        created_date: null
      },
      searchNo: null,
      isUpdated: false
    }
  },

  computed: {
    title() {
      return this.isUpdated? '게시글 수정' : '게시글 등록'
    }
  },

  created() {
    this.searchNo = this.$route.query.no;
    if(this.searchNo != null && this.searchNo != undefined) {
      this.getBoardInfo();
    }else {
      this.boardInfo.created_date = this.getDate('');
    }
  },

  methods: {

    //1.보낼 데이터 산출 - 버튼 1개(등록 / 수정)
    getSendInfo(no) {
      //method, url, data
      let method = '';
      let url = '';
      let data = null;

      if(no == null || no == undefined) { //등록
        method = 'post';
        url = `/api/boards`;
        data = {
          "param": {
            title: this.boardInfo.title,
            writer: this.boardInfo.writer,
            content: this.boardInfo.content,
            created_date: this.boardInfo.created_date
          }
        }
      } else { //수정
        method = 'put';
        url = `/api/boards/${no}`;
        data = {
          "param": {
            title: this.boardInfo.title,
            writer: this.boardInfo.writer,
            content: this.boardInfo.content,
            created_date: this.boardInfo.created_date
          }
        }
      }

      return {
        method: method,
        url,
        data
      }
    },

    //2.저장 ajax 요청
    saveInfo(no) {
      
      let info = this.getSendInfo(no); //데이터산출 함수 호출

      axios(info)
       .then(result => {
          let count = result.data.affectedRows;
          if (count == 0) {
            alert('저장되지 않았습니다. 내용을 확인해 주세요');
          } else {
            alert('저장되었습니다.');

            if(result.data.insertId > 0) {
              this.boardInfo.no = result.data.insertId;
            }

          }
       })
       .catch(err => console.log(err));
    },
    
    getDate(value) {
      if(value == null) return null;

      let date = value == ''? new Date() : new Date(value); //? 등록 : 수정 ?
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);

      return `${year}-${month}-${day}`;
    },

    //수정시 기본등록 정보 불러오기
    async getBoardInfo() {
      let result = await axios.get(`/api/boards/${this.searchNo}`)
                          .catch(err => console.log(err));
      let info = result.data;

      let newDate = this.getDate(info.created_date);
      info.created_date = newDate;

      this.boardInfo = info;
      this.isUpdated = true;
    }
  }
};
</script>

<style>
.form th {
  text-align: left;
}
/* .left {
  align-items: left;
} */
.all {
  padding: 50px;
  height: 700px;
  border: 1px solid #ccc;
}
</style>