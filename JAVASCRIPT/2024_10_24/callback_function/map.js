const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);

// arr = [x,y,z]
// new_arr = [f(x), f(x), f(z)]

// strNumbers => numNumbers로 바꾸어 새로운 변수에 할당하여라
const strNumbers = ['1', '2', '3', '4'];
// const numNumbers = [1,2,3,4];
console.log(parseInt('1'));
console.log('1');

////////////////////////////////////////////////////////////

// 방법1
const maps = strNumbers.map((num) => parseInt(num));
console.log(maps);

////////////////////////////////////////////////////////////

// 방법2
const maps2 = strNumbers.map((arr) => {
  return parseInt(arr);
});

for (arr of strNumbers) {
  maps;
}
console.log(maps);
