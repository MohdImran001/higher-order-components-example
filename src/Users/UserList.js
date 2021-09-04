import { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: {
        "app-id": "613358c887895d7ed5dc9a07"
      }
    })
      .then((res) => res.json())
      .then((users) => setUsers(users.data));
  }, []);

  return (
    <div>
      <h4>Users</h4>
      {users.map((user) => (
        <User userData={user} />
      ))}
    </div>
  );
};

export default UserList;
