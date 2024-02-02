<template>
  <div class="about">
    
    <p>Counter is: {{ counter }}</p>
      <button v-on:click="increaseCounter">Add</button>
      <button v-on:click="increaseCounter2(3)">Increase</button>
      <button v-on:click="one(), two()">다중호출</button>

      <select v-model="city" @change="changeSelect()"> <!-- v-on:change=" " 줄여서 -->
        <option value="1">서울</option>
        <option value="2">부산</option>
        <option value="3">제주</option>
      </select>

  </div>
</template>

<script>
  export default {
    //vue instance
    data() {
      return {
        counter: 5,
        city: 1
      };
    },

    //*데이터만 변경되면 화면은 제어하지 않아도 저절로 변경(Vue가 하는 역할)
    
    //< Event Handler >

    //1.이벤트 발생 
    methods: { 
      increaseCounter() {
        console.log('1.increaseCounter');
        //data객체 안에 있어서 this 사용해 접근 
        //this.counter = this.counter + 1; 
        this.counter = this.counter + parseInt(this.city); //선택한 option의 value값만큼 증가
      },

      increaseCounter2(num) {
        console.log('1.increaseCounter2');
        this.counter = this.counter + num;
      },

      one() {
        alert('one');
      },
      two() {
        alert('two');
      },

      changeSelect() {
        alert(this.city);
      }

    }, //methods end.

    //2.(화면)변경 이전에 필요처리를 구현.(hook발생 확인)
    beforeUpdate() {
      console.log('2.beforeUpdate');
    },

    //3.변경 이후에 필요처리를 구현.
    updated() {
      console.log('3.updated');
    }


  }


</script>

