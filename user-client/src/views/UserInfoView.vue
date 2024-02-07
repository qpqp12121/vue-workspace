<!-- UserInfoView.vue -->
<template>
  <div class="container">
    <h1>회원정보 조회</h1>
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">No</th>
          <td class="text-center">{{ userInfo.user_no }}</td>
        </tr>
        <tr>  
          <th class="text-right table-primary">ID</th>
          <td class="text-center">{{ userInfo.user_id }}</td>
        </tr> 
        <tr> 
          <th class="text-right table-primary">PW</th>
          <td class="text-center">{{ userInfo.user_pwd }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">{{ userInfo.user_name }}</td>
        </tr>
        <tr>  
          <th class="text-right table-primary">성별</th>
          <!-- <td>{{ userInfo.user_gender }}</td> -->
          <td class="text-center">{{ userGender }}</td>
        </tr>
        <tr>  
          <th class="text-right table-primary">나이</th>
          <td class="text-center">{{ userInfo.user_age }}</td>
        </tr>
        <tr>  
          <th class="text-right table-primary">가입날짜</th>
          <td class="text-center">{{ joinDate }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info col-4" @click="goToUpdate(userInfo.user_id)">수정</button>
      <router-link to="/" class="btn btn-success col-4">목록</router-link> <!--목록으로 돌아갈 땐 값 넘길 필요없으니 router-link사용-->
      <button class="btn btn-warning col-4" @click="deleteInfo(userInfo.user_id)">삭제</button> <!--페이지이동X axios 쓸 거-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userInfo: {},
    }
  },
  computed: { //등록과 수정일 땐 computed쓰지X? 생각해야 됨
    userGender() {
      let gender = this.userInfo.user_gender;
      let result = null;

      if (gender == 'M') {
        result = '남'
      } else if (gender == 'F') {
        result = '여'
      }
      return result;
    },

    //가입날짜(연월일)
    joinDate() {
      let result = null;
      if(this.userInfo.join_date != null) {
        let join = new Date(this.userInfo.join_date);
        let year = join.getFullYear();
        let month = ('0' + (join.getMonth() + 1)).slice(-2);
        let date = ('0' + join.getDate()).slice(-2);

        result = `${year}년 ${month}월 ${date}일`;
      }
      return result;
    }
  },
  created() { //query보낸 값 받는 건 created() hook에서 가능
    let searchNo = this.$route.query.userId; //query로 넘겨왔고 넘겨올 때 key명은 userId
    this.getUserInfo(searchNo);
  },
  methods: {
    async getUserInfo(userId) {
      // http://localhost:3000/users/admin 서버확인 (http://localhost:3000 --vue.config.js에 proxy 등록했으니)
      // app.get('/users/:id' -- 
      // /api/users/admin 
      let result = await axios.get('/api/users/' + userId) // `/api/users/${userId}`
                    .catch(err => console.log(err));
      let info = result.data;
      this.userInfo = info;
    },
    goToUpdate(userId) {
      //수정폼 component 호출
      // this.$router.push({path: '/userUpdate', query: {"userId": userId}}); //= query: {userId}
      this.$router.push({path: '/userForm', query: {"userId": userId}}); //= query: {userId}
    },

    deleteInfo(userId) {
      //서버에 해당 데이터 삭제
      axios
      .delete('/api/users/' + userId)
      .then(result => {
        if(result.data.affectedRows != 0 && result.data.changedRows == 0) { //동일 건 삭제하면 affectedRosws 0으로 반환 됨
          alert('삭제되었습니다');
          this.$router.push({ path: '/' });
        }else {
          alert(`삭제되지 않았습니다\n메세지를 확인해주세요\n${result.data.message}`);
        }
      })
      .catch(err => console.log(err));
    }


  }


};
</script>
