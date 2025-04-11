import { getJsonObject } from "@/app/utils/getJsonObject";
import UserPanel from "@/components/UserPanel";
import { User } from "@/types/User";

// ISP
const UserPanelPage = async () => {
  const userData: User[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/users"
  );

  return <UserPanel user={userData[0]} role="admin" />;
};

export default UserPanelPage;
