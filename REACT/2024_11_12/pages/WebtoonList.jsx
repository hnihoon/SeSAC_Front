import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function WebtoonList() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "월요일",
      content:
        "월요일 웹툰",
    },
    {
        id: 2,
        title: "화요일",
        content:
          "화요일 웹툰",
      },
      {
        id: 3,
        title: "수요일",
        content:
          "수요일 웹툰",
      },
      {
        id: 4,
        title: "목요일",
        content:
          "목요일 웹툰",
      },
      {
        id: 5,
        title: "금요일",
        content:
          "금요일 웹툰",
      },
      {
        id: 6,
        title: "토요일",
        content:
          "토요일 웹툰",
      },
      {
        id: 7,
        title: "일요일",
        content:
          "일요일 웹툰",
      }
  ]);

  return (
    <div>
      <h2>요일별</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              <Link to={`/web/${id}`} state={{ post }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  navigate(`/web/${id}`);
                }}
              >
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
