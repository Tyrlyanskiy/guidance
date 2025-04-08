"use client";

import { useState } from "react";
import { User } from "@/types/User";

interface Props {
  users: User[];
}

// Open/Closed Principle
const FilterUsers = ({ users }: Props) => {
  const [filter, setFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    if (filter === "all") return true;
    if (filter === "hasPhone") return user.phone;
    if (filter === "hasWebsite") return user.website;

    return true;
  });

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All Users</option>
        <option value="hasPhone">Users with phone</option>
        <option value="hasWebsite">Users with website</option>
      </select>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterUsers;
