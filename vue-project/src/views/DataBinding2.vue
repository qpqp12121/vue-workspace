<template>
  <!--v-model은 value의 값을 보여줌-->
  <select v-model="city">
    <option value="02">서울</option>
    <option value="03">부산</option>
    <option value="04">제주</option>
  </select>
  <p>{{city}}</p> <!--초기값에서 변경된 값 확인용(value값을 보여줌)-->

  <label>선택: 
    <input type="checkbox" true-value="yes" false-value="no" v-model="checked"/>
  </label>
  <p>선택값: {{checked}}</p>
  <label><input type="checkbox" v-model="checkItems" value="01">서울</label>
  <label><input type="checkbox" v-model="checkItems" value="02">부산</label>
  <label><input type="checkbox" v-model="checkItems" value="03">제주</label>
  <label><input type="checkbox" v-model="checkItems" value="04">대전</label>
  <p>선택값: {{checkItems}}</p>
  <!-- <p>선택값: {{orderItems}}</p> -->
</template>

<script>
export default { 
  data(){ 
    return {
      city: '04', // value속성의 값
      checked: 'yes', // 기본 초기값 true/false인데 위에서 속성으로 바꿈 yes/no
      checkItems: []  // ['01']
    }
  },
  //checkItems 정렬
  // computed: {
  //   orderItems(){  
  //     return this.checkItems.sort() //default의 속성에 접근하려면 this사용-배열정렬(가나다순)
  //   }
  // }
}
</script>