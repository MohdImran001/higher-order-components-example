import { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: {
        "app-id": "613358c887895d7ed5dc9a07"
      }
    })
      .then((res) => res.json())
      .then((users) => {
        setFilteredUsers(users.data);
        setUsers(users.data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length === 0) {
      const newArray = [...users];
      setFilteredUsers(newArray);
    } else {
      const newArray = users.filter((user) => {
        let str = `${user.firstName}`.toLowerCase();
        let v = value.toLowerCase();
        return str.indexOf(v) >= 0;
      });
      setFilteredUsers(newArray);
    }
  };

  return (
    <div>
      <h4>Users - {filteredUsers.length} </h4>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />

      {loading && <p> loading users... </p>}
      {filteredUsers.map((user, index) => (
        <User userData={user} key={index} />
      ))}
    </div>
  );
};

export default UserList;
