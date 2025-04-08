import { getJsonObject } from "@/utils/getJsonObject";
import { User } from "@/types/User";

const Users = async () => {
  const userData: User[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {userData && userData.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default Users;
