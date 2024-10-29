//함수 determine 를 호출해서 변수가 어떤 수 인지 구하고, 출력한다.

function determine(x){
    if(x == 0){
        return 0;
    } else if(x < 1) {
        return -1;
    } else {
        return 1;
    }
}

let x = -1000;

const result = determine(x);

console.log(result);




