// @ts-nocheck
import React, { useEffect, useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menubar from "components/Common/Menubar";
import Table from "components/Common/Table";

import { CONTACTS_DATA, MENUBAR_DATA } from "./constants";

function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setContacts([...CONTACTS_DATA]);
  }, []);

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
              // onClick={() => setShowNewNotePane(true)}
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
        <Table contacts={contacts} />
      </Container>
    </>
  );
}

export default Contacts;
