
async function deleteTodo(id) {
  /*
    DELETE /todos/{id} : 특정 id 리소스 삭제
  */
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log(`ID ${id} 삭제 완료`);
  }
}

async function deleteTodoExample() {
  /*
    id : 삭제할 리소스 id
  */
  let id = 3;
  await deleteTodo(id);
}

deleteTodoExample();
