let saveData = {};
// window.localStorage.setItem("data", JSON.stringify(saveData));
const localdata = JSON.parse(window.localStorage.getItem("data"));
if (localdata) saveData = localdata;
console.log(saveData);
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
          <th>관리</th>
        </tr>
      </table>`;
  const tablewrap = document.querySelector(".tablewrap");
  if (content) {
    Object.entries(content).map(([item, get]) => {
      tablewrap.innerHTML += `
    <tr class = "tr">
    <td>${item}</td>
      <td>${get.name}</td><td>${get.age}</td><td class = "history" data-id = ${item}>${get.history}</td>
    <td>${get.nickname}
    </td><td><button class = "buttonb" onclick = "cor(${item})">수정</button><button class = "buttonb"onclick = "remove(${item})">삭제</button></td>
    </tr>`;
    });
  } else content.innerHTML = "";
}
// 수정 버튼을 누르면 해당하는 아이디 값을 받고 그 아이디 값이 담긴 부모요소를 찾은 후 그 부모요소 아래에 해당하는 id를 가진 history를 찾은 뒤에
// 그 history 박스 안에 input 생성후 input안에 기존 history값 넣은 뒤 keydown enter 하면 값이 들어가도록
// saveData.push(datasave);
function remove(content) {
  if (saveData[content]) {
    delete saveData[content];
  }

  window.localStorage.setItem("data", JSON.stringify(saveData));
  const localdata = JSON.parse(window.localStorage.getItem("data"));
  createtable(localdata);
}
function cortext(item, text) {
  const tdtd = document.querySelector(`td[data-id="${item}"]`);
  if (text.length > 15) {
    saveData[item].history = text;
    window.localStorage.setItem("data", JSON.stringify(saveData));
    const localdata = JSON.parse(window.localStorage.getItem("data"));
    createtable(localdata);
  } else {
    const tdtext = text;
    alert("15자 이상으로 적어주세요");
    tdtd.innerHTML = `${saveData[item].history}`;
  }
}
function cor(item) {
  const tdtd = document.querySelector(`td[data-id="${item}"]`);
  const tdtext = tdtd.innerText;

  tdtd.innerHTML = `<input class = "ininput" type = "text" value = "${tdtext}" onblur = "cortext(${item},this.value)"/>`;
}

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

function nonebutton() {
  document.querySelector(".buttonc").disabled = true;
}
const IID = document.querySelector(".input-id");
const NName = document.querySelector(".input-name");
const AAge = document.querySelector(".input-age");
const HHistory = document.querySelector(".input-history");
const NNickname = document.querySelector(".input-nickName");
const inputarr2 = [IID, NName, AAge, HHistory, NNickname];

// inputarr2.forEach((item) => {
//   item.addEventListener("keyup", () => {
//     if (!item.value) {
//       document.querySelector(".buttonc").disabled = true;
//     }
//   });
// });
function textprint1() {
  const IID = document.querySelector(".input-id").value;
  const NName = document.querySelector(".input-name").value;
  const AAge = document.querySelector(".input-age").value;
  const HHistory = document.querySelector(".input-history").value;
  const NNickname = document.querySelector(".input-nickName").value;
  const LLocaldata = JSON.parse(window.localStorage.getItem("data"));
  let checkid = 1;
  let checknickname = 1;
  if (LLocaldata) {
    let ID = Object.keys(LLocaldata);
    Object.keys(LLocaldata).map((itm) => {
      const item = LLocaldata[itm];
      if (ID.includes(IID) && IID) {
        checkid = 0;
      } else if (itm !== Number(IID) && IID) {
        checkid = 1;
      }
      if (item.nickname == NNickname && NNickname) {
        checknickname = 0;
      } else if (item.nickname !== NNickname && NNickname) {
        checknickname = 1;
      }
    });
  } else {
    checkid = 1;
    checknickname = 1;
  }
  let checkhis = HHistory.length;
  if (
    Number(IID) &&
    Number(AAge) < 150 &&
    checkhis > 15 &&
    checkid >= 1 &&
    checknickname >= 1 &&
    NName
  ) {
    document.querySelector(".buttonc").disabled = false;
  } else if (
    !(
      Number(IID) &&
      Number(AAge) < 150 &&
      checkhis > 15 &&
      checkid >= 1 &&
      checknickname >= 1 &&
      NName
    )
  ) {
    document.querySelector(".buttonc").disabled = true;
  }
  console.log(IID, AAge, checkhis, checkid, checknickname);
}

// input 키 입력시 div 텍스트 추가
function textprint(item) {
  const IID = document.querySelector(".input-id").value;
  const NName = document.querySelector(".input-name").value;
  const AAge = document.querySelector(".input-age").value;
  const HHistory = document.querySelector(".input-history").value;
  const NNickname = document.querySelector(".input-nickName").value;
  // const inputarr2 = [IID, NName, AAge, HHistory, NNickname];

  if (!Number(IID) && item == "id" && IID.length !== 0) {
    idtext.classList.remove("none");
    idtext.textContent = "아이디는 숫자만 가능합니다.";
  }
  if ((Number(IID) && item == "id" && IID.length !== 0) || IID.length == 0) {
    idtext.classList.add("none");
    idtext.textContent = "";
  }
  let number = 0;
  HHistory.split("").map((item, i) => {
    number = i;
  });
  if (Number(AAge) > 150 && item == "age") {
    agetext.classList.remove("none");
    agetext.textContent = "나이가 너무 많습니다";
  }
  if (Number(AAge) <= 150 && item == "age") {
    agetext.classList.add("none");
    agetext.textContent = "";
  }
  if (number <= 15 && number > 1 && item == "history") {
    historytext.classList.remove("none");
    historytext.textContent = "경력의 길이가 짧습니다.";
  }
  if (number > 15 && item == "history") {
    historytext.classList.add("none");
    historytext.textContent = "";
  }
  // console.log(localdata.id);
  const LLocaldata = JSON.parse(window.localStorage.getItem("data"));
  if (LLocaldata && item == "id") {
    const ID = Object.keys(LLocaldata);

    if (ID.includes(IID)) {
      idtext.classList.remove("none");
      idtext.textContent = "중복 아이디입니다.";
    } else if (content !== IID) {
      idtext.classList.add("none");
      idtext.textContent = "";
    }
  }
  let countname = 0;
  if (LLocaldata && item == "nickName") {
    countname = Object.keys(LLocaldata).filter(
      (item) => LLocaldata[item].nickname === NNickname
    ).length;
  }
  if (countname >= 1 && item == "nickName") {
    nicknametext.classList.remove("none");
    nicknametext.textContent = "중복 닉네임입니다";
  } else if (countname == 0 && item == "nickName") {
    nicknametext.classList.add("none");
    nicknametext.textContent = "";
  }
}

// savedata() 함수 저장하는 곳
function saveddata(inputID, inputName, inputAge, inputHistory, inputNickname) {
  // const saveData = window.localStorage.getItem("savedata");
  saveData[inputID] = {
    name: inputName,
    age: inputAge,
    history: inputHistory,
    nickname: inputNickname,
  };

  // const localdata = JSON.parse(window.localStorage.getItem("data"));
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
  if (Number(inputAge) > 150) {
    agetext.classList.remove("none");
    agetext.textContent = "나이가 너무 많습니다";
    setTimeout(nonetext, 3000);
    open = true;
  }
  if (number < 15 && number > 1) {
    historytext.classList.remove("none");
    historytext.textContent = "경력의 길이가 짧습니다.";
    setTimeout(nonetext, 3000);
    open = true;
  }
  if (!Number(inputID)) {
    idtext.classList.remove("none");
    idtext.textContent = "아이디는 숫자만 가능합니다.";
    setTimeout(nonetext, 3000);
    open = true;
  }
  // console.log(localdata.id);
  const LLocaldata = JSON.parse(window.localStorage.getItem("data"));
  if (LLocaldata) {
    Object.keys(LLocaldata).map((item) => {
      if (LLocaldata[item] === Number(inputID)) {
        idtext.classList.remove("none");
        idtext.textContent = "중복 아이디입니다.";
        setTimeout(nonetext, 3000);
        open = true;
      }
    });
  }
  let countname = 0;
  if (LLocaldata) {
    countname = Object.keys(LLocaldata).filter(
      (item) => LLocaldata[item].nickname === inputNickname
    ).length;
  }
  if (countname >= 1) {
    nicknametext.classList.remove("none");
    nicknametext.textContent = "중복 닉네임입니다";
    setTimeout(nonetext, 3000);
    open = true;
  }

  if (open) return console.log("오류");

  if (open === false) {
    console.log("open=false");
    saveddata(inputID, inputName, inputAge, inputHistory, inputNickname);
    document.querySelector(".input-id").value = "";
    document.querySelector(".input-name").value = "";
    document.querySelector(".input-age").value = "";
    document.querySelector(".input-history").value = "";
    document.querySelector(".input-nickName").value = "";
    document.querySelector(".buttonc").disabled = true;
  }
}
