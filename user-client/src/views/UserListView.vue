<!-- UserListView.vue -->
<template>
  <br>
  <div class="container">
    <h1>전체 회원 조회</h1>
    <table class="table"> <!--bootstrap css-->
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in userList" v-bind:key="i" @click="goToUserInfo(user.user_id)">
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td v-text="user.user_gender" />
          <td v-text="user.join_date" />
        </tr>
      </tbody>
      <caption>Total: {{ count }}</caption> <!--computed에서 만든 property 사용-->
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userList: [] 
    }
  },
  computed: {
    count() {
      return this.userList.length
    }
  },
  // watch: {
  //   userList(newQuestion, oldQuestion) {
  //     console.log('이전: ', oldQuestion);
  //     // alert('데이터가 변경되었습니다');
  //     console.log('이후', newQuestion);
  //   }
  // },
  created() {
    //비동기작업(함수 자체는 비동기)
    this.getUserList(); 
  },
  methods: {
    //내부코드가 동기식으로 작업되는 거지 함수 자체는 비동기
    async getUserList() {                     
      let result = await axios.get('/api/users')
                        .catch(err => console.log(err));
      let list = result.data;
      this.userList = list;            
    },
    goToUserInfo(userId) { //컴포넌트 바꿔야 되니 라우터한테 요청
      this.$router.push({path: '/userInfo', query: { "userId": userId }}); //등록된 router 요청
      // this.$router.push({name: 'userInfo', query: { "userId": userId }});

    }
  }
};
</script>