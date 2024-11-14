import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";

export default function RootLayout() {
  const posts = useSelector((state) => state.login); // Redux 상태에서 posts 값 가져오기

  return (
    <>
      <Header test={posts}></Header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}
