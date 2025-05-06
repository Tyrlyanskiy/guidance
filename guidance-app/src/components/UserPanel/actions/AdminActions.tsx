"use client";

import Button from "@/components/UI/Button";

const AdminActions = () => {
  const handleEditClick = () => {
    console.log("Editing user");
  };

  const handleDeleteClick = () => {
    console.log("Deleting user");
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl">Admin Actions</h3>
      <p>As an admin, you can edit or delete users.</p>
      <p>Click the buttons below to perform actions:</p>

      <div className="flex gap-4">
        <Button onClick={handleEditClick}>Edit User</Button>
        <Button onClick={handleDeleteClick}>Delete User</Button>
      </div>
    </div>
  );
};

export default AdminActions;
