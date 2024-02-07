<!-- UserUpdateView.vue -->
<template>
  <div class="container">
    <br>
  <h1>회원정보 수정</h1>
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">No</th>
          <td class="text-center">
            <input class="form-control" type="number" v-model="userInfo.user_no" readonly>
          </td>
        </tr>
        <tr>  
          <th class="text-right table-primary">ID</th>
          <td class="text-center">
            <input class="form-control" type="text" v-model="userInfo.user_id" readonly>
          </td>
        </tr> 
        <tr> 
          <th class="text-right table-primary">PW</th>
          <td class="text-center">
            <input class="form-control" type="password" v-model="userInfo.user_pwd">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input class="form-control" type="text" v-model="userInfo.user_name">
          </td>
        </tr>
        <tr>  
          <th class="text-right table-primary">성별</th>
          <td>
            <input type="radio" value="M" v-model="userInfo.user_gender">남
            <input type="radio" value="F" v-model="userInfo.user_gender">여
            <!-- <input type="checkbox"  true-value="예" false-value="아니오" v-model="chkVal"> -->
          </td>
        </tr>
        <tr>  
          <th class="text-right table-primary">나이</th>
          <td class="text-center">
            <input class="form-control" type="number" v-model="userInfo.user_age" min="0" max="150">
          </td>
        </tr>
        <tr>  
          <th class="text-right table-primary">가입날짜</th>
          <td class="text-center">
            <input class="form-control" type="date" v-model="userInfo.join_date">
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" v-on:click="updateInfo()">저장</button>
    </div>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userInfo: {
        //없어도 상관은 없는데 헷갈리지 않게 명시함
        user_no: null,
        user_id:'',
        user_pwd: '',
        user_name: '',
        user_gender: null, //필수가 아니지만 선택하지 않으면 오류 떠서 null로 함 // ''
        user_age: null,
        join_date: null
      }
    }
  },
  created() {
    let searchNo = this.$route.query.userId;
    this.getUserInfo(searchNo);
  },
  methods: {
    async getUserInfo(userId) {
      let result = await axios.get('/api/users/' + userId)
                   .catch(err => console.log(err));
      let info = result.data;
      //*날짜 덮어쓰기
      let newDate = this.dateFormat(info.join_date);
      info.join_date = newDate;

      this.userInfo = info;             
    },
    dateFormat(value){
      let result = null;
      if(value != null) {
        let date = new Date(value);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth()+1)).slice(-2);
        let day = ('0'+ date.getDate()).slice(-2);
        result = `${year}-${month}-${day}`;
      }
      return result;
    },

    updateInfo() {
      if(!this.validation()) return;
      
      let data = this.getSendData();

      axios
      .put('/api/users/' + this.userInfo.user_id, data) //data 반드시 객체or배열 --axios 자동으로 json포맷으로 변환
      .then(result => {
        console.log(result.data);
        let changed = result.data.changedRows;
        if(changed == 0) {
          alert(`수정되지 않았습니다.\n메세지를 확인해 주세요\n${result.data.message}`)
        }else {
          alert(`수정되었습니다.`);
          // this.$router.push({ path: '/' });
        }
      })
      .catch(err => console.log(err))
    },
    validation() { //유효성 체크
      if(this.userInfo.user_pwd == '') {
        alert('비밀번호를 입력하세요');
        return false;
      }
      if(this.userInfo.user_name == '') {
        alert('이름 입력하세요');
        return false;
      }
      return true; //결과값을 전달해야 위에서 조건 처리가능
    },

    getSendData() {
      let obj = this.userInfo;

      let delData = ["user_no", "user_id"]; 
      let newObj = {};

      let isTargeted = null;    
      for( let field in obj ){ 
          isTargeted = false;
          for(let target of delData){
              if(field == target) {
                  isTargeted = true;
                  break;
              }            
          }
          if(!isTargeted){
              newObj[field] = obj[field];
          }
      }
      let sendData = {
        "param": newObj  //실제 보내고자 하는 데이터 형식으로 param으로 감싸서
      }
      return sendData;
    }
  },

}
</script>