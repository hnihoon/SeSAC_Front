import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import  axios from "axios"
import { useEffect } from "react";

export default function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]) 

  // const posts = useSelector(state => state.posts)

  useEffect(() => {

  // const URL = 'https://api.themoviedb.org/3/movie';
  // const response = await fetch(URL);
  // const data = await response.json();

    async function fetchPost() {
    const url = "http://localhost:3000/posts";
    const response = await axios.get(url);
    // const response = await axios({url:url})

    const data = response.data
    setPosts(data)
    
  }
  fetchPost()
})

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
