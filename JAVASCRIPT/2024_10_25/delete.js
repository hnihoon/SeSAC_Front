// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

async function deletePost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
  const text = await response.text();
  console.log(text);
}

deletePost();
