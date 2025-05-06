"use client";

import { useState, useEffect } from "react";

import { User } from "@/types/User";
import { Post } from "@/types/Post";

// Single Responsibility Principle
const UsersAndPosts = () => {
  const [users, setUsers] = useState<User[]>();
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const resPost = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postData = await resPost.json();
        setPosts(postData);
      } catch (error) {
        console.error("Error occurred during getPosts");
      }
    };

    const loadUsers = async () => {
      try {
        const resUsers = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData = await resUsers.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error occurred during getUsers");
      }
    };

    loadPosts();
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {!users && <div>Loading Users...</div>}
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <h2>Posts</h2>
      {!posts && <div>Loading Posts...</div>}
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default UsersAndPosts;
