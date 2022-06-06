import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN_DATA } from "../Contacts/constants";

const Table = ({ contacts = [] }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      className="contact-table"
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      currentPageNumber={2}
      defaultPageSize={10}
      rowData={contacts}
    />
  </div>
);

export default Table;
