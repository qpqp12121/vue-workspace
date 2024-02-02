<template>
  <h3>Hello, {{msg}}</h3> <!--객체 안에 있는 값을 불러오겠다 mustache구문
                            '{{ 데이터 }}' 형태로 데이터/함수의 값을 출력(텍스트형식으로)-->
  
  <!-- v-html: mustache구문 텍스트형식으로 출력되는데 이 지시자 사용하면 html형식 적용되어 그려지도록 해 줌 v- XXX : view지시자-->
  <div>{{htmlStr}}</div> <!-- == <div v-text="htmlStr"></div> -->
  <div v-html="htmlStr"></div>

  <!--v-model: form태그 안의 태그들에 이 지시자 사용해 사용자의 값 넣거나 변경시킬 수 있음-->
  <input type="text" v-model="vmodel" /> 
  <p>{{vmodel}}</p>

  <textarea cols="30" rows="10" v-model="message"></textarea>
  <!--DataBinding2 에 이어서-->
</template>

<script>
//데이터 영역 js로
export default { 
  //data속성 안에 페이지 정보들을 정의
  data(){ 
    return {
      msg: 'World', //변수 msg에 담겨진 값 template에 넣어주면 보여짐
      htmlStr: '<p style="color: red;">Hello</p>',
      vmodel: 'Nice', //위 input태그로 v-model 지시자 사용하여 vmodel변수의 값 바꿔줄 수 있다
      message: '여러 라인의 값을 읽습니다.\nㅇㅇ'
    }
  }
}
</script>