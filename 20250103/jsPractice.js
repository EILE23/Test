function input1(){
    location.href = "https://www.youtube.com/?reload=9"
}
function input2(){
    location.href = "https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwil1Y2ftdmKAxWGk1YBHdteI3AQPAgI"
}
function input3(){
    location.href = "https://chromewebstore.google.com/?pli=1"
}
function gmail(){
    location.href = "https://mail.google.com/mail/u/0/?ogbl"
}
function image(){
    location.href = "https://www.google.com/imghp?hl=ko&tab=ri&ogbl"
}
function searchlabs(){
    location.href = "https://labs.google.com/search?source=ntp"
}
function input4(){
    alert("바로가기 기능입니다.")
}
function icon1(){
    alert("검색 기능입니다.")
}
function mic(){
    alert("마이크 기능입니다.")
}
function camera(){
    alert("카메라 기능입니다.")
}
    
// 드롭다운 메뉴 활성화 시 스크롤을 최상단으로 설정
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('#dropdownMenu');

dropdown.addEventListener('mouseenter', () => {
dropdownMenu.scrollTop = 0; // 스크롤을 최상단으로 이동
});