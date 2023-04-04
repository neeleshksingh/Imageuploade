import React, { useState } from "react";
import '../App.css'

function Display() {
  const [post, setPost] = useState([]);
  fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((result) => {
      setPost(result.data);
    })
    .catch((err) => console.error(err));

  return (
    <div>
      {post.map((post, index) => {
        return (
          <div key={index}>
            <img src={post.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Display;