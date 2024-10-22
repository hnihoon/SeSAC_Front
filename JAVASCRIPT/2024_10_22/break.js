//break
//반복을 멈추고 반복문을 빠져나감

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }

  console.log(i);
}

console.log('--------------------------');

//continue
//아래 코드를 실행하지 않고 다음 반복으로 넘어감

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
