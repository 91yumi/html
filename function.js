//함수를 호출하지 않아도 실행되는 방법

/* var num1 = 2;
var num2 = 3;
var sum = num1 + num2;
document.write("결과값은 " + sum);
 */

//함수를 호출해야 실행되는 방법

/* function addNumber() {
    var num1 = 2;
    var num2 = 3;
    var sum = num1 + num2;
    document.write("결과값은 " + sum);
} */


/* 
//html파일에서 매개변수를 지정해주어야 한다.

var i = 0; //전역변수 (i란 값이 모든 영역에서 사용된다.)
//중괄호 안에서 값을 변경해서 사용할 수도 있다.

function addNumber(a,b) { //중괄호 안의 값은 지역변수 (영역 밖을 벗어날 수 없다.)
    var num1 = a;
    var num2 = b;
    var sum = num1 + num2;
    document.write("결과값은 " + sum);
}
 */


/* let i;
const j = 10;

function addNumber(a,b) { 
    const j = 0;
    let num1 = a;
    let num2 = b;
    let sum = num1 + num2;
    document.write("결과값은 " + sum);
    console.log("범위 안 마지막" + j);
}
console.log("범위 밖" + j); */



/* const x = 10;
const y = 20;
//displayNumber(); //에러 발생

const displayNumber = () => {
    return console.log("x is " + x),console.log("y is " + y);
};
// return {} 없어도 결과 똑같음

displayNumber();

 */


/* const sum = function (a,b) {
    return a + b;
};

document.write(sum(10,20)); */
/* 
(function (10,20)) {
    return a + b;

} */
/* 

//주로 사용하는 함수 - 매개변수가 2개인 경우
function add(a, b) {
    return document.write(a + b);
}

//화살표 함수로 변경
add = (a, b) => document.write(a+b);
 */

//매개변수가 1개인 경우 

//주로 사용하는 함수 
function add(a) {
    return document.write();
}

//화살표 함수로 변경
add = a => document.write(a+b);

//매개변수가 없는 경우

function add() {
    return document.write();
}

//화살표 함수로 변경
add = () => document.write(a+b);

