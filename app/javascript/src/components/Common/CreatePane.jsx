import React from "react";

import { Pane, Typography } from "neetoui";

export default function NewPane({
  // fetchNotes,
  showPane,
  setShowPane,
  constants,
  PaneTitle,
  FormComponent,
}) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New {PaneTitle}
        </Typography>
      </Pane.Header>
      <FormComponent
        onClose={onClose}
        // refetch={fetchNotes}
        constants={constants}
      />
    </Pane>
  );
}
