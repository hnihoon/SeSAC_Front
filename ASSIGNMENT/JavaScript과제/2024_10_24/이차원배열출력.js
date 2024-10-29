// 배열의 원소 합이 짝수인 배열만 모아서 새로운 이차원 배열을 생성한다.

const matrix = [[4,2], [3,2], [5,7], [10,1]];

let new_matrix = matrix.filter((arr) => {
    let total = arr[0]+arr[1];
    return total % 2 === 0;
  });
  
  console.log(new_matrix);