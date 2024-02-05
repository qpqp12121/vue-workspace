//mixins.js
//: mixin이 제어할 수 있는 건 공통적으로 사용하는 함수, lifecycle hook

export default {
  //component 공통 기능 (* $로 시작 -- 다른 comp과 충돌 방지 위해)
  methods: {
    $getToday(format) {
      let today = new Date();
      let year = today.getFullYear();
      let month = ('0' + (today.getMonth()+1)).slice(-2);
      let date = ('0' + today.getDate()).slice(-2);

      let result = format.replace('yyyy', year)
                         .replace('MM', month)
                         .replace('dd', date);
      return result;                   
    }
  },
  //각 lifecycle hook에 공통 진행할 코드 (하나의 페이지 열었지만 컴포넌트들)
  created() {
    console.log("Component Created");
  },
  mounted() {
    console.log("DOM mounted");
  }
};