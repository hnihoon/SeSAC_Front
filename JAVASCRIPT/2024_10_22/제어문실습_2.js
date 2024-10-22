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

// let a = 5;
// let b = 2;

// a의 값을 임시로 저장
// let tmp = a;

// b의 값을 a에 넣고
// a = b;

// b에 a의 예전 값을 넣습니다.
// b = tmp;

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
// for (let num = 1; num <= 30; num++) {
//   if (num % 2 && num % 3) {
//     console.log(num);
//   }
// }

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

// const jun = {
//   name: 'jun',
//   age: 15,
//   gender: 'M',
// };

// jun['name'];
// jun.name;

// 주어진 테이블의 데이터를 "people" 변수에 저장하시오.
// let people = [
//   {
//     name: 'jun',
//     age: 15,
//     gender: 'M',
//   },
//   {
//     name: 'ken',
//     age: 36,
//     gender: 'F',
//   },
//   {
//     name: 'alex',
//     age: 37,
//     gender: null,
//   },
// ];
// // // 사람에 대한 정보를 각각 출력하시오(형식은 자유롭게)
// for (let person of people) {
//   // console.log(person);
//   for (let key in person) {
//     let value = person[key];
//     console.log(key, value);
//   }
//   console.log();
// }

// console.log();
// // 이름이 alex인 사람에 대한 정보를 출력하시오
// // 전체 사람에 대해 한사람씩 확인을 합니다.
// for (let person of people) {
//   // 그사람 'alex'인지 확인합니다.
//   // 그사람의 이름이 alex인지를 확인합니다.
//   const name = person.name;
//   if (name === 'alex') {
//     console.log(person);
//   }
// }

// // 이름이 alex인 사람의 나이를 출력하시오
// console.log();

// for (let person of people) {
//   const name = person.name;
//   if (name === 'alex') {
//     const age = person.age;
//     console.log(age);
//   }
// }

// // 이름을 활용하여 각 사람의 데이터에 쉽게 접근할 수 있도록 people 변수를 수정하시오.

// people = {
//   jun: {
//     name: 'jun',
//     age: 15,
//     gender: 'M',
//   },
//   ken: {
//     name: 'ken',
//     age: 36,
//     gender: 'F',
//   },
//   alex: {
//     name: 'alex',
//     age: 37,
//     gender: null,
//   },
// };

// people.jun;

let peoplearr = [
  {
    name: 'jun',
    age: 15,
    gender: 'M',
  },
  {
    name: 'ken',
    age: 36,
    gender: 'F',
  },
  {
    name: 'alex',
    age: 37,
    gender: null,
  },
];

let people = {};
for (let person of peoplearr) {
  people[person.name] = person;
}
console.log(people);
