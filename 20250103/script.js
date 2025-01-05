// 드롭다운 메뉴 열고 닫는 기능
document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // 드롭다운 메뉴 클릭 시 토글
    dropdownToggle.addEventListener("click", function(event) {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        event.stopPropagation(); // 클릭 이벤트 전파 방지
    });

    // 드롭다운 외부 클릭 시 메뉴 닫기
    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target)) {
            dropdownMenu.style.display = "none"; // 드롭다운 외부 클릭 시 닫기
        }
    });
});

// 각 앱 아이콘을 클릭 시 실행할 함수
function openApp(app) {
    alert(`Opening ${app}...`);
    // 실제로 앱을 여는 코드나 페이지로 이동하는 코드를 여기에 넣을 수 있습니다.
}
