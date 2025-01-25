const saveData = JSON.parse(window.localStorage.getItem("data"));
let shoppingcart = JSON.parse(window.localStorage.getItem("shopping")) || [];
const querydata = new URLSearchParams(window.location.search);
const id = querydata.get("id");

console.log(id);
let iddata = "";
if (saveData) {
  saveData.map((item) => {
    if (item.id == id) {
      iddata = item;
    }
  });
  createmainwrap(iddata);
  shoppingnum(shoppingcart.length);
}
function createmainwrap(item) {
  const mainwrap = document.querySelector(".main-wrap");
  let numbering = Number(item.age).toLocaleString();
  mainwrap.innerHTML = `<div class ="box-wrap"><div class = "box">
  <img class = "img"src = "${item.img}" alt = "..."/>
  <div class = "name">${item.name}</div><div class = "history">${item.history}</div><div class = "age">${numbering}원</div>
  </div><div class = "damgii" onclick = "damgiibtn(${item.id})">담기</div></div>`;
}
function damgiibtn(item) {
  Swal.fire({
    title: "장바구니에 담을까요?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "취소",
    confirmButtonText: "담기",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "담겼습니다!",
        icon: "success",
      });

      let exist = false;

      // 카트에 담겨 있을경우
      shoppingcart.map((x, i) => {
        if (x.id == item) {
          exist = true;
          x.cnt += 1;
        }
      });
      if (!exist) {
        //초기 생성 이면
        let dataid = "";

        saveData.map((search) => {
          if (item == search.id) {
            dataid = { ...search, cnt: 1 };
          }
        });

        shoppingcart.push(dataid);
      }
      window.localStorage.setItem("shopping", JSON.stringify(shoppingcart));
      let number = shoppingcart.length;
      shoppingnum(number);
    }
  });
}

function shoppingnum(number) {
  document.querySelector(".circlenum").innerText = `${number}`;
}
function shoppingbtn() {
  window.location.href = "shoppingcart.html";
}
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
