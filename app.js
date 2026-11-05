import express from "express"; //익스프레스 불러오기
const app = express(); //app이라는 이름을 가진 서버 생성

//익스프레스는 그냥 실행만하면 서버가 생성됌
//바로 listen으로 클라이언트의 요청을 받을 준비

app.get("/", (req, res) => {  //서버이름 뒤에 method type을 적고 요청경로를 지정한 후 콜백함수로 무엇을 할지 정해주기
  res.send('Hello, Node!'); //===http.write 
});


//모든 연락처 가져오기
app.get("/contacts", (req, res) => {
  res.send("Contacts Page");
});


//새 연락처 추가
app.post("/contacts", (req, res) => {
  res.send("Create Contacts");
})





//연락처 1개만 가져오기
app.get("/contacts/:id", (req, res) => {
  res.send(`View Contact for ID : ${req.params.id}`);
})



//연락처 수정하기

app.put("/contacts/:id", (req, res) => {
  res.send(`Update Contact for ID : ${req.params.id}`);
})



//연락처 삭제하기

app.delete("/contacts/:id", (req, res) => {
  res.send(`Delete Contacts for ID : ${req.params.id}`);
})


app.listen(3000, () => {
  console.log("서버 실행 중");
});
