const numbers = [1, 2, 3, 4];

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);

// filter를 가지고 소수만 모아보기
const filter = numbers.filter((num) => {
  let isPrime = true;
  if (num == 1) {
    console.log(123);
    isPrime = false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
});

console.log(filter);

// function checkPrime(num) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       return isPrime;
//     }
//   }
//   return isPrime;
// }

// const primeNumber = numbers.filter((num) => checkPrime(num));
