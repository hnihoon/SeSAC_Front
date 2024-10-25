//post : 데이터 추가

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'asd',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        // 이 headers 코드가 없으면 서버측에서 json인지 알 수 없어서 데이터를 받지 않음
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

createPost();
