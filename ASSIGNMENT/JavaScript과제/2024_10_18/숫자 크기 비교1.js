// 1. number_1 이 number_2 보다 작으면 “number_1은 10보다 작다.”를 출력한다.

// number_1 = 9;
// number_2 = 10;

// if (number_1 < number_2) {
//   console.log(`number_1은 ${number_2}보다 작다.`);
// }

/////////////////////////////////////////////////////////////////////////////

//2. 짝수
// 변수 `number_1` 를 2로 나눈 나머지가 `0` 인지 확인하는 조건문을 작성한다.
// 2로 나눈 나머지가 `0` 이면 “짝수”를 출력한다.

// number_1 = 10;

// if (number_1 % 2 === 0) {
//   console.log(number_1);
//   console.log('짝수');
// }

/////////////////////////////////////////////////////////////////////////////

//3. 자료형 확인
// 변수의 자료형이 `number` 인지 확인하는 조건문을 작성한다.
// 변수의 자료형이 `number` 라면 “숫자형”을 출력한다.

// const variable = 10;
// if (typeof variable == 'number') {
//   console.log(variable);
//   console.log('숫자형');
// } else {
//   console.log('문자형 혹은 논리형');
// }

/////////////////////////////////////////////////////////////////////////////

//4. 숫자 크기 비교2
// 숫자 10보다 작으면 “number_1은 10보다 작다.”를 출력한다.
// 숫자 10보다 크면 “number_1은 10보다 크다.”를 출력한다.

// const number_1 = 10;
// const number_2 = 9;
// if (number_1 < number_2) {
//   console.log(`number_1은 ${number_2}보다 작다`);
// } else {
//   console.log(`number_1은 ${number_2}보다 크다`);
// }

/////////////////////////////////////////////////////////////////////////////

//5. 합격 / 불합격

// 변수 `score` 가 60과 비교하는 조건문을 작성한다.
// 60 이상이면  “합격”을 출력한다.
// 60 미만이면 “불합격”을 출력한다.

// const score = 70;
// if (score >= 60) {
//   console.log('합격');
// } else {
//   console.log('불합격');
// }

/////////////////////////////////////////////////////////////////////////////

//6. 숫자 크기 비교3
// 변수 `number_1` 가 숫자 10과 비교하는 조건문을 작성한다.
// 숫자 10보다 작으면 “number_1은 10보다 작다.”를 출력한다.
// 숫자 10보다 크면 “number_1은 10보다 크다.”를 출력한다.
// 숫자 10과 같으면 “number_1은 10이다” 를 출력한다.

// const number_1 = 11;
// if (number_1 < 10) {
//   console.log('number_1은 10보다 작다.');
// } else if (number_1 === 10) {
//   console.log('number_1은 10이다.');
// } else {
//   console.log('number_1은 10보다 크다.');
// }

/////////////////////////////////////////////////////////////////////////////

//7. 숫자 크기 비교4
// 자료형이 `number` 라면 숫자 10과 크기 비교를 하는 조건문을 작성한다.
// 숫자 10보다 작으면 “number_1은 10보다 작다.”를 출력한다.
// 숫자 10보다 크면 “number_1은 10보다 크다.”를 출력한다.
// 숫자 10과 같으면 “number_1은 10이다” 를 출력한다.
// 자료형이 `number` 가 아니면 “숫자가 아니다.”를 출력한다.

// const number_1 = 'str';

// if (number_1 < 10) {
//   console.log('number_1은 10보다 작다.');
// } else if (number_1 === 10) {
//   console.log('number_1은 10이다.');
// } else if (number_1 > 10) {
//   console.log('number_1은 10보다 크다.');
// } else {
//   console.log(number_1);
//   console.log('숫자가 아니다.');
// }

/////////////////////////////////////////////////////////////////////////////

//8. 짝수 / 홀수
// 변수 `number_1` 가 0 인지 확인하는 조건문을 작성한다.
// 값이 0 이면 “영”을 출력한다.
// 값이 0 이 아니면  변수 `number_1` 를 2로 나눈 나머지가 `0` 인지 확인하는 조건문을 작성한다.
// 2로 나눈 나머지가 `0` 이면 “짝수” 를 출력한다.
// 2로 나눈 나머지가 `1` 이면 “홀수” 를 출력한다.

// const number_1 = 1;

// if (number_1 == 0) {
//   console.log(number_1);
//   console.log('영');
// } else if (number_1 % 2 == 0) {
//   console.log(number_1);
//   console.log('짝수');
// } else {
//   console.log(number_1);
//   console.log('홀수');
// }

/////////////////////////////////////////////////////////////////////////////

//9. 아이디 / 비밀번호
// 두 변수가 아래 정보와 일치하는지 확인하는 조건문을 작성한다.
// username : sesac
// password : sesac1234
// 정보가 일치하면 “로그인 성공” 을 출력한다.
// 정보가 다르면 “로그인 실패” 를 출력한다.

// beemo
// 1234
// 로그인 실패
// ​
// sesac
// sesac1234
// 로그인 성공
// ​
// sesac
// sesac0000
// 로그인 실패

// const username = 'sesac';
// const password = 'sesac1234';

// if (username === 'sesac' && password === 'sesac1234') {
//   console.log(username);
//   console.log(password);
//   console.log('로그인 성공');
// } else {
//   console.log(username);
//   console.log(password);
//   console.log('로그인 실패');
// }

/////////////////////////////////////////////////////////////////////////////

//10. 두 수 비교
// 두 같으면 “같다”를 출력한다.

// const number_1 = 1;
// const number_2 = 1;

// if (number_1 === number_2) {
//   console.log(number_1);
//   console.log(number_2);
//   console.log('같다');
// } else {
//   console.log('다르다');
// }

/////////////////////////////////////////////////////////////////////////////

//11. 2와 3의 배수

number_1 = 17;

if (number_1 % 2 == 0 && number_1 % 3 == 0) {
  console.log(number_1);
  console.log('6의 배수');
} else if (number_1 % 2 == 0) {
  console.log(number_1);
  console.log('2의 배수');
} else if (number_1 % 3 == 0) {
  console.log(number_1);
  console.log('3의 배수');
} else {
  console.log(number_1);
  console.log('2의 배수도 아니고, 3의 배수도 아니다.');
}
