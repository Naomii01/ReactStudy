import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Mainlayout from "../layout/Mainlayout";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts ').then(response => response.json()).then((json)=>setPosts(json));
  }

  useEffect(() => {
    fetchPosts();

  }, [])
  return (
    <Mainlayout>
      {
        posts.map((post, index)=>
        <div key={index}>
         {post.id}. {post.title}
         <div>
          {post.body}
         </div>
        </div>
        ) 
      }
    </Mainlayout>
  );
}

export default BlogPage;
