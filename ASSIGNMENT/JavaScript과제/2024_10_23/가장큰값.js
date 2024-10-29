// 함수 maxNumber 를 호출해서 배열에서 가장 큰 수를 구하고, 출력한다.

const arr = [10, 25, 36, 99, 58]

const maxNumber = arr.reduce((acc, cur)=> {
    console.log(acc, cur);
    if(acc < cur){
        acc = cur;
    }
    return acc;
})

console.log(maxNumber);
