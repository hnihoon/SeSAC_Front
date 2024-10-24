// 1부터 N까지의 숫자 중 짝수만 변수 `total` 에 더하는 반복문을 작성한다.
// 변수 `total` 의 값을 출력한다.

let n = 5;
let total = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    total += i;
  }
}
console.log(total);
