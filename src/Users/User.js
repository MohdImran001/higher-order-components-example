const User = ({ userData }) => {
  return (
    <div style={{ border: `1px solid #eee`, padding: "20px" }}>
      <div>
        <img src={userData.picture} alt="fake-user" />
      </div>
      <div>
        <p>{userData.firstName}</p>
      </div>
    </div>
  );
};

export default User;
