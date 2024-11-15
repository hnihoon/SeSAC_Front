import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import  axios from "axios"
import { useEffect } from "react";

export default function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]) 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  // const posts = useSelector(state => state.posts)

    useEffect(() => {
  
      async function fetchPost() {
      try{
        const url = "http://localhost:3000/posts";
        const response = await axios.get(url);
        // const response = await axios({url:url})
    
        const data = response.data

        setPosts(data)
      } catch(err) {
        setError(err.message)

        console.error(err);
        console.log("에러남 ㅠㅠ");
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, []);
  if(error) {
    return <div>{error}</div>
  }
  if(loading){
    return <div>로딩중</div>
  }

  return (
    <div>
      <h2>posts</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              <Link to={`/posts/${id}`} state={{ post }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  // 이동을 하고 싶다
                  navigate(`/posts/${id}`);
                }}
              >
                {title}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}