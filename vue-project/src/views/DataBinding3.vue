<template>
  <label>선택:<input type="checkbox" true-value="yes" false-value="no" v-model="checked"/></label>
  <p>선택값: {{checked}}</p>
  
  <!-- v-bind:attr="변수/js코드" 
       v-bind생략 가능 => :attr="변수/js코드"  *코드 길어지면 instance영역에 메서드로 만들어서 넣는 거 권장-->
  <label>text속성: <input type="text" v-bind:value="ival"></label>
  <p>값: {{ival}}</p>

  <img v-bind:src="imgSrc" :width="imgWidth">
  <br>
  <input type="text" v-model="textStr">
  <button v-bind:disabled="textStr == ''">Click</button> <!--값이 없으면 true=> disabled-->
</template>

<script>
export default { 
  //< view instance >
  //dom으로 화면 그리지 않고 지시자로 화면 그림 vue사용해서
  data(){ 
    return {
      checked: 'yes',
      ival: 'sample',
      checkVal: true,
      imgSrc: 'http://kr.vuejs.org/images/logo.png',
      imgWidth: '100px',
      isTrue: true,
      textStr: ''
    }
  }
}
</script>