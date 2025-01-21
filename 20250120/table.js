let saveData = [];
// window.localStorage.setItem("data", JSON.stringify(saveData));
const localdata = JSON.parse(window.localStorage.getItem("data"));
if (localdata) saveData.push(...localdata);

const mainwrap = document.querySelector(".main-wrap");

mainwrap.innerHTML += `<table border = "1" class="tablewrap">
        <tr>
        <th>아이디</th>
          <th>이름</th>
          <th>나이</th>
          <th>경력</th>
          <th>별명</th>
        </tr>
      </table>`;
if (localdata) {
  createtable(localdata);
}
function createtable(content) {
  const mainwrap = document.querySelector(".main-wrap");

  mainwrap.innerHTML = `<table border = "1" class="tablewrap">
        <tr>
        <th>아이디</th>
          <th>이름</th>
          <th>나이</th>
          <th>경력</th>
          <th>별명</th>
        </tr>
      </table>`;
  const tablewrap = document.querySelector(".tablewrap");
  if (content) {
    content.map((item) => {
      tablewrap.innerHTML += `
    <tr>
    <td>${item.id}</td>
      <td>${item.name}</td><td>${item.age}</td><td>${item.history}</td>
    <td>${item.nickname}
    </td>
    </tr>`;
    });
  } else content.innerHTML = "";
}
// saveData.push(datasave);

let num = 0;
// function notext(content, index) {
//   index.map((item, i) => {
//     if (item == "") [i].innerHTML = "값을 입력해주세요";
//   });
// }
const idtext = document.querySelector(".id-text");
const agetext = document.querySelector(".age-text");
const nametext = document.querySelector(".name-text");
const historytext = document.querySelector(".history-text");
const nicknametext = document.querySelector(".nickName-text");
function nonetext() {
  idtext.classList.add("none");
  agetext.classList.add("none");
  nametext.classList.add("none");
  historytext.classList.add("none");
  nicknametext.classList.add("none");
}
const textarr = [idtext, nametext, agetext, historytext, nicknametext];

function inputempty(content) {
  content = "";
}
function saveddata(inputID, inputName, inputAge, inputHistory, inputNickname) {
  // const saveData = window.localStorage.getItem("savedata");
  let datasave = {
    id: inputID,
    name: inputName,
    age: inputAge,
    history: inputHistory,
    nickname: inputNickname,
  };
  // const localdata = JSON.parse(window.localStorage.getItem("data"));
  saveData.push(datasave);
  window.localStorage.setItem("data", JSON.stringify(saveData));

  const localdata = JSON.parse(window.localStorage.getItem("data"));
  const tablewrap = document.querySelector(".tablewrap");
  tablewrap.innerHTML = "";
  createtable(localdata);
}

function savedata() {
  let open = false;
  const inputID = document.querySelector(".input-id").value;
  const inputName = document.querySelector(".input-name").value;
  const inputAge = document.querySelector(".input-age").value;
  const inputHistory = document.querySelector(".input-history").value;
  const inputNickname = document.querySelector(".input-nickName").value;
  const inputarr = [inputID, inputName, inputAge, inputHistory, inputNickname];
  inputarr.forEach((item, i) => {
    if (item === "") {
      textarr[i].classList.remove("none");
      textarr[i].textContent = "값을 입력해주세요.";
      setTimeout(nonetext, 3000);
      open = true;
    }
  });
  let number = 0;
  inputHistory.split("").map((item, i) => {
    number = i;
  });
  if (number < 15) {
    historytext.classList.remove("none");
    historytext.textContent = "경력의 길이가 짧습니다.";
    inputempty(inputHistory);
    setTimeout(nonetext, 3000);
    open = true;
    return;
  }
  if (!Number(inputID)) {
    idtext.classList.remove("none");
    idtext.textContent = "아이디는 숫자만 가능합니다.";
    setTimeout(nonetext, 3000);
    open = true;
    return;
  }
  // console.log(localdata.id);
  const LLocaldata = JSON.parse(window.localStorage.getItem("data"));
  if (LLocaldata) {
    LLocaldata.map((item) => {
      if (item.id === inputID) {
        idtext.classList.remove("none");
        idtext.textContent = "중복 아이디입니다.";
        setTimeout(nonetext, 3000);
        open = true;
        return;
      }
    });
  }

  if (open) return console.log("오류");

  if (open === false) {
    console.log("open=false");
    saveddata(inputID, inputName, inputAge, inputHistory, inputNickname);
    inputID.innerHTML = "";
    inputName.innerHTML = "";
    inputAge.innerHTML = "";
    inputHistory.innerHTML = "";
    inputNickname.innerHTML = "";
  }
}
