<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>글번호</th>
          <th>글제목</th>
          <th>조회수</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in list" v-bind:key="board.no">
          <td>{{ board.no }}</td>
          <td @click="showRead(board)">{{ board.title }}</td>
          <td>{{ board.view }}</td>
          <td><button @click="deleteBoard(board.no)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <button style="float: right;" @click="showWrite">글쓰기</button>
  </div>
</template>

<script>
export default {
  props: ['list'], // 부모컴포넌트의 (BoardView.vue) 전달값을 받는 속성(props 통해서 가능(배열로)

  methods: {
    showWrite() {
      this.$emit('showWrite')
      /* 부모comp에 등록된 event를 호출하는 방식으로 데이터변경 요청
         : 바꿀 data()는 부모컨포넌트(최상위)인 BoardView에 있고
           변경하기 위해 부모컴포넌트에 요청하면 거기서 변경함(여기서 자식이 직접변경X) */
      
      console.log(this); //-target에서 확인가능
      console.log(this.$parent);//부모comp가 가진 자원들 확인가능

      //직접변경하는 방식도 있긴 함 (근데 변경이 생길 시 각각의 comp 다 변경해야 되니 XXX)
      // this.$parent.listView = false;
      // this.$parent.writeView = true;
    },

    showRead(board) { //상세화면
      this.$emit('showRead', board);
    },

    deleteBoard(no) { //파라미터 전달. 
      this.$emit('delete-board', no);
    }

  }
}
</script>
