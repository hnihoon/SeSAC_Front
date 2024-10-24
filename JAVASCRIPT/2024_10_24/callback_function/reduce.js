// const nums = [1, 2, 3, 4];

// const mulNums = nums.reduce((acc, cur) => {
//   console.log(acc, cur);
//   return acc + cur;
// }, 1);

// console.log(mulNums);

//minValue를 reduce를 통해 계산하시오.
const numbers = [5, 8, 2, 5, 9, 4];

const minValue = numbers.reduce((acc, cur) => {
  console.log(acc, cur);
  if (acc > cur) {
    acc = cur;
  }
  return acc;
});

console.log(minValue);
