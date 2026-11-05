import express from "express"; //익스프레스 불러오기
const app = express(); //app이라는 이름을 가진 서버 생성
import { router } from "./routes/contactRoutes.js"; //라우터 파일에서 라우트코드 불러오기

//익스프레스는 그냥 실행만하면 서버가 생성됌
//바로 listen으로 클라이언트의 요청을 받을 준비



app.get("/", (req, res) => {  //서버이름 뒤에 method type을 적고 요청경로를 지정한 후 콜백함수로 무엇을 할지 정해주기
  res.send('Hello, Node!'); //===http.write 
});

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/contacts", router);


app.listen(3000, () => {
  console.log("서버 실행 중");
});

