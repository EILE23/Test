let saveData = JSON.parse(window.localStorage.getItem("data")) || [];
// 넣으면 망함 문법 저장용
const localdata = JSON.parse(window.localStorage.getItem("data"));
console.log(saveData);
const mainwrap = document.querySelector(".main-wrap");
const imagearr = [
  "../daiso/img.jpg",
  "../daiso/img1.jpg",
  "../daiso/img2.jpg",
  "../daiso/img3.jpg",
  "../daiso/img4.jpg",
  "../daiso/img5.jpg",
  "../daiso/img6.jpg",
  "../daiso/img7.jpg",
  "../daiso/img8.jpg",
  "../daiso/img9.jpg",
  "../daiso/img10.jpg",
  "../daiso/img11.jpg",
  "../daiso/img12.jpg",
  "../daiso/img13.jpg",
  "../daiso/img14.jpg",
  "../daiso/img15.jpg",
];
let randomnum = 0;
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

if (localdata) {
  createtable(localdata);
}
//<img class = "img" src = "${imagearr[randomnum]}" alt = "..."/>
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
    content.map((item) => {
      tablewrap.innerHTML += `
    <tr class = "tr${item.id}">
    <td class = "id${item.id}">${item.id}<img class = "img" src = "${item.img}" alt = "..."/></td>
      <td class = "name${item.id}">${item.name}</td><td class = "age${item.id}">${item.age}</td><td class = "his${item.id}">${item.history}</td>
    <td>${item.nickname}
    </td><td><button class = "buttonb buttons${item.id}" onclick = "cor(${item.id})">수정</button><button class = "buttonb buttonr${item.id} none" onclick = "cord(${item.id})">수정완료</button><button class = "buttonb removebtn${item.id}"onclick = "remove(${item.id})">삭제</button></td>
    </tr>`;
      document.querySelector(`.id${item.id}`).src;
    });
  } else content.innerHTML = "";
}
// id를 가진 history를 찾은 뒤에
// 그 history 박스 안에 input 생성후 input안에 기존 history값 넣은 뒤 keydown enter 하면 값이 들어가도록..??

// // // // // // // 삭제
// function rename(item) {
//   const rename = item;
//   rename.textContent = "수정완료?";
// }
function remove(content) {
  saveData.map((item, i) => {
    if (item.id == content) {
      console.log(saveData.splice(i, 1));
    }
  });
  window.localStorage.setItem("data", JSON.stringify(saveData));
  document.querySelector(`.tr${content}`).remove();
}
// // // // // // //  수정 값에서 input 생성시 input 속성에 넣을거
function cord(item) {
  const tdname = document.querySelector(`.name${item}`);
  const tdage = document.querySelector(`.age${item}`);
  const tdhis = document.querySelector(`.his${item}`);
  const inname = document.querySelector(`.inname${item}`);
  const inage = document.querySelector(`.inage${item}`);
  const inhis = document.querySelector(`.inhis${item}`);
  const btnid1 = document.querySelector(`.buttons${item}`);
  const btnid2 = document.querySelector(`.buttonr${item}`);
  console.log(inname.value, inage.value, inhis.value, tdname, tdage, tdhis);
  const localdata = JSON.parse(window.localStorage.getItem("data"));
  let dataid = "";
  localdata.map((cem) => {
    if (cem.id == item) {
      dataid = cem;
    }
  });
  if (inhis.value.length > 15 && inage.value <= 150) {
    localdata.map((iten, i) => {
      if (iten.id == dataid.id) {
        localdata[i].name = inname.value;
        localdata[i].age = inage.value;
        localdata[i].history = inhis.value;
        window.localStorage.setItem("data", JSON.stringify(localdata));
      }
    });
    btnid1.classList.remove("none");
    btnid2.classList.add("none");
    console.log(dataid);
    tdname.innerHTML = `${inname.value}`;
    tdage.innerHTML = `${inage.value}`;
    tdhis.innerHTML = `${inhis.value}`;
  } else if (inage.value > 150) {
    alert("나이가 너무 많습니다");
    return;
  } else if (inhis.value.length <= 15) {
    alert("경력이 너무 짧습니다");
    return;
  }
}
// // // // // // // onclick 수정
let buttonnumber = 0;
function onlynumber(item, ptag) {
  const inage = document.querySelector(`.inage${item}`);
  const inhis = document.querySelector(`.inhis${item}`);
  if (ptag == "his") {
    const phis = document.querySelector(`.phis${item}`);
    if (inhis.value.length <= 15 && inhis.value.length >= 1) {
      console.log(inhis.value);

      phis.textContent = "경력의 길이가 짧습니다";
    } else if (inhis.value == "") phis.textContent = "";
    else phis.textContent = "";
  }
  if (ptag == "age") {
    const page = document.querySelector(`.page${item}`);
    if (Number(inage.value) > 150) {
      page.textContent = "나이가 너무 많습니다";
    } else if (inage.value.trim() == "") page.textContent = "";
    else page.textContent = "";
  }
}
function cor(item) {
  const tdname = document.querySelector(`.name${item}`);
  const tdage = document.querySelector(`.age${item}`);
  const tdhis = document.querySelector(`.his${item}`);
  const btnid1 = document.querySelector(`.buttons${item}`);
  const btnid2 = document.querySelector(`.buttonr${item}`);
  btnid1.classList.add("none");
  btnid2.classList.remove("none");
  const localdata = JSON.parse(window.localStorage.getItem("data"));
  let dataid = "";
  localdata.map((cem) => {
    if (cem.id == item) {
      dataid = cem;
    }
  });
  console.log(dataid);
  tdname.innerHTML = `<input class = "ininput inname${item}"value = "${dataid.name}" )">`;
  tdage.innerHTML = `<input type = "number" oninput = "onlynumber(${item},'age')" class = "ininput inage${item}" value = "${dataid.age}"><p class = "page${item}"></p>`;
  tdhis.innerHTML = `<input class = "ininput inhis${item}" oninput = "onlynumber(${item}, 'his')" value = "${dataid.history}"><p class = "phis${item}"></p>`;
}
// onblur = "inputout(${item}
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

// // // // // // // //

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

// // // // // // // //

function textprint1() {
  const IID = document.querySelector(".input-id").value;
  const NName = document.querySelector(".input-name").value;
  const AAge = document.querySelector(".input-age").value;
  const HHistory = document.querySelector(".input-history").value;
  const NNickname = document.querySelector(".input-nickName").value;
  const LLocaldata = JSON.parse(window.localStorage.getItem("data"));
  let checkid = 1;
  let opener = false;
  let opener1 = false;
  let opener2 = false;
  let opener3 = false;
  let opener4 = false;
  let opener5 = false;
  let opener6 = false;
  if (LLocaldata) {
    const idcheck = LLocaldata.some((item) => item.id === IID);
    if (idcheck) {
      checkid = 0;
    } else {
      checkid = 1;
    }
  }
  let countname = 0;
  if (LLocaldata) {
    countname = LLocaldata.filter((item) => item.nickname === NNickname).length;
  }
  if (countname >= 1 || HHistory.length <= 2) {
    checknickname = 0;
  } else {
    checknickname = 1;
  }
  let checkhis = HHistory.length;
  if (Number(IID)) opener = true;
  else opener = false;
  if (Number(AAge) <= 150 && Number(AAge) >= 1) opener1 = true;
  else opener1 = false;
  if (checkhis > 15) opener2 = true;
  else opener2 = false;
  if (checkid >= 1) opener3 = true;
  else opener3 = false;
  // checknickname >= 1 &&
  if (NName.length >= 1) opener4 = true;
  else opener4 = false;
  if (countname == 0) opener5 = true;
  else opener5 = false;
  if (NNickname.length > 2) opener6 = true;
  else opener6 = false;
  if (
    opener &&
    opener1 &&
    opener2 &&
    opener3 &&
    opener4 &&
    opener5 &&
    opener6
  ) {
    document.querySelector(".buttonc").disabled = false;
  }
  if (
    !opener ||
    !opener1 ||
    !opener2 ||
    !opener3 ||
    !opener4 ||
    !opener5 ||
    !opener6
  ) {
    document.querySelector(".buttonc").disabled = true;
  }
  console.log(opener, opener1, opener2, opener3, opener4, opener5, opener6);
}

// // // // // // // //
let number = 0;
function textprint(item) {
  const IID = document.querySelector(".input-id").value;
  const NName = document.querySelector(".input-name").value;
  const AAge = document.querySelector(".input-age").value;
  const HHistory = document.querySelector(".input-history").value;
  const NNickname = document.querySelector(".input-nickName").value;

  // const inputarr2 = [IID, NName, AAge, HHistory, NNickname];
  if (isNaN(IID) && item == "id") {
    idtext.classList.remove("none");
    idtext.textContent = "아이디는 숫자만 가능합니다.";
    idcheck = false;
    console.log(number++);
  } else if ((!isNaN(IID) && item == "id") || IID.length == 0) {
    idtext.classList.add("none");
    idtext.textContent = "";
    idcheck = true;
  }
  // let number = 0;
  // HHistory.split("").map((item, i) => {
  //   number = i;
  // });
  if (Number(AAge) > 150 && item == "age") {
    agetext.classList.remove("none");
    agetext.textContent = "나이가 너무 많습니다";
    console.log(number++);
  }
  if (Number(AAge) <= 150 && item == "age") {
    agetext.classList.add("none");
    agetext.textContent = "";
  }
  if (HHistory.length <= 15 && item == "history") {
    historytext.classList.remove("none");
    historytext.textContent = "경력의 길이가 짧습니다.";
    console.log(number++);
  }
  if ((HHistory.length > 15 && item == "history") || HHistory.length == 0) {
    historytext.classList.add("none");
    historytext.textContent = "";
  }

  // console.log(localdata.id);
  const LLocaldata = JSON.parse(window.localStorage.getItem("data"));
  if (LLocaldata && item == "id") {
    const idcheck = LLocaldata.some((item) => item.id === IID);
    if (idcheck) {
      idtext.classList.remove("none");
      idtext.textContent = "중복 아이디입니다";
      console.log(idcheck);
    } else {
      idtext.classList.add("none");
      idtext.textContent = "";
    }
  }
  let countname = 0;
  if (LLocaldata && item == "nickName") {
    countname = LLocaldata.filter((item) => item.nickname === NNickname).length;
  }
  if (item == "nickName") {
    if (countname >= 1) {
      nicknametext.classList.remove("none");
      nicknametext.textContent = "중복 닉네임입니다";
      console.log(NNickname.length);
      document.querySelector(".buttonc").disabled = true;
    } else if (countname == 0 || NNickname.length > 2) {
      nicknametext.classList.add("none");
      nicknametext.textContent = "";
    }
    if (NNickname.length <= 2 && NNickname.length >= 1) {
      nicknametext.classList.remove("none");
      nicknametext.textContent = "닉네임은 두 글자 이상으로 적어야 합니다.";
      document.querySelector(".buttonc").disabled = true;
      console.log(NNickname.length);
    }
  }
}
//includes(값) -> 값이 있는지 확인 가능 있으면 true 없으면 false => boolean ??
// // // // // // // //

function saveddata(inputID, inputName, inputAge, inputHistory, inputNickname) {
  // const saveData = window.localStorage.getItem("savedata");
  randomnum = Math.floor(Math.random() * 16);
  const Datasave = {
    id: inputID,
    name: inputName,
    age: inputAge,
    history: inputHistory,
    nickname: inputNickname,
    img: imagearr[randomnum],
  };
  saveData.push(Datasave);
  // const localdata = JSON.parse(window.localStorage.getItem("data"));
  window.localStorage.setItem("data", JSON.stringify(saveData));

  const localdata = JSON.parse(window.localStorage.getItem("data"));
  const tablewrap = document.querySelector(".tablewrap");
  tablewrap.innerHTML = "";
  createtable(localdata);
}

// // // 함수별 분류 // // // //

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
  if (number < 15 && number >= 1) {
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
    LLocaldata.map((item) => {
      if (item.id === Number(inputID)) {
        idtext.classList.remove("none");
        idtext.textContent = "중복 아이디입니다.";
        setTimeout(nonetext, 3000);
        open = true;
      }
    });
  }
  let countname = 0;
  if (LLocaldata) {
    countname = LLocaldata.filter(
      (item) => item.nickname === inputNickname
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
