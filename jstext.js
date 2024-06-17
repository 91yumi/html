/* var session =prompt("관심 세션을 선택해주세요. 1-마케팅, 2-개발, 3-디자인");

switch(session) {
    case "1" : document.write("<p>마케팅 세션은 <strong> 201호</strong>에서 오픈합니다. </p>")
    break;
    case "2" : document.write("<p>개발 세션은 <strong> 203호</strong>에서 오픈합니다. </p>")
    break;
    case "3" : document.write("<p>디자인 세션은 <strong> 205호</strong>에서 오픈합니다. </p>")
    break;
    default : alert("잘못 입력했습니다.");
}
 */
/* var memNum = prompt("입장객은 몇 명인가요?");
var colNum = prompt("한 줄에 몇 명씩 앉습니까?");

if(memNum % colNum === 0)
    rowNum = parseInt(memNum / colNum);
else 
    rowNum = parseInt(memNum / colNum) + 1;

    document.write("모두 " + rowNum + "개의 줄이 필요합니다.");
 */


/* var i;
var sum = 0;    
var num = parseInt(prompt("숫자를 입력하세요"));

for (let i=0; i<=num; i++) {
    
    sum += i; 
}
document.write("1부터 " + num + "까지 값을 모두 더하면" + sum);
 */

/* var i, j;

for(i=1; i<=9; i++){
    document.write("<div class='dan'>");
    document.write("<h2>" + i + "단</h2>");
    for (j =1; j<=9; j++) {
        document.write(i + " X " + j + " = " + i*j + "<br>");
    }
    document.write("</div>");
}
 */

/* const memNum = prompt("참가 인원은 몇 명인가요?", "16");
const colNum = prompt("좌석은 한 줄에 몇 개를 놓을까요?", "6");
const rowNum = memNum / colNum;

const users = ["김유미", "김가영", "추호연", "박민수", "이다은", "서민경", "하소영", "전보람", "옥찬미", "양연수", "배채정", "박주연", "김은솔", "전현정", "정다겸", "류강민","",""];

document.write("<div class = 'table'><h2>빅데이터활용 sw개발 전문가 양성과정 참여자<h2><table>")
for(let r = 0; r < rowNum; r++) {
    document.write("<tr>");
    for(let c = 1; c <= colNum; c++) {
        let seatNo = c + r * colNum-1; 

        document.write("<td>" + users[seatNo] + " </td>");
    }
    document.write("</tr>");

}
document.write("</table>")
 */




//이름이 랜덤으로 나오도록 만들기 (0~17번)

const colNum = 6;
const rowNum = 3;

const users = ["김유미", "김가영", "추호연", "박민수", "이다은", "서민경", "하소영", "전보람", "옥찬미", "양연수", "배채정", "박주연", "김은솔", "전현정", "정다겸", "류강민","",""];

document.write("<div class = 'table'><h2>빅데이터활용 sw개발 전문가 양성과정 참여자<h2><table>")
for(let r = 0; r < rowNum; r++) {
    document.write("<tr>");
    for(let c = 1; c <= colNum; c++) {
        let seatNo = Math.floor(Math.random() * 17); 

        document.write("<td>" + users[seatNo] + " </td>");
    }
    document.write("</tr>");

}
document.write("</table></div>")

//함수 선언
function 함수명 (매개변수) {
    실행문;
}

//함수 호출
-함수명() 
-함수명(매개변수);


