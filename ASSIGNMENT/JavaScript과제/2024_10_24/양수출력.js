// 배열 함수 forEach() 를 활용하여 배열에서 양수만 출력한다.


const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20]

arr.forEach((num) =>{
    if(num > 0){
        console.log(num);
    }
})