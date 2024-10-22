//1.구구단 3단 출력하기

//for문
// const num = 3;
// for (let i = 1; i <= 9; i++) {
//   console.log(`3* ${i} = ${num * i}`);
// }

// //while문
// let i = 1;
// while (true) {
//   console.log(`3 * ${i} = ${num * i}`);
//   i++;
//   if (i > 9) {
//     break;
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////

//2. 출석번호를 포함하여 '1번 jun', '4번 lynda'의 형태로 출석 부르기
// const names = ['jun', 'beemo', 'ken', 'lynda'];

// //for문
// // for (let i = 0; i < names.length; i++) {
// //   console.log(`${i + 1}번 ${names[i]}`);
// // }

// //while문
// let i = 0;
// while (true) {
//   if (i >= names.length) {
//     break;
//   }
//   console.log(`${i + 1}번 ${names[i]}`);
//   i++;
// }

//////////////////////////////////////////////////////////////////////////////////////////

// 3.
// const names = ['jun', 'beemo', 'ken']
// const ages = [18, 28, 37] 일 때,
//
// 18살 jun
// 28살 beemo
// 37살 ken
// 을 출력하시오.

// const names = ['jun', 'beemo', 'ken'];
// const ages = [18, 28, 37];

//for문
// for (let i = 0; i < names.length; i++) {
//   console.log(`${ages[i]}살 ${names[i]}`);
// }

//while문
// let i = 0;
// while (true) {
//   if (i >= ages.length) {
//     break;
//   }
//   console.log(`${ages[i]} 살 ${names[i]}`);
//   i++;
// }

//////////////////////////////////////////////////////////////////////////////////////////

//4.주어진 리스트의 합계를 계산하기
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

//for문
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// console.log(sum);

//while문
let i = 0;
while (true) {
  if (i >= nums.length) {
    break;
  }
  sum += nums[i];
  i++;
}
console.log(sum);
