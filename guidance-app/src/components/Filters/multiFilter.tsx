"use client";

import { useState } from "react";
import { User } from "@/types/User";
import { Post } from "@/types/Post";

interface Props {
  users: User[];
  posts: Post[];
  dataType: "posts" | "users";
}

// Open/Closed Principle
const MultiFilter = ({ users, posts, dataType }: Props) => {
  const [filter, setFilter] = useState("all");

  const filteredData = () => {
    if (dataType === "users") {
      return users.filter((user) => {
        if (filter === "all") return true;
        if (filter === "hasPhone") return user.phone;
        if (filter === "hasWebsite") return user.website;

        return true;
      });
    } else if (dataType === "posts") {
      return posts.filter((post) => {
        if (filter === "all") return true;
        if (filter === "longPost") return post.body && post.body.length > 200;
        if (filter === "hasTitle") return !!post.title;

        return true;
      });
    }
    return [];
  };

  function isUser(item: User | Post): item is User {
    return (item as User).name !== undefined;
  }

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {dataType === "users" && (
          <>
            <option value="All">All Users</option>
            <option value="hasPhone">Users with phone</option>
            <option value="hasWebsite">Users with website</option>
          </>
        )}
        {dataType === "posts" && (
          <>
            <option value="All">All Posts</option>
            <option value="longPost">Posts longer as 200 characters</option>
            <option value="hasTitle">Posts with title</option>
          </>
        )}
      </select>
      <ul>
        {filteredData().map((item) =>
          dataType === "users" && isUser(item) ? (
            <li key={item.id}>{item.name}</li>
          ) : (
            !isUser(item) && <li key={item.id}>{item.title}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default MultiFilter;
