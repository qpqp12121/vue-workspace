<!-- UserListView.vue -->
<template>
  <div class="container">
    <h1>전체 회원 조회</h1>
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
  created() {
    //비동기작업(함수 자체는 비동기)
    this.getUserList(); 
  },
  methods: {
    //내부코드가 동기식으로 작업되는 거지 함수 자체는 비동기
    async getUserList() {
      let result = await axios.get('http://localhost:3000/users')
                        .catch(err => console.log(err));
      let list = result.data; //data 넘어오면 
      this.userList = list; //*property에 담을 수 있으니 동기식으로 진행되도록 async, await 사용                

    }
  }
};
</script>