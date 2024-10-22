//1. 40 이하의 3의 배수를 출력하세요

// 방법1(My)
// for (let i = 0; i <= 40; i++) {
//   if (i != 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }

// 방법2
// for (let num = 1; num * 3 <= 40; num++) {
//   console.log(num * 3);
// }

// 방법3
// for (let num = 3; num <= 40; num += 3) {
//   console.log(num);
// }

////////////////////////////////////////////////////////

//2. 1 ~ 100 중에 7의 배수의 개수를 출력하세요.

// 방법1(My)
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i != 0 && i % 7 == 0) {
//     sum++;
//   }
// }
// console.log(sum);

// 방법2
// count = 0;
// for (let num = 1; num <= 100; num++) {
//   if (num % 7) continue;
//   count++;
// }
// console.log(count);

// 방법3
// count = 0;
// for (let num = 7; num <= 100; num += 7) {
//   count++;
// }
// console.log(count);

// 방법4
// count = Math.floor(100 / 7);

// console.log(count);

//3. 1, 4, 5, 7인 경우를 제외하고 출력하세요
// const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];

// 방법1
// for (let num of arr) {
//   if (num === 1 || num === 4 || num === 5 || num === 7) {
//     continue;
//   }
//   console.log(num);
// }

// 방법2
// const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];
// const notLogSet = new Set([1, 4, 5, 7]);

// for (let num of arr) {
//   // if (num set에 들어있어?) continue
//   if (notLogSet.has(num)) continue;
//   console.log(num);
// }

// 방법3
// const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];
// const notLog = [1, 4, 5, 7];

// for (let num of arr) {
//   let isInNotLog = false;

//   for (let notLogNum of notLog) {
//     if (num === notLogNum) {
//       isInNotLog = true;
//       break;
//     }
//   }

//   if (isInNotLog) continue;
//   console.log(num);
// }
////////////////////////////////////////////////////////

// 4. 1 ~ 9 까지의 자연수 중 제곱한 수가 10 이상 50 이하인 자연수의 리스트를 출력해보세요.

// 방법1(My)
// let sum = 0;
// const arr = [];
// for (let i = 1; i <= 9; i++) {
//   sum = i * i;
//   if (sum >= 10 && sum <= 50) {
//     arr.push(sum);
//   }
// }
// console.log(arr);

// 방법2
// const answer = [];
// for (let num = 1; num < 10; num++) {
//   let square = num ** 2;

//   if (square >= 10 && square <= 50) {
//     console.log(num);
//     answer.push(num);
//   }
// }
// console.log(answer);

////////////////////////////////////////////////////////

// 5. 두개의 숫자에 대해. 두 수 사이에 속한 모든 정수의 합을 구하시오. (ex. 2와 5를 입력받는다면 2 + 3 + 4 + 5 = 14)

// 방법1
// let num1 = 2;
// const num2 = 5;
// let sum = 0;

// while (true) {
//   console.log(`${sum} + ${num1} = ${sum + num1}`);
//   sum += num1;
//   num1++;
//   if (num1 > num2) {
//     break;
//   }
// }
// console.log(sum);

// 방법2

let a = 5;
let b = 2;

// a의 값을 임시로 저장
let tmp = a;

// b의 값을 a에 넣고
a = b;

// b에 a의 예전 값을 넣습니다.
b = tmp;

// let num1 = 2;
// let num2 = 5;

// if (num1 < num2) {
//   let tmp = num1;
//   num1 = num2;
//   num2 = tmp;
// }

// let total = 0;
// for (let num = num1; num <= num2; num++) {
//   total += num;
// }

////////////////////////////////////////////////////////

// 6. 2의 배수 혹은 3의 배수를 제외하고 1~30까지 숫자를 출력하시오.
// `1 5 7 11 13 17 19 23 25 29`;

// 방법1
// for (let num = 1; num <= 30; num++) {
//   if (num % 2 === 0) continue;

//   if (num % 3 === 0) continue;

//   console.log(num);
// }

// 방법2
for (let num = 1; num <= 30; num++) {
  if (num % 2 && num % 3) {
    console.log(num);
  }
}

////////////////////////////////////////////////////////

// 7. 자연수 n이 주어졌을 때, n이 소수인지 판단하시오

// let num = 17;
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//   }
// }
// console.log(isPrime);

////////////////////////////////////////////////////////

// 8.
