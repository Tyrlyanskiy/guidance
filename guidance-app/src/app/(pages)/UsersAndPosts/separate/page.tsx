import UsersWithFilter from "@/components/Users/withFilter";
import Posts from "@/components/Posts/";

// Single Responsibility Principle
const UsersAndPostsSR = async () => {
  return (
    <div>
      <UsersWithFilter />
      <Posts />
    </div>
  );
};

export default UsersAndPostsSR;
