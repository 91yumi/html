/* let now = new Date();

function time(){
document.write("현재 시각은 " + now.toLocaleString()); //우리에게 친숙한 형식

location.reload(); //새로고침을 통해 시간이 보여진다. 
}
setInterval(time, 1000); // 1초마다 보여진다. 


 */

/* let now = new Date();


document.write("현재 년도는 " + now.getFullYear() +"년<br>"); 
//document.write("현재 월은 " + now.getMonth() + "월<br>"); //이렇게하면 5월 나옴
document.write("현재 월은 " + (now.getMonth() + 1 +"월<br>")); //+1 해야지 6월이 나옴
document.write("현재 날짜는 " + now.getDate() + "일<br>");
//document.write("현재 요일은 " + now.getDay() + "요일<br>"); //일요일은 0, 월요일은 1...
document.write("현재 시는 " + now.getHours() + "시<br>");
document.write("현재 분는 " + now.getMinutes() + "분<br>");
document.write("현재 초는 " + now.getSeconds() + "초<br>");

// location.reload(); //새로고침을 통해 시간이 보여진다. 
// setInterval(time, 1000); // 1초마다 보여진다. 

let week;
switch(now.getDay()) // getDay()는 내장객체 이므로 이름 뒤에 ()를 붙여야 한다.
{
    case 0 : 
    week = "일";
    break;
    case 1 : 
    week = "월";
    break;
    case 2 : 
    week = "화";
    break;
    case 3 : 
    week = "수";
    break;
    case 4 : 
    week = "목";
    break;
    case 5 : 
    week = "금";
    break;
    case 6 : 
    week = "토";
    break;
}
document.write("현재 요일은 " + week + "요일<br>"); //일요일은 0, 월요일은 1...

//Array 객체 메서드

const numbers = new Array(); //숫자를 넣지 않으면 무한대로 들어갈 수 있다.
const days = ["일","월","화","수","목","금","토"]; //대괄호에 넣어줄 수도 있다.

console.log(days.length); //콘솔 창에 배열 길이 나오도록 함 (7 나옴) */


//배열 합치기

let nums = [1,2,3];
let chars = ["a","b","c","d"];

let numsChars = nums.concat(chars);
let charsNums = chars.concat(nums);

//콘솔창에 출력되도록 하는 방법

console.log(numsChars); 
console.log(charsNums);

//브라우저에 출력되도록 하는 방법 

document.write("nums에 chars를 합치면 :", numsChars, 
    "<br> chars에 nums 합치면 : ", chars);


console.log(nums.join());
console.log(chars.join("-"));

//배열에 요소를 추가하는 방법

nums.push(4,5); //[1,2,3] 배열 마지막에 [4,5] 추가함
console.log(nums);
nums.unshift(-1, 0); //nums=[] 배열 맨 앞에 [-1, 0] 추가함
console.log(nums);

//배열의 요소를 꺼내서 값을 결과로 반영하는 방법

nums.pop(); //배열 마지막 값을 가지고 옴
console.log(nums); 
nums.shift(); //배열 맨 앞의 값을 가지고 옴
console.log(nums); 

//배열의 가운데 값을 삭제, 변경하고 싶을 때

nums.splice(3,2); //(일련번호 숫자, 삭제하고 싶은 개수)  이렇게 적어야 하고,
                  //삭제하고 싶은 숫자 적지 않으면 모두 모두 삭제된다.
nums.splice(3,1,6); //(일련번호 숫자, 삭제개수, 변경개수) 이렇게 적으면 값을 변경할 수도 있다.

console.log(nums); 


let result1 = nums.slice(2,4); //인덱스 값이 2부터 3인 요소 꺼내기
                                //(2,4) => 2부터 4 직전의 요소까지만 꺼낸다.
console.log(result1);
console.log(nums);

