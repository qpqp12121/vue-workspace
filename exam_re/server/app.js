require("dotenv").config({ path: "./db/db.env" });
const express = require("express");
const app = express();
const comRouter = require('./commentRouter.js');

//params 사용 parser
app.use(
  express.json({
    limit: "50mb",
  })
);
//queryString 사용하기 위한 parser
app.use(express.urlencoded({extended : false}));
app.use('/comments', comRouter);

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");
// REST API 기준

//전체조회
app.get("/boards", async (request, response) => {
  let result = await db.connection('board','boardList'); //('boardList') 에서 추가 --쿼리 각자 작성해서 sql.js에서 통합하고 객체 안의 객체로 담겨있어 db.js랑 app.js파일에서 변경
  response.send(result);
});

//단건조회
app.get("/boards/:bno", async (request, response) => {
  let data = request.params.bno;
  let result = (await db.connection('board','boardInfo', data))[0];
  response.send(result);
});


//등록 : post => body
app.post("/boards", async (request, response)=>{
  let data = request.body.param; // { param : { .. } }
  let result = await db.connection('board', 'boardInsert', data);
  response.send(result);
});

//수정 : put => body
app.put("/boards/:bno", async (request, response) => {
  let data = [request.body.param, request.params.bno];
  let result = await db.connection('board', 'boardUpdate', data);
  response.send(result);
});