// for문 사용방법
// for(초기화; 조건식; 증감식){
//   시행할 내용
// }

//2, 4, 6, 8, 10을 출력해보기
for (let num = 2; num <= 10; num += 2) {
  console.log(num);
}

// arr가 텅 빌 때 까지 el를 출력하고 싶을 때

const arr = [2, 4, 5, 6, 7];

while (arr.length) {
  arr.shift();
  console.log(arr);
}
