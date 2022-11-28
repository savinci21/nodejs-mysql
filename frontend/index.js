document.getElementById("app").innerHTML = `<a onclick="showList()">리스트로 이동</>`;

const showList = () => {

   //document.getElementById("app").innerHTML = "리스트 페이지 입니다" ; spa ->React, Vue,Angular
   // API 요청

   const url = 'http://localhost:3000/api/list'

   fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data)) -> data를 받아와서 html에 적용한다
    
    .then((data) => { 
        document.getElementById("app").innerHTML = `
  
    <h2>SPA로 mysql 내용이 loading....</h2>
    <table>
        <tr>
            <td>num</td>
            <td>id</td>
            <td>pw</td>
            <td>name</td>
        </tr>
        <tr>           
            <td>${data[0]['num']}</td>
            <td>${data[0]['id']}</td>
            <td>${data[0]['pw']}</td>
            <td>${data[0]['name']}</td>
                       
        </tr>
        <tr>           
            <td>${data[1]['num']}</td>
            <td>${data[1]['id']}</td>
            <td>${data[1]['pw']}</td>
            <td>${data[1]['name']}</td>
                       
        </tr>
        <tr>           
            <td>${data[2]['num']}</td>
            <td>${data[2]['id']}</td>
            <td>${data[2]['pw']}</td>
            <td>${data[2]['name']}</td>
                       
        </tr>
       
    </table>

   `})
    .catch((error) => console.log("error:", error))


  
}