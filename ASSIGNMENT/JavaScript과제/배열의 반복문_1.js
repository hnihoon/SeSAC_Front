// 1. 배열의 원소를 출력하는 반복문을 작성한다.
// const arr = [1, 2, 3, 4, 5];

// for (index of arr) {
//   console.log(index);
// }

//2. 각 원소의 제곱을 출력하는 반복문을 작성한다.
// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for (index of arr) {
//   sum = index * index;
//   console.log(sum);
// }

//3. 원소가 짝수면 출력하는 조건문과 반복문을 작성한다.
// arr = [0, 1, 2, 3, 4, 5];

// for (index of arr) {
//   if (!(index == 0) && index % 2 == 0) {
//     console.log(index);
//   }
// }

//4. 객체의 키와 값을 출력하는 반복문을 작성한다.
let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

for (key in person) {
  console.log(key + ', ' + person[key]);
}
