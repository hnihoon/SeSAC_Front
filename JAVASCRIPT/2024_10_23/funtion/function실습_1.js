// 숫자를 입력 받아서, 1을 더하는 기능을 만들고 싶을때

// function pulsOne(num) {
//   let plusOneNumber = num + 1;

//   return plusOneNumber;
// }

// let x = 10;
// let y = pulsOne(x); // y => 11

// //1. 2를 곱하는 함수를 만들어보자.
// function gop(num) {
//   let gopnum = num * 2;
//   return gopnum;
// }

// const a = 10;
// const b = gop(a);

// console.log(b);

////////////////////////////////////////////////////////////

//2. 소수를 판별하는 함수를 만들어보자.

// function checkPrime(num) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//     }
//   }
//   return isPrime;
// }

// let num = 17;
// isPrime(num);
// console.log(isPrime);

////////////////////////////////////////////////////////////
//3. 구구단 중 n단을 return하는 함수를 만들어보자

function nDan(n) {
  let n_dan = [];
  for (let i = 1; i <= 9; i++) {
    n_dan.push(n * i);
  }
  return n_dan;
}

const gugudan = [];
for (let i = 1; i <= 9; i++) {
  gugudan.push(nDan(i));
}

console.log(gugudan);
