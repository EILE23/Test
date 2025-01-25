let saveData = JSON.parse(window.localStorage.getItem("data")) || [];
let shoppingcart = JSON.parse(window.localStorage.getItem("shopping")) || [];
createbox(saveData);
shoppingnum(shoppingcart.length);
function createbox(data) {
  const mainwrap = document.querySelector(".boxbox");
  data.map((item) => {
    let numbering = Number(item.age).toLocaleString();
    mainwrap.innerHTML += `    <div class="test" onclick = "information(${item.id})">
        <img src="${item.img}" alt="..." />
        <div>${item.name}</div>
        <div>${numbering}원</div>
     `;
  });
}
function information(content) {
  window.location.href = `details.html?id=${content}`;
}

function shoppingbtn() {
  window.location.href = "shoppingcart.html";
}
function shoppingnum(number) {
  document.querySelector(".circlenum").innerText = `${number}`;
}

// scroll 헤더 고정

let header = document.querySelector(".header");
let headerTop = header.offsetTop;
if (saveData.length >= 8) {
  window.addEventListener("scroll", function () {
    let sp = window.scrollY;

    if (sp >= headerTop) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}
