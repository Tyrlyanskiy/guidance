"use client";

import { User } from "@/types/User";
import CommonFilter from "./commonFilter";

interface Props {
  users: User[];
}

// Open/Closed Principle
const UsersFilter = ({ users }: Props) => {
  const userFilters = {
    all: () => true,
    hasPhone: (user: User) => !!user.phone,
    hasWebsite: (user: User) => !!user.website?.includes(".com"),
  };

  return (
    <CommonFilter<User>
      data={users}
      filters={userFilters}
      renderItem={(user: User) => <li key={user.id}>{user.name}</li>}
    />
  );
};

export default UsersFilter;
