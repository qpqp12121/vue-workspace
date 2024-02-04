<template>
  <div>
    <!--양식: Header, Footer 공통 / Content 구역만 변경-->
    
    <!--하위 Components-->
    <HeaderComponent />

    <BoardList v-if="listView" v-bind:list="boardList" @delete-board="deleteBoard" @show-write="showWrite" @show-read="showRead"/>
    <BoardWrite v-if="writeView" @save-board="saveBoard" @show-list="showList" />
    <BoardRead v-if="readView" v-bind:detailed="board" @show-list="showList" />

    <FooterComponent v-bind:data="htmlData"> <!--props로 html데이터 전달-->
      <!--html태그 전달: 내용이 길 경우 변수 아닌 태그의 값 넘겨주는 방법 slot 사용-->
      <template v-slot:header>
        <h3>slot-header에 들어갈 내용</h3>
      </template>
      <template #default> <!--Name이 없는 slot으로 v-slot:default-->
        <p>Hello, World(slot-default)</p>
      </template>
      <template #footer>
        <p>Since 2020(slot-footer)</p>
      </template>
    </FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BoardList from '../components/BoardList.vue'
import BoardWrite from '../components/BoardWrite.vue'
import BoardRead from '../components/BoardRead.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return{
      htmlData: '<p>Hi, footer에서 나올래</p>',
      boardList: [
        { no: 1, title: 'Vue는 좋아요', content: '프레임워크입니다', view: 2 },
        { no: 2, title: '좋은 아침', content: '금요일', view: 1 }
      ],
      board: {},
      listView: true,
      writeView: false,
      readView: false
    }
  },
  methods: {
    //글삭제
    deleteBoard(no) {
      this.boardList = this.boardList.filter(board => board.no == no? false : true);
    },

    //글쓰기
    showWrite() {
      this.listView = false;
      this.writeView = true;
    },

    //글저장
    saveBoard(title, content) {
      let idx = this.boardList.length - 1;
      // let no = parseInt(this.boardList[idx].no) + 1;
      let no = this.boardList[idx].no + 1; //왜 parseInt로 하는지 알아보기
      let board = { no, title, content, view: 0 };
      this.boardList.splice(this.boardList.length, 0, board); //splice():원본 변경
      this.showList();
    },

    //글목록 보기
    showList() {
      this.listView = true;
      this.writeView = false;
      this.readView = false;
    },

    //글상세
    showRead(board) {
      this.listView = false;
      this.writeView = false;
      this.readView = true;
      this.board = board;

      //조회수증가 view
      //1)현재 조회수 파악
      let idx = -1; //해당 위치의 view값을 새로운 값으로 변경하기 위해서
      let viewCnt = 0;
      for(let i = 0; i < this.boardList.length; i++) {
        if(this.boardList[i].no == board.no) {
          idx = i;
          viewCnt = this.boardList[i].view;
          break;
        }
      }
      //2)view값 변경 후 기존 idx해당 글 삭제 후 -> boardList에 새로 저장
      let brd = { no: board.no, title: board.title, content: board.content, view: viewCnt + 1 };
      this.boardList.splice(idx, 1, brd);

      /* 왜 let idx = -1 ?  
       : idx = 0으로 할 경우, 아래부분의 코드에서 오류 발생 시에
         splice(0, 1, 변경된brd) 에서 0번째에 있는 값 정보를 바꿀 수 있으니 애초에 없는 -1로 초기값 할당 
         => 초기값 0으로 해도 상관 X                                                                 */
    }
  },
  components: {
    HeaderComponent,
    BoardList,
    BoardWrite,
    BoardRead,
    FooterComponent
  }
}
</script>