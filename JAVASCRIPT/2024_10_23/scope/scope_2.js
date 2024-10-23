let outerValue = '밖';

function func() {
  const outerValue = '안';
  console.log(outerValue);
}

func(); // '안' 출력됨 : 이름이 같은경우 내부 변수를 출력
console.log(outerValue); // '밖'
