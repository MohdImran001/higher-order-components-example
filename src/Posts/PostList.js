import { useState, useEffect } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "app-id": "613358c887895d7ed5dc9a07"
      }
    })
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts.data);
      });
  }, []);

  return (
    <div>
      <h4>Blog Posts</h4>
      {posts.map((post) => (
        <Post postData={post} />
      ))}
    </div>
  );
};

export default PostList;
