// 1. 1~9 순서대로 출력해보기.

// const nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// 방법1
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums[i].length; j++) {
//     console.log(nums[i][j]);
//   }
//   console.log('------------------------------');
// }

// 방법2
// let arr;
// for (let arr of nums) {
//   for (let num of arr) {
//     console.log(num);
//   }
// }

// 방법3
// for (let i in nums) {
//   let arr = nums[i];
//   for (let j in arr) {
//     let num = arr[j];
//     console.log(num);
//     console.log(arr[j]);
//     console.log(nums[i][j]);
//   }
// }

////////////////////////////////////////////////////////////////

//2. 행들의 합의 값으로 리스트를 만드세요.

// 방법1
// const nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sum = 0;
// const sumlist = [];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums[i].length; j++) {
//     sum += nums[i][j];
//   }
//   sumlist[i] = sum;
//   sum = 0;
// }
// console.log(sumlist);

// 방법2
// let sum = 0;
// const result = [];

// for (let arr of nums) {
//   sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   result.push(sum);
// }
// console.log(result);

////////////////////////////////////////////////////////////////

//3. 모든 원소들의 합을 구하시오
// const nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums[i].length; j++) {
//     sum += nums[i][j];
//   }
// }
// console.log(sum);

////////////////////////////////////////////////////////////////

//4. 열들의 합의 값으로 리스트를 만드세요
// let nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const sumlist = [];

// let sum = 0;

// for (let j = 0; j < nums.length; j++) {
//   for (let i = 0; i < nums[j].length; i++) {
//     sum += nums[i][j];
//   }
//   sumlist[j] = sum;
//   sum = 0;
// }
// console.log(sumlist);

////////////////////////////////////////////////////////////////

//5. 구구단이 들어있는 2차원 배열을 만드시오.

// const n = 3;
// const m = 4;
// let check = 2;
// const result = [];

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     result[i][j] = check * (j + 1);
//   }
//   check++;
// }
// console.log(result);

// const n = 3;
// const m = 4;
// let check = 2; // const 대신 let으로 변경하여 check 값을 증가시킬 수 있게 함
// const result = [];

// for (let i = 0; i < n; i++) {
//   result[i] = []; // result[i]를 배열로 초기화
//   for (let j = 0; j < m; j++) {
//     result[i][j] = check * (j + 1);
//   }
//   check++;
// }
// console.log(result);
