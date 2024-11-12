import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function WebDetail() {
  const { webid } = useParams();
  const location = useLocation();
  
  const { post } = location.state;
  const { title, content } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
