<template>
  <div class="container">
    <h3> {{ title }}</h3>
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">No</th>
          <td class="text-center">
            <input class="form-control" type="number" v-model="boardInfo.no" readonly>
          </td>
        </tr>
        <tr>  
          <th class="text-right table-primary">제목</th>
          <td class="text-center">
            <input class="form-control" type="text" v-model="boardInfo.title">
          </td>
        </tr> 
        <tr> 
          <th class="text-right table-primary">작성자</th>
          <td class="text-center">
            <input class="form-control" type="text" v-model="boardInfo.writer" v-bind:readonly="isUpdated">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">내용</th>
          <td class="text-center">
            <br>
            <textarea rows="5" cols="70" v-model="boardInfo.content" />
          </td>
        </tr>
        <tr>  
          <th class="text-right table-primary">작성일자</th>
          <td class="text-center">
            <input class="form-control" type="date" v-model="boardInfo.created_date">
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <!-- 첫번째 방법 -->
      <button class="btn btn-info" v-on:click="saveInfo(searchNo)">저장</button>
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
        title:'',
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
      return this.isUpdated ? '게시글 수정' : '게시글 등록'
    }
  },
  created() {
    this.searchNo = this.$route.query.boardNo;
    if(this.searchNo != null && this.searchNo != undefined) {
      this.getBoardInfo();
    }else {
      this.boardInfo.created_date = this.getDate('');
    }
    
  },
  methods: {
    async getBoardInfo() {
      let result = await axios.get(`/api/boards/${this.searchNo}`)
                          .catch(err => console.log(err));
      let info = result.data;
      
      let newDate = this.getDate(info.created_date);
      info.created_date = newDate;

      this.boardInfo = info;
      this.isUpdated = true; 
      this.updatedDate = false;
    },
    getDate(value) {
      if(value == null) return null;

        let date = value == '' ? new Date() : new Date(value);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);

        return `${year}-${month}-${day}`;
      },
      saveInfo(no) { //첫번째
      //1)보낼 데이터 산출
      let info = this.getSendInfo(no);
      //2)ajax
      axios(info)
      .then(result => {
        let count = result.data.affectedRosws;
        if(count == 0) {
          alert('저장되지 않았습니다. 내용을 확인해주세요');
        }else {
          alert('저장되었습니다');

          if(result.data.insertId > 0) {
           this.boardInfo.no = result.data.insertId;
          }
        }
      })
      .catch(err => console.log(err));
    },
    //저장
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
        };
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
        };
      }
      return {
        method,
        url,
        data
      }
    }
  }


};

</script>

<style>

</style>