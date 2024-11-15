// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation, useParams } from "react-router-dom";

// export default function PostDetail() {
//   const { postId } = useParams();

//   const posts = useSelector((state) => state.posts);

//   const [post, setPost] = useState();

//   useEffect(() => {
//     setPost(posts.find((post) => post.id === parseInt(postId)));
//   }, []);


//   return (
//     <div>
//       detail
//       <h3>{post?.title}</h3>
//       <p>{post?.content}</p>
//     </div>
//   );
// }

//axios 활용한 방법
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const url = `http://localhost:3000/posts/${postId}`;
    async function fetchPost() {
        const response = await axios.get(url)
        const data = response.data
        setPost(data)
    }
    fetchPost();
  }, []);


  return (
    <div>
      detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
