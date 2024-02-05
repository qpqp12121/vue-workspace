<template>
  <div>
    <form>
      <label>
        제품ID:
        <input type="text" v-model="productInfo.product_id">
      </label>
      <br>
      <label>
        제품명:
        <input type="text" v-model="productInfo.product_name">
      </label>
      <br>
      <label>
        카테고리:
        <input type="radio" value="A" v-model="productInfo.category"> A
        <input type="radio" value="B" v-model="productInfo.category"> B
      </label>
      <br>
      <button type="button" @click="addCart">추가</button>
    </form>
    <br>
    <table>
      <thead>
        <caption> total: {{ total }}</caption>
        <tr>
          <th>카테고리</th>
          <th>제품ID</th>
          <th>제품명</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info, idx) in productList" :key="idx">
          <td>{{ info.category }}</td>
          <td>{{ info.product_id }}</td>
          <td>{{ info.product_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      productInfo: {
        product_id: "",
        product_name: "",
        category: "A"
      }
    }
  },
  computed: { //다른 컴포넌트가 변경한 두 값의 변화를 감지해서 자동으로 끌고 들어올 수 있어 date가 아닌 computed
    productList() {
      return this.$store.state.cart; //state에 있는 거 불러올 순 있으나 수정은 X
                                    //원형(cart 전체 들고 올 경우)
    },
    total() {
      return this.$store.getters.cartCount; //원데이터를 기반으로 추가적으로 가져온다
    }
  },
  methods: {
    //*참조타입은 내부 값 복사해서 새로 만들어서 넘기는 것 권장(값만 복사할거니까) 
    addCart() { //(아래 this.productInfo로 통째로 넘기는 거랑 비교해 봄)
      let obj = {
        product_id: this.productInfo.product_id,
        product_name: this.productInfo.product_name,
        category: this.productInfo.category
      }
      this.$store.dispatch('addProduct', obj); //dispatch: actions에서 값 찾겠다('함수이름')
      // this.$store.commit('addProduct', obj); //commit: mutations에서 값 찾겠다('함수이름')

      // this.$store.commit('addProduct', this.productInfo); 
      //통째로 넘길 경우 vue에 대한 데이터바인딩이 아닌 js의 객체타입의 참조값으로 위의 데이터productInfo를 보고 있는 것
      //=> 사용자의 입력값 변경시 서버 끊기지 않고 변경상황이 보임 (=>참조타입은 값 넘긴다는 의미가 아님)
    }
  }


}

</script>

<style>
  table, 
  th, 
  td {
    border: 1px solid black;
  }
</style>