const posts = [
    { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트 내용' },
    { id: 2, title: '두 번째 포스트', content: '두 번째 포스트 내용' },
    { id: 3, title: '세 번째 포스트', content: '세 번째 포스트 내용' },
  ];

  const comments = [
    { id: 1, postId: 1, content: '첫 번째 댓글' },
    { id: 2, postId: 2, content: '두 번째 댓글' },
    { id: 3, postId: 1, content: '세 번째 댓글' },
    { id: 4, postId: 2, content: '네 번째 댓글' },
    { id: 5, postId: 3, content: '다섯 번째 댓글' },
    { id: 6, postId: 2, content: '여섯 번째 댓글' },
    { id: 7, postId: 3, content: '일곱 번째 댓글' },
    { id: 8, postId: 3, content: '여덟 번째 댓글' },
    { id: 9, postId: 1, content: '아홉 번째 댓글' },
    { id: 10, postId: 3, content: '열 번째 댓글' },
  ];

// 게시글 번호와 제목 : 모든 posts 의 번호 id, 제목 title을 출력한다.
//   for(let index of posts){
//     console.log(index.id, index.title);
//   }

//////////////////////////////////////////////////////////////////////

// 1번 게시글의 댓글 : 게시글 번호 postId 가 1인 모든 comments 를 출력한다.
// const filter = comments.filter((num) =>{
//     if(num.postId == 1){
//         console.log(num);
//     }
// })

//////////////////////////////////////////////////////////////////////

// 모든 게시글과 댓글 :
// 모든 `posts` 와 `comments` 의 객체를 출력한다.
// 이때, 개별 `posts` 에 연관된 `comments`를 구분해서 출력한다.

// for(let i of posts){
//     console.log(`${i.id}번 Post`);
//     console.log(i);
//     console.log(`${i.id}번 Post의 Comments`);
//     for(let j of comments){
//         if(j.postId === i.id){
//             console.log(j);
//         }
//     }
// }

//////////////////////////////////////////////////////////////////////

// 댓글의 수 : 개별 posts 당 연관된 comments 의 수를 출력한다.

let count = 0;
for(let i of posts){
    for(let j of comments)
        if(i.id == j.postId) {
            count ++;
        }
        console.log(`${i.id}번 게시글의 댓글 수 ${count}`);
        count = 0;
}
