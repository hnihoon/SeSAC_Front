// 적절한 배열 함수를 선택해서 배열 내 객체 중 isCompleted 가 true 인 객체만 출력한다.

let todos = [
    { todoId: 1, content: '예습하기', isCompleted: false },
    { todoId: 2, content: '강의듣기', isCompleted: true },
    { todoId: 3, content: '복습하기', isCompleted: true },
  ];

todos.forEach((todo) => {
    if(todo.isCompleted === true){
        console.log(todo);
    }
})