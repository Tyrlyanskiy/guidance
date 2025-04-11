"use client";

const AdminActions = () => {
  const handleEditClick = () => {
    console.log("Editing user");
  };

  const handleDeleteClick = () => {
    console.log("Deleting user");
  };

  return (
    <div className="flex flex-col gap-2">
      <h3>Admin Actions</h3>
      <p>As an admin, you can edit or delete users.</p>
      <p>Click the buttons below to perform actions:</p>

      <button onClick={handleEditClick}>Edit User</button>
      <button onClick={handleDeleteClick}>Delete User</button>
    </div>
  );
};

export default AdminActions;
