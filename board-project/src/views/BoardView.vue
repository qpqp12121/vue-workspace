<template>
  <div>

    <!-- 하위 Components -->
    <HeaderComponent /> <!--공통-->

    <!--1.content-->
    <BoardList v-if="listView" v-bind:list="boardList" @show-write="showWrite" 
                @delete-board="deleteBoard" @show-read="showRead" /> <!--하위 component에 값 전달은 attribute로 전달 가능(여기서 list라는 attr는 우리가 정의한 거임),이벤트도 사용자정의이벤트-->
    <BoardWrite v-if="writeView" @save-board="saveBoard" /> <!--BoardList에서 글쓰기버튼 누르면 페이지 띄우도록 함-->
    <BoardRead v-if="readView" v-bind:obj="board" @show-list="showList" />

    <FooterComponent v-bind:data="htmlData"> <!--공통-->
       <!--html태그 전달: 내용이 길 경우 변수 아닌 태그의 값 넘겨주는 방법 slot 사용-->
      <template v-slot:header><h3>Header에 들어갈 내용</h3></template>
      <template v-slot:default><p>Hello, World</p></template>
      <template v-slot:footer><p>Since 2020</p></template>
    </FooterComponent>
</div>
</template>

<script>
import BoardList from '../components/BoardList.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import BoardWrite from '../components/BoardWrite.vue'
import BoardRead from '../components/BoardRead.vue'

export default { //3.-여기서 만든 데이터들 App.vue에서 사용하려고
  data() {
    return {
      listView: true,
      writeView: false, //BoardList페이지에서 글쓰기 버튼 누르면 true로 바꿔서 보이도록
      readView: false,
      board: {},
      boardList: [
        { no: 1, title: 'Vue는 좋아요', content: '프레임워크입니다', view: 0 },
        { no: 2, title: '좋은 아침', content: '금요일', view: 0 }
      ],
      htmlData: '<p>Hello</p>'
      
    }
  },
  components: {
    BoardList, //BoardList: BoardList //템플릿 안에 선언되어있는 BoardList태그(여기 안에 보여져야 되는 내용들은) -> import-BoardList페이지 안의 내용들을 가져와 넣겠다
    HeaderComponent,
    FooterComponent,
    BoardWrite,
    BoardRead //상세화면
  },

  methods: {
    showWrite() { //글쓰기버튼 누르면 => 등록화면 보여지는(listView <-> writeView 값 변경)
      this.listView = false;
      this.writeView = true;
    },

    showList() { //목록보여주는 기능
      this.listView = true;
      this.writeView = false;
      this.readView = false;
    },

    showRead(board) { //글 상세조회
      console.log(board) //글번호 활용 --boardList[]의 글번호를 찾아서 view의 값 +1 해주기
      this.listView = false;
      this.writeView = false;
      this.readView = true;

      this.board = board;

      //글번호 조회(view) 증가
      //글번호의 인덱스를 찾아서 현재 조회수를 파악하고 증가하기
      let idx = -1; //해당 위치의 값을 새로운 값으로 변경하기 위해서(혹시나 아래부분의 코드가 오류발생시에 0으로 할 경우 splice(0,1...)에서 있는 값 정보를 바꿀 수 있으니 없는 값으로 초기값 준 거임)
      let viewCnt = 0;
      for(let i = 0; i < this.boardList.length; i++) {
        if(this.boardList[i].no == board.no) {
          idx = i;
          viewCnt = this.boardList[i].view;
          break;
        }
      }
      let brd = {no: board.no, title: board.title, content: board.content,view: viewCnt + 1}
      this.boardList.splice(idx, 1, brd); //새로운 값으로 변경. (viewCnt만 바꿈 brd에 새로 넣어서)
    },

    saveBoard(title, content) { //boardList에 신규글 등록.
      //console.log(title,content);

      let idx = this.boardList.length - 1; //제일 마지막 데이터의 idx값.(마지막 번호 구하기)
      let no = parseInt(this.boardList[idx].no) + 1; //새로운 데이터의 no
      //console.log(this.boardList[idx].no)
      let board = {no, title, content, view: 0};

      this.boardList.splice(this.boardList.length, 0, board);
      this.showList();
    },

    deleteBoard(no) { //글삭제
      this.boardList = this.boardList.filter(board => board.no == no ? false : true) //반환값이 true인 애들만 새로운 배열로 담아주니 삭제할 번호는 빼야 되니 false실행하도록)
    }
  }
}
</script>
