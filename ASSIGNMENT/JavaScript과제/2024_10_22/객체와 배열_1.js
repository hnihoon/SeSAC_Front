// 변수 `todos` 를 선언하고, 빈 배열을 할당한다.
// 아래 객체 정보를 기반으로 생성한 객체 3개를 변수 `todos` 에 추가한다.

let todos = [];

let arrdate = [
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: false,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: false,
  },
];

for (index in arrdate) {
  todos[index] = arrdate[index];
}

console.log(todos);
