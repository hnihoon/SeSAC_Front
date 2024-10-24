// 원소가 짝수라면 원소를 출력하지 않고, 반복문을 즉시 종료한다.

arr = [1, 9, 3, 11, 4, 5, 2, 7];

for (index of arr) {
  if (index % 2 == 0) {
    break;
  }
  console.log(index);
}
