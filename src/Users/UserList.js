import { useState, useEffect } from "react";
import { fetchUsers } from "../service";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function _fetchUsers() {
      setLoading(true);
      const users = await fetchUsers();

      setFilteredUsers(users);
      setUsers(users);
      setLoading(false);
    }

    _fetchUsers();
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
