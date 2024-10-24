// 배열에 저장된 객체의 키content 와 isCompleted 의 값을 출력하는 반복문을 작성한다.
// todos를 활용해서 진행

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
  for (index2 of arrdate) {
    console.log(
      `content: ${todos[index].content}, isCompleted: ${todos[index].isCompleted}`
    );
  }
}
