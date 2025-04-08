import { getJsonObject } from "@/utils/getJsonObject";
import { User } from "@/types/User";
import UsersFilter from "../Filters/userFilterT";

const UsersWithFilter = async () => {
  const userData: User[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("-----", userData);
  return (
    <div>
      <h2>Users</h2>
      <UsersFilter users={userData} />
    </div>
  );
};

export default UsersWithFilter;
