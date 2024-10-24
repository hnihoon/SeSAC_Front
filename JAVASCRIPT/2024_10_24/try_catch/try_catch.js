function plusone(num) {
  if (typeof num !== 'number') {
    throw new Error('숫자가 아닙니다.');
  }
  console.log(num + 1);
}

try {
  plusone('문자열'); // Error 발생
} catch (error) {
  console.error(error.message); // 숫자가 아닙니다.
}
