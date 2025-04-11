import { User } from "@/types/User";

interface Prorps {
  user: User;
  role: "admin" | "subscriber" | "guest";
}

//Interface segregation principle
const UserPanelB = ({ user, role }: Prorps) => {
  const handleEditClick = () => {
    if (role === "admin") {
      console.log("Editing user");
    }
  };

  const handleDeleteClick = () => {
    if (role === "admin") {
      console.log("Deleting user");
    }
  };

  const handleCommentClick = () => {
    if (role === "subscriber") {
      console.log("Adding comment");
    }
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {role === "admin" && (
        <div>
          <button onClick={handleEditClick}>Edit User</button>
          <button onClick={handleDeleteClick}>Delete User</button>
        </div>
      )}

      {role === "subscriber" && (
        <div>
          <button onClick={handleCommentClick}>Add Comment</button>
        </div>
      )}

      {role === "guest" && <p>Guest can not interact with the system</p>}
    </div>
  );
};

export default UserPanelB;
