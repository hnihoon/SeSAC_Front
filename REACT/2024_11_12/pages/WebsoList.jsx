import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function WebsoList() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "드라마",
      content:
        "드라마 장르",
    },
    {
        id: 2,
        title: "로멘스",
        content:
          "로멘스 장르",
      },
      {
        id: 3,
        title: "액션",
        content:
          "액션 장르",
      },
      {
        id: 4,
        title: "판타지",
        content:
          "판타지 장르",
      },
      {
        id: 5,
        title: "무협",
        content:
          "무협 장르",
      },
      {
        id: 6,
        title: "코미디",
        content:
          "코미디 장르",
      },
      {
        id: 7,
        title: "일상물",
        content:
          "일상물 장르",
      }
  ]);

  return (
    <div>
      <h2>장르</h2>
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
