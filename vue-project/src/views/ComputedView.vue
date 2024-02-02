<template>
  <div>
    <h1>{{ `${lastName} | ${firstName}` }}</h1>
    <h1>{{ `${fullName}`}}</h1>
  </div>
  <input type="text" v-model="firstName">
</template>

<script>
  export default {
    data() {
      return {
        firstName: 'kildong',
        lastName: 'Hong'
      }
    },

    //computed: 복합데이터 처리
    //둘 중 한 데이터만 바껴도 -> computed에서 화면 refresh 해 줌
    computed: { 
      fullName() {
        return `${this.lastName} | ${this.firstName}` 
      }
    },
    //watch: 변경이전, 이후
    watch: {
      firstName(curr, bef) {
        console.log(curr, bef);
      }
    }
  }
</script>