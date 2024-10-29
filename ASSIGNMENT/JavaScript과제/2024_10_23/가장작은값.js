// 변수를 출력한다.함수 minNumber 를 호출해서 배열에서 가장 작은 수를 구하고, 출력한다.

const arr = [10, 25, 36, 99, 58]

const minNumber = arr.reduce((acc, cur)=> {
    console.log(acc, cur);
    if(acc > cur){
        acc = cur;
    }
    return acc;
})

console.log(minNumber);