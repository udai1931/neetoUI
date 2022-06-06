import React, { useEffect, useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import NewPane from "components/Common/CreatePane";
import DeleteAlert from "components/Common/DeleteAlert";
import Menubar from "components/Common/Menubar";
import Table from "components/Common/Table";

import {
  CONTACTS_DATA,
  MENUBAR_DATA,
  CONTACTS_FORM_INITIAL_FORM_VALUES,
} from "./constants";
import Form from "./Form";

function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [category, setCategory] = useState("All");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    setContacts([...CONTACTS_DATA]);
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
        title="Contacts"
        category={category}
        setCategory={setCategory}
        options={MENUBAR_DATA}
      />
      <Container>
        <Header
          title="Contacts"
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add New Contact"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle
        />
        <Table
          contacts={contacts}
          handleDeleteSelection={handleDeleteSelection}
        />
        <NewPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
          constants={CONTACTS_FORM_INITIAL_FORM_VALUES}
          PaneTitle="Contact"
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
}

export default Contacts;
