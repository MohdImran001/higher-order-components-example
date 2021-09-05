import { useState, useEffect } from "react";
import { fetchPosts } from "../service";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function _fetchPosts() {
      setLoading(true);
      const posts = await fetchPosts();

      setPosts(posts);
      setFilteredPosts(posts);
      setLoading(false);
    }

    _fetchPosts();
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
