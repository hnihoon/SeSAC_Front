import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const [post, setPost] = useState();

  useEffect(()=>{
    setPost(posts.find((post)=> post.id === parseInt(postId)))
  }, [])
  // const location = useLocation();
  
  // const { post } = location.state;
  // const { title, content } = post;

  return (
    <div>
      datail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
