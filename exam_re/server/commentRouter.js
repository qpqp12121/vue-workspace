const express = require('express');
const commentRouter = express.Router();
const db = require('./db.js');

//댓글조회 (특정 게시글에 대한 조회니 검색으로 보고 params말고 querystring써도 됨)
// " queryString ""
commentRouter.get('/', async(request, response) => { //app.get('/comments', ---- comments는 export시켜서 app.js에서 use이용해서 comments 붙이는 도메인이라 여기선 루트만 작성
  let data = request.query.bno;
  let result = await db.connection('comment','commentList', data);
  response.send(result);
});

module.exports = commentRouter;