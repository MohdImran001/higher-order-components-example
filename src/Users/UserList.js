import ConnectWithSearch from "../ConnectWithSearch";

import { fetchUsers } from "../service";
import User from "./User";

const UserList = ({ data, loading }) => {
  return (
    <div>
      <h4>Users - {data.length} </h4>
      {loading && <p> loading users... </p>}
      {data.map((user, index) => (
        <User userData={user} key={index} />
      ))}
    </div>
  );
};

export default ConnectWithSearch(UserList, fetchUsers, "firstName");
