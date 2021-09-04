import { useState, useEffect } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "app-id": "613358c887895d7ed5dc9a07"
      }
    })
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts.data);
        setFilteredPosts(posts.data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
    if (e.target.value.length === 0) {
      const newArray = [...posts];
      setFilteredPosts(newArray);
    } else {
      const newArray = posts.filter((post) => {
        let str = `${post.text}`.toLowerCase();
        let v = value.toLowerCase();
        return str.indexOf(v) >= 0;
      });
      setFilteredPosts(newArray);
    }
  };

  return (
    <div>
      <h4>Blog Posts - {filteredPosts.length}</h4>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />

      {loading && <p> loading posts... </p>}

      {filteredPosts.map((post, index) => (
        <Post postData={post} key={index} />
      ))}
    </div>
  );
};

export default PostList;
