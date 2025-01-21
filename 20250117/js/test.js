const data = [
  {
    id: 1,
    name: "김철수",
    age: 14,
    careers: [
      {
        title: "놀기",
      },
      {
        title: "먹기",
      },
      {
        title: "자기",
      },
      {
        title: "숨쉬기",
      },
    ],
    nickName: [
      {
        name: "김안철수",
      },
      {
        name: "김김안철수",
      },
      {
        name: "박터짐",
      },
    ],
  },
  {
    id: 2,
    name: "영희",
    age: 35,
    careers: [
      {
        title: "놀기",
      },
      {
        title: "자전거타기",
      },
      {
        title: "오렌지먹기",
      },
      {
        title: "사과부시기",
      },
    ],
    nickName: [
      {
        name: "김영희",
      },
      {
        name: "야생사자",
      },
      {
        name: "오올이",
      },
    ],
  },
  {
    id: 3,
    name: "박광철",
    age: 20,
    careers: [
      {
        title: "일수나가기",
      },
      {
        title: "돈빌려주기",
      },
      {
        title: "공무집행방해",
      },
      {
        title: "무면허운전하기",
      },
    ],
    nickName: [
      {
        name: "대흥역호랑이와사자두마리",
      },
      {
        name: "마포불주먹",
      },
      {
        name: "전설",
      },
      {
        name: "경찰의적",
      },
    ],
  },
  {
    id: 4,
    name: "안철수",
    age: 19,
    careers: [
      {
        title: "놀기",
      },
      {
        title: "자전거타기",
      },
      {
        title: "오렌지먹기",
      },
      {
        title: "사과부시기",
      },
    ],
    nickName: [
      {
        name: "김영희",
      },
      {
        name: "야생사자야생사자야생사자야생사자야생사자야생사자",
      },
      {
        name: "오올이",
      },
    ],
  },
  {
    id: 99,
    name: "나영희",
    age: 63,
    careers: [
      {
        title: "놀기",
      },
      {
        title: "자전거타기",
      },
      {
        title: "오렌지먹기",
      },
      {
        title: "사과부시기",
      },
    ],
    nickName: [
      {
        name: "김영희",
      },
      {
        name: "야생사자",
      },
      {
        name: "오올이",
      },
    ],
  },
];
function nameclick(item) {
  console.log(item);
  data.forEach((value) => {
    const career = value.careers;
    const nickname = value.nickName;
    let careerbox = [];
    let nicknamebox = [];
    career.map((item) => {
      careerbox.push(item.title);
    });
    nickname.map((item) => {
      nicknamebox.push(item.name);
    });
    if (item == value.id) {
      alert(`이 사람의 이름은 ${value.name} 이고 나이는 ${value.age}이고 ${
        20 < value.age ? "성인" : "미성년자"
      } 입니다.
      취미는 ${careerbox.join(",")}가 있고 별명은 ${nicknamebox.join(
        ","
      )}가 있습니다`);
    }
  });
}

function menucreative() {
  const mainwrap = document.querySelector(".main-wrap");

  mainwrap.innerHTML += `<table border = "1" class="tablewrap">
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>취미</th>
          <th>별명</th>
        </tr>
      </table>
      <div class="lastwrap">
      </div>`;
  const tablewrap = document.querySelector(".tablewrap");
  const lastwrap = document.querySelector(".lastwrap");

  data.map((item) => {
    tablewrap.innerHTML += `
    <tr onclick = nameclick(${item.id})>
      <td>${item.name}</td><td>${item.age}</td><td>${item.careers
      .map((value) => value.title)
      .join("<br>")}</td>
    <td>${item.nickName.map((value) => value.name).join("<br>")}
    </td>
    </tr>`;
  });

  data.map((item) => {
    if (item.age < 20) {
      lastwrap.innerHTML += `<div>${
        item.name
      }씨는 미성년자이고 취미는 ${item.careers
        .map((value) => value.title)
        .join(",")}이며<br> 별명으로는${item.nickName
        .map((value) => value.name)
        .join(",")}입니다 </div>`;
    }
    if (item.age >= 20) {
      lastwrap.innerHTML += `<div>${
        item.name
      }씨는 성인이고 취미는 ${item.careers
        .map((value) => value.title)
        .join(",")}이며<br> 별명으로는${item.nickName
        .map((value) => value.name)
        .join(",")}입니다 </div>`;
    }
  });
  let arr = [];
  data.map((item) => {
    item.nickName.map((length) => {
      arr.push(length.name);
    });
  });
  const longest = arr.reduce((a, b) => (a.length > b.length ? a : b), "");
  lastwrap.innerHTML += `<div>이 중 별명 길이가 가장 긴 별명은 ${longest} 입니다</div>`;
}

menucreative();
