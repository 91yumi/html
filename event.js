//상세 설명을 화면에 표시하는 함수
function openDesc() {
    document.querySelector('#open').style.display = "none";
    document.querySelector('#desc').style.display = "block";
}


//상세 설명을 화면에서 감추는 함수
function closeDesc() {
    document.querySelector('#desc').style.display="none";
    document.querySelector('#open').style.display="block";
}
