// 1. 다음 점수에 따라 등급을 출력하는 코드를 작성하시오.
//- 90 이상: "A" /  80 이상: "B" /  그 외: "C"
//- 단, 100점은 A학점과 더불어 `교수님의 총애`를, 40점 미만은 C학점과 더불어 `학사경고`를 출력하시오.
// let score = 100;

// if (score >= 90) {
//   console.log('A');

//   if (score === 100) {
//     console.log('교수님의 총애');
//   }
// } else if (score >= 80) {
//   console.log('B');
// } else {
//   console.log('C');
//   if (score < 40) {
//     console.log('학사경고');
//   }
// }

//새싹이는 주말이거나 일과시간 이후면 휴식을 취할 수 있다. 단, 주말의 일과시간 이후에는 자기개발을 할 예정이다.
// 일과시간이 09시 ~ 18시일 때, 변수의 상태에 따라 일 / 휴식/ 자기개발을 출력하시오.
const isWeekend = true;
const nowTime = 18;

const today = new Date().getDay();

console.log(today);

if (nowTime >= 9 && nowTime <= 18 && today > 0 && today < 6) {
  console.log(isWeekend);
  console.log('일');
} else {
  console.log('휴식');
  if ((today == 0 || today == 6) && nowTime > 18) {
    console.log('자기개발');
  }
}

let isworkingHour;

// 9~18시에는 workingHour == true
// 아닐때는 workingHour == false

if (9 <= nowTime && isworkingHour <= 18) {
  isworkingHour = true;
} else {
  isworkingHour = false;
}

let toDo;

if (isWeekend) {
  if (isworkingHour) {
    toDo = '휴식';
  } else {
    toDo = '자기개발';
  }
} else {
  // 주말이 아닌 경우
  if (isworkingHour) {
    toDo = '일';
  } else {
    toDo = '휴식';
  }
}
