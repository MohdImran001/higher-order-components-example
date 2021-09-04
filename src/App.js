import "./styles.css";
import { useState } from "react";
import UserList from "./Users/UserList";
import PostList from "./Posts/PostList";

export default function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [showPosts, setShowPosts] = useState(true);

  const displayUsers = () => {
    setShowUsers(true);
    setShowPosts(false);
  };

  const displayPosts = () => {
    setShowUsers(false);
    setShowPosts(true);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          onClick={displayUsers}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            margin: "10px"
          }}
        >
          Users
        </p>
        <p
          onClick={displayPosts}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            margin: "10px"
          }}
        >
          Posts
        </p>
      </div>
      {showPosts && <PostList />}
      {showUsers && <UserList />}
    </div>
  );
}
