let now = new Date(); //오늘 날짜를 객체로 지정
let firstDay = new Date("2024-03-28"); //시작 날짜를 객체로 지정

let toNow = now.getTime(); //오늘까지 지난 시간(밀리초)
let toFirst = firstDay.getTime(); //첫날까지 지난 시간(밀리초)
let passedTime = toNow - toFirst; //첫날부터 오늘까지 지난 시간(밀리초)

//passedTime = Math.round(passedTime/(1000*60*60*24)); 
//밀리초를 일수로 계산하고 반올림

passedTime = Math.floor(passedTime/(1000*60*60*24));
//밀리초를 일수로 계산하고 나머지는 버림

console.log(passedTime);
document.querySelector('#result').innerText = passedTime;

document.querySelector("#startDay").innerText = now.toLocaleString();
document.querySelector("#currentDay").innerText = firstDay.toLocaleString();

let startDays;
function startDay() {
    let startDay = document.querySelector("startDay").Value;
    console.log(startDay);

    let now = new Date();
    let firstDay = new Date(startDays);

    let toNow = now.getTime();
    let toFirst = firstDay.getTime();
    let passedTime = toNow - toFirst;
    passedTime = Math.floor(passedTime / (1000*60*60*24));

    document.getElementById("result").innerText = passedTime;

}

