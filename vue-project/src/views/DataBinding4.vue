<template>
  <div class="container" v-bind:class="simpleClass">
    Hello
  </div>
  <!-- <div class="container" v-bind:class="{active: true, 'text-red': true}"> -->
  <div class="container" v-bind:class="{active: activeValue, 'text-red': redValue}">
    Hello
  </div>
  <div class="container" v-bind:class="[activeClass, redClass]">
    Hello
  </div>
  <br>
  <div style="color: white; background: rgb(222, 182, 255);">
    style1
  </div>
  <div v-bind:style="{color: attr1, background: attr2}">
    style2
  </div>
  <div v-bind:style="colorStyle">
    style3
  </div>


</template>

<script>
export default { 
  //< view instance >
  //dom으로 화면 그리지 않고 지시자로 화면 그림 vue사용해서
  data(){ 
    return {
      simpleClass: 'active text-red', //class2개+기존

      activeValue: true,
      redValue: false,
      
      activeClass: 'active',
      redClass: 'text-red',

      attr1: 'white',
      attr2: 'rgb(222, 182, 255)',

      //colorStyle: 'color: white; background: rgb(222, 182, 255);'
      colorStyle: {
        color: 'gray',
        background:'rgb(222, 182, 255)'
      }
    }
  },
  mounted() {
    console.log(this) //Proxy(Object) - Target에 data(){}정의한 값 보여짐
  },
  methods: { //이벤트 발생하면 실행할 함수

  }
}
</script>

<style>
  .container {
    width: 100%;
    height: 50px;
    border: 1px solid rgb(100, 100, 253);
  }
  .active {
    background-color: rgb(178, 205, 255);
    font-weight: bold;
  }
  .text-red {
    color: rgb(255, 255, 255);
  }


</style>