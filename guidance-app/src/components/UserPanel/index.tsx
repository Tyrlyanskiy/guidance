import { User } from "@/types/User";
import AdminActions from "./actions/AdminActions";
import SubscriberActions from "./actions/SubscriberActions";
import GuestActions from "./actions/GuestActions";

interface Prorps {
  user: User;
  role: "admin" | "subscriber" | "guest";
}

// Interface segregation principle
const UserPanel = ({ user, role }: { user: User; role: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {role === "admin" && <AdminActions />}
      {role === "subscriber" && <SubscriberActions />}
      {role === "guest" && <GuestActions />}
    </div>
  );
};

export default UserPanel;
