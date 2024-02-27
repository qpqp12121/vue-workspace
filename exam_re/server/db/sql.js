//쿼리문 총합 파일
// import board from './board.js' -- export default {} 사용할 때
// import comment from './comment.js'
const board = require('./board.js');  //module.exports = {} 사용할 때
const comment = require('./comment.js');


module.exports = {
    board,
    comment
}
//위처럼 객체에 통째로 넣는 방식으로 하면 
//db.js에서 사용방법이 달라질 것 (구조가 객체 안의 객체라)
//아래 방식으로 사용가능
//sql[alias] XXX ▼
//=> sql['board']['boardList'];