// let, const - block {}

// 예시1
// if (true) {
//   let value = 123;
//   console.log(value); //value 접근 가능
// }

// console.log(value); //value 접근 불가

// // 예시2
// for (let i = 0; i < 3; i++) {
//   let value2 = 123;
// }

// console.log(value2); //value 접근 불가

////////////////////////////////////////////////////////////

const outerValue = 'outer밖에 있는 값'; //글로벌 변수

if (true) {
  console.log(outerValue); //outerValue 접근 가능
  const innerValue = '안에 있는 값';
}

const innerValue = '밖에 있느 값';
console.log(innerValue); //if 안에 innerValue 접근 불가
