<template>
  <h3>Hello {{ msg }}</h3>
  <p>========================</p>
  <p>1. mustache구문 텍스트 형식 출력</p>
  <div>{{ htmlStr }}</div>
  <p>위 v-text="변수명"과 같음</p>
  <div v-text="htmlStr"></div>
  <p>        ↓         </p>
  <p>2. v-html: html형식으로 출력</p>
  <div v-html="htmlStr"></div>
  <p>========================</p>
  <p>v-model: 양방향 data binding 생성<br>변수에 사용자의 값 넣거나 변경시킬 수 있다</p>
  <input type="text" v-model="vmodel" />
  <p>-------------------------------</p>
  <textarea cols="25" rows="5" v-model="textArea" />
</template>

<script>
export default {
  data() {
    return {
      msg: '\\ ( ･ᴗ･̥̥̥ ) /',
      htmlStr: '<p style="color: violet; font-weight: bold">Hi</p>',
      vmodel: 'Hello Bye',
      textArea: '여러 라인의 값 읽음 \nㅇㅇ'
    }
  }
}
</script>