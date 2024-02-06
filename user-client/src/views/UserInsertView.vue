<!-- UserInsertView.vue -->
<template>
  <div class="container">
    <br>
  <h1>회원정보 등록</h1>
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
            <input class="form-control" type="text" v-model="userInfo.user_id">
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
            <input class="form-control" type="date" v-model="userInfo.join_date"> <!--yyyy-MM-dd type을 date로 하면 이 형식으로 넘어 감-->
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" v-on:click="insertInfo()">저장</button>
    </div>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // chkVal: '아니오',
      userInfo: {
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
  methods: {
    insertInfo() {
      //1.유효성 체크
      if(!this.validation()) return;
      //2.ajax
      //2-1) 실제 보낼 데이터 선별
      let data = this.getSendData();
      
      //2-2) axios를 이용해 ajax 실행
      //http://localhost:3000/users
      axios
      .post('/api/users', data) //data 반드시 객체or배열 --axios 자동으로 json포맷으로 변환
      .then(result => {
        //3.결과처리
        // console.log(result);
        let user_no = result.data.insertId;
        if(user_no == 0) {
          alert(`등록되지 않았습니다.\n메세지를 확인해 주세요\n${result.data.message}`)
        }else {
          alert(`정상적으로 등록되었습니다.`);
          this.userInfo.user_no = user_no; //input비어있던 값 추가시켜 주려고
        }
      })
      .catch(err => console.log(err))
    },
    validation() { //유효성 체크
      if(this.userInfo.user_id == '') {
        alert('id를 입력하세요');
        return false;
      } 
      if(this.userInfo.user_pwd == '') {
        alert('pw를 입력하세요');
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

      let delData = ["user_no"]; //user_no은 크게 의미있지 않아 안 넣어도 되긴 함
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