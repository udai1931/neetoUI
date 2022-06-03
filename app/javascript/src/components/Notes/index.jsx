// @ts-nocheck
import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Card from "components/Common/Card";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { MENUBAR_DATA } from "./constants";
import { NOTES_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState("All");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState(null);

  // useEffect(() => {
  //   fetchNotes for selected category & change when category changes
  // }, [category]);

  useEffect(() => {
    setNotes([...NOTES_DATA]);
  }, []);

  const handleDelete = id => {
    setShowDeleteAlert(true);
    setSelectedNoteIds(id);
  };

  return (
    <>
      <Menubar
        category={category}
        setCategory={setCategory}
        options={MENUBAR_DATA}
      />
      <Container>
        <Header
          title="Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle
        />
        {notes.length ? (
          notes?.map(note => (
            <Card key={note.id} note={note} deleteAction={handleDelete} />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          // fetchNotes={fetchNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            setSelectedNoteIds={setSelectedNoteIds}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
