// 1부터 N까지의 숫자 중 짝수의 개수를 구하는 반복문을 작성한다.
// 짝수의 개수를 출력한다.

const n = 5;
let count = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(count);
