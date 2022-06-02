// @ts-nocheck
import React, { useState } from "react";

import { Alert } from "neetoui";

function DeleteAlert({
  // selectedNoteIds,
  setSelectedNoteIds,
  setShowDeleteAlert,
  onClose,
  // refetch
}) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    //API request to delete
    // console.log(selectedNoteIds)
    //refetch notes
    setDeleting(false);
    setSelectedNoteIds(null);
    setShowDeleteAlert(false);
  };

  return (
    <div className="w-full">
      <Alert
        size="sm"
        isOpen
        title="Delete Note"
        message="Are you sure you want to delete the note? This action cannot be undone."
        onClose={onClose}
        onSubmit={handleDelete}
        usSubmitting={deleting}
      />
    </div>
  );
}

export default DeleteAlert;
