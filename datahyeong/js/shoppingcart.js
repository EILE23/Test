const saveData = JSON.parse(window.localStorage.getItem("shopping"));

createbox(saveData);

let mnumber = saveData.length;
console.log(mnumber);

function createbox(data) {
  const mainwrap = document.querySelector(".main-container");
  mainwrap.innerHTML = "";
  if (data.length >= 1) {
    data.map((item, index) => {
      mainwrap.innerHTML += `    <div class="test box box${item.id}">
        <div><img class = "imgshop"src="${item.img}" alt="..." /></div>
        <div class="subbox">
          <div>${item.name}</div>
          <div>${item.age}</div>
        </div>
      <button class = "info" onclick = "information(${item.id})">정보</button><button class = "remove" onclick = "removeBtn(${index})">삭제</button></div>`;
    });
  } else mainwrap.innerHTML = `<div class = "tung">장바구니가 비었어요.</div>`;
}

function removeBtn(index) {
  saveData.splice(index, 1);

  window.localStorage.setItem("shopping", JSON.stringify(saveData));
  //document.querySelector(`.box${saveData[index].id}`).remove();

  const Data = JSON.parse(window.localStorage.getItem("shopping"));

  createbox(Data);
}

// 상세페이지 이동
function information(content) {
  window.location.href = `details.html?id=${content}`;
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
