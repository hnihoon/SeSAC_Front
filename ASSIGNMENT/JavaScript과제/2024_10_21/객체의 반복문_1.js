//아래와 같은 객체가 있을 때 객체의 키와 값을 출력하는 반복문을 작성한다.
let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

for (index in person) {
  console.log(`${index}, ${person[index]}`);
}
