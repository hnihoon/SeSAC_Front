import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePost } from "../store/slices/loginSlice"; // changePost 액션 임포트

export default function Header({test}) {
  const dispatch = useDispatch(); // dispatch 정의

  if(test) {
    return (
      <header>
        <button onClick={() => dispatch(changePost())}>Toggle Logout</button>
          <ul>
          <li>
            <Link to="/">Home으로</Link>
          </li>
          <li>
            <Link to="/posts">게시글로</Link>
          </li>
          <li>
            <Link to="/posts/create">게시글 생성</Link>
          </li>
        </ul>
      </header>
    );
  } else {
    return (
    <header>
        <button onClick={() => dispatch(changePost())}>Toggle Login</button>
          <ul>
          <li>
            <Link to="/">Home으로</Link>
          </li>
          <li>
            <Link to="/posts">게시글로</Link>
          </li>
        </ul>
      </header>
    )
  }
}
