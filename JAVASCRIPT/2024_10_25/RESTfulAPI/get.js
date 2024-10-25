//get : 데이터 조회

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json()) // 응답 데이터를 JSON으로 변환
//   .then((json) => {
//     //console.log(json); // 데이터를 처리
//     const title = json.title;
//     console.log(title);
//   })
//   .catch((error) => console.error('Error:', error)); // 에러 처리

// async function getPost(postId) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${postId}`
//   );
//   const data = await response.json();
//   console.log(data);
// }

// getPost(3);

async function getPost() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();
  console.log(data);
}

getPost();

//async + await : 결과값이 반환될 때 까지 기다린다는 의미
