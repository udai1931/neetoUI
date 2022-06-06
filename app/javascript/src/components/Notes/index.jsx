import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Card from "components/Common/Card";
import NewPane from "components/Common/CreatePane";
import DeleteAlert from "components/Common/DeleteAlert";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { MENUBAR_DATA, NOTES_FORM_INITIAL_FORM_VALUES } from "./constants";
import { NOTES_DATA } from "./constants";
import Form from "./Form";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState("All");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    setNotes([...NOTES_DATA]);
  }, []);

  const handleDeleteSelection = () => {
    setShowDeleteAlert(true);
  };

  const handleDelete = () => {
    setShowDeleteAlert(false);
  };

  return (
    <>
      <Menubar
        title="Notes"
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
            <Card
              key={note.id}
              note={note}
              deleteAction={handleDeleteSelection}
            />
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
        <NewPane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          constants={NOTES_FORM_INITIAL_FORM_VALUES}
          PaneTitle="Note"
          FormComponent={Form}
        />
        {showDeleteAlert && (
          <DeleteAlert
            onClose={() => setShowDeleteAlert(false)}
            handleDelete={handleDelete}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
