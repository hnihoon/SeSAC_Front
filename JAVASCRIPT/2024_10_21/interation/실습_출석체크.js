// 3-2-1
// 출석번호를 포함하여 '1번 jun', ..., '4번 lynda'의 형태로 출석을 부르시오.

names = ['jun', 'beemo', 'ken', 'lynda'];

let check = 0;
for (count in names) {
  check++;
  console.log(check + '번' + names[count]);
}

console.log();

// 3-2-2
for (let index in names) {
  let name = names[index];
  index++;
  console.log(index, name);
}
