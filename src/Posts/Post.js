const Post = ({ postData }) => {
  return (
    <div style={{ border: `1px solid #eee`, padding: "20px" }}>
      <div>
        <img src={postData.image} width="100" alt="fake-blog-post" />
      </div>
      <div>
        <p style={{ fontWeight: "bolder" }}>{postData.text}</p>
      </div>
      <div>
        <p>Likes -{postData.likes}</p>
      </div>
      <div>
        <p>Author -{postData.owner.firstName}</p>
      </div>
    </div>
  );
};

export default Post;
