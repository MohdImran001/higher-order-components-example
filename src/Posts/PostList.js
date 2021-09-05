import ConnectWithSearch from "../ConnectWithSearch";

import { fetchPosts } from "../service";
import Post from "./Post";

const PostList = ({ data, loading }) => {
  return (
    <div>
      <h4>Blog Posts - {data.length}</h4>
      {loading && <p> loading posts... </p>}
      {data.map((post, index) => (
        <Post postData={post} key={index} />
      ))}
    </div>
  );
};

export default ConnectWithSearch(PostList, fetchPosts, "text");
