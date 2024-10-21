// 3-1-1
// 다음과 같을 때, 구구단 3단을 출력하시오

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index in nums) {
  const num = nums[index];
  console.log(`3 * ${num} = ${3 * num}`);
}

// 3-1-2
console.log('-----------------------');
// array, string set
// key값을 활용하는 것이 아니라, 바로
for (let num of nums) {
  console.log(`3 * ${num} = ${3 * num}`);
}
