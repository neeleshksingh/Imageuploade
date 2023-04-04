import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Uplaod() {
  const [image, setImage] = useState("");
  const [imgurl, setImgurl] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    if (imgurl) {
      console.log("imgurl: ", imgurl);
      fetch("http://localhost:3000/post", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: imgurl,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            nav("/display");
          }
        })
        .catch((e) => console.log(e));
    }
  }, [imgurl]);

  const Upload = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "images");
    data.append("cloud_name", "neeleshks");
    fetch("https://api.cloudinary.com/v1_1/neeleshks/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setImgurl(data.secure_url))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form onSubmit={Upload}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Uplaod;
