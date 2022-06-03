// @ts-nocheck
import React from "react";

import { Alert } from "neetoui";

function DeleteAlert({ onClose, handleDelete }) {
  return (
    <div className="w-full">
      <Alert
        size="sm"
        isOpen
        title="Delete Note"
        message="Are you sure you want to delete the note? This action cannot be undone."
        onClose={onClose}
        onSubmit={handleDelete}
      />
    </div>
  );
}

export default DeleteAlert;
