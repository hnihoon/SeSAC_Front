//아래와 같은 배열이 있을 때 원소가 짝수면 출력하는 조건문과 반복문을 작성한다.
arr = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (!(arr[i] == 0) && arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
