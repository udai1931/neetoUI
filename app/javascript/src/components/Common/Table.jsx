import React from "react";

// @ts-ignore
import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN_DATA } from "../Contacts/constants";

const Table = ({
  // handleDeleteSelection,
  contacts = [],
}) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      className="contact-table"
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      currentPageNumber={2}
      defaultPageSize={10}
      rowData={contacts}
      allowRowClick={true}
    />
  </div>
);

export default Table;
