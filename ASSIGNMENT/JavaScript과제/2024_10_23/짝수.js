// 함수 evenNumber 를 호출해서 짝수만 저장된 배열을 구하고, 출력한다.
  
  const arr = [ 10, 25, 36, 99, 58 ];
  const new_arr = arr.filter((num)=> {
    if(num % 2 == 0) {
        return true;
    }
  })

  console.log(new_arr);
  