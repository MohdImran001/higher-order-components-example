import { APP_ID } from "./config";

export const fetchUsers = async () => {
  const res = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
    headers: {
      "app-id": APP_ID
    }
  });

  const users = await res.json();
  return users.data;
};

export const fetchPosts = async () => {
  const res = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
    headers: {
      "app-id": APP_ID
    }
  });

  const posts = await res.json();
  return posts.data;
};
