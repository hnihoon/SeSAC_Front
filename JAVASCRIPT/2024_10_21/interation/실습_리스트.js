// 3-3-1-1

// const names = ['jun', 'beemo', 'ken']
// const ages = [18, 28, 37] 일 때,
//
// 18살 jun
// 28살 beemo
// 37살 ken
// 을 출력하시오.

// const names = ['jun', 'beemo', 'ken'];
// const ages = [18, 28, 37];

// for (let index in names) {
//   console.log(ages[index] + '살 ' + names[index]);
// }

// 3-3-1-2

// const names = ['jun', 'beemo', 'ken'];
// const ages = [18, 28, 37];

// for (let index in names) {
//   let age = ages[index];
//   let name = names[index];

//   console.log(`${age}살 ${name}`);
// }

//////////////////////////////////////////////////////////////////

//3-3-2-1

// const names = ['jun', 'beemo', 'ken', 'lynda'];
// console.log(names.length);

//3-3-2-2

// let count = 0;
// for (let index in names) {
//   count++;
// }
// console.log(count);

//3-3-2-3

// const names = ['jun', 'beemo', 'ken', 'lynda'];
// let count = 0;
// for (_ of names) {
//   count++;
// }

// console.log(count);

//////////////////////////////////////////////////////////////////

//3-3-3

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let index in nums) {
//   sum += nums[index];
// }

// console.log(sum);

//3-3-4-1

// const nums = [10, 6, 8, 5, 4, 2, 3, 11];
// let min = nums[0];

// for (let i = 0; i <= nums.length; i++) {
//   if (min > nums[i]) {
//     min = nums[i];
//     console.log(min);
//   }
// }

// console.log(min);

//3-3-4-2

// for (let index in nums) {
//   if (min > nums[index]) {
//     min = nums[index];
//     console.log(min);
//   }
// }

//3-3-5-1

// const nums = [10, 6, 8, 5, 4];
// //결과 (nums값 뒤집기)
// const reversedNum = [4, 5, 8, 6, 10];

// const reverse = nums.reverse();
// console.log(reverse);

//3-3-5-2

// const nums = [10, 6, 8, 5, 4];
// //결과 (nums값 뒤집기)
// const reversedNum = [4, 5, 8, 6, 10];

// const reverse2 = [...nums].reverse();
// console.log(reverse2);

//3-3-5-3

// const nums = [10, 6, 8, 5, 4];
// //결과 (nums값 뒤집기)
// const reversedNum = [4, 5, 8, 6, 10];

// let reverse = [];

// for (let i = nums.length; i > 0; i--) {
//   reverse.push(nums[i - 1]);
// }
// console.log(reverse);

//3-3-5-4

// const nums = [10, 6, 8, 5, 4];
// // //결과 (nums값 뒤집기)
// const reversedNum = [4, 5, 8, 6, 10];

// let reverse = [];
// let index = 0;
// for (let i = nums.length; i > 0; i--) {
//   reverse[index] = nums[i - 1];
//   index++;
// }
// console.log(reverse);

//3-3-5-5

const nums = [10, 6, 8, 5, 4];

const reversedNum = [];

for (let index in nums) {
  let newindex = nums.length - 1 - index;
  let newValue = nums[newindex];
  reversedNum.push(newValue);
}

console.log(reversedNum);

const reversedNum2 = [];
for (num of nums) {
  reversedNum2.unshift(num);
}

console.log(reversedNum2);
