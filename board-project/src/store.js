//store.js
import { createStore } from 'vuex'; //저장소 생성할 때 사용하는 함수
import createPersistedstate from 'vuex-persistedstate';

export default createStore({ //createStore함수를 통과한 결과물이 넘어가야 됨(원래처럼 그냥 객체가 아닌)
  state() { //state: 저장소로 view가 가지고 있는 data(){}와 같은 구조
    return {
      cart: [
        {
          product_id: 1,
          product_name: '아이폰 거치대',
          category: 'A'
        }
      ],
      count: 0
    }
  },
  //< *아래 3개는 저장소를 매개변수로 받음(this사용X) >
  getters: { //가지고 오고자 하는 데이터에 대해 정의(구조 등을)--computed랑 비슷하다 생각
    cartCount: (state) => { //getters에 정의되는 모든 대상은 위에 정의되어 있는 state가 넘어온다
      return state.cart.length; //this로 접근X
    }
  },
  //단건실행(실질적인 state데이터 값 조작)
  mutations: {
    increment(state) {
      state.count++;
    },
    //매개변수2개(원하는 값 적용하고 싶으면-2번째 매개변수 자리에 넘겨받은 데이터 들어 옴)
    addProduct(state, info) { //state는 고정
      state.cart.push(info);
    }
  },
  //여러건실행(단일건들 모아 어떤 기능을 처리)
  actions: {
    addProduct(context, info) { //actions는 직접 state()내부의 데이터 못 건들임(mutations통해서 접근)
      context.commit('addProduct', info) //mutation정보를 제어할 수 있는 대상 context (매개변수)
      //비동기 작업도 가능
      setTimeout(()=> {
        context.commit('increment'); 
      }, 1000)
    }
  },
  plugins: [ createPersistedstate() ] //우리는 데이터 별로 없어 전체저장하는 방식 사용했음(원래 구분하는 작업 필요-하나의 모듈이라 npm 따로 있으니 참고)
});