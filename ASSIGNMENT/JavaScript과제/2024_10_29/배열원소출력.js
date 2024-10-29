const arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

// 배열 원소 출력 : 3가지 방법으로 배열의 원소를 출력한다.

//방법1
// const forEach = arr.forEach((num)=>{
//     console.log(num);
// })

//방법2
// for(let i of arr) {
//     console.log(i);
// }

//방법3
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


//////////////////////////////////////////////////////////////////////

// 배열 원소 거꾸로 출력 : 배열의 원소를 거꾸로 출력한다.
// const reverse = arr.reverse();
// console.log(reverse);

//////////////////////////////////////////////////////////////////////

// 양수 출력 : 배열의 원소 중 양수만 출력한다.
// const filter = arr.filter((num)=>{
//     if(num > 0){
//         return true;
//     }
// })
// console.log(filter);

//////////////////////////////////////////////////////////////////////

// 새로운 배열 :배열의 원소 중 양수이면서 짝수인 원소만 모아서 새로운 배열을 만들어서 출력한다.
// const filter = arr.filter((num)=>{
//     if(num > 0 && num %2 == 0){
//         return true;
//     }
// })
// console.log(filter);

//////////////////////////////////////////////////////////////////////

// 배열 원소의 곱 : 배열의 모든 원소를 곱한 값을 출력한다.
// const product = arr.reduce((acc, num) => acc * num);
// console.log(product);

//////////////////////////////////////////////////////////////////////

// x보다 큰 값 : 배열의 원소 중 변수 x 보다 큰 원소만 모아서 새로운 배열 을 만들어서 출력한다.

const x = 5;

const filter = arr.filter((num) =>{
    if(num > x){
        return num
    }
})

console.log(filter);
