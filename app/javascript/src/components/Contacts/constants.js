import React from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Dropdown } from "neetoui";
import * as yup from "yup";

import { contacts } from "./contacts";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  role: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstname: yup.string().min(3).required("firstname is required"),
  lastname: yup.string().min(3).required("lastname is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
});

export const CONTACTS_DATA = contacts;

export const MENUBAR_DATA = {
  heads: [
    {
      title: "All",
      count: 0,
    },
    {
      title: "Archived",
      count: 0,
    },
    {
      title: "Completed",
      count: 0,
    },
    {
      title: "Phase 2",
      count: 0,
    },
  ],
};

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, role) => (
      <div className="flex flex-row items-center">
        <Avatar user={{ name: name }} size="medium" className="mr-2" />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p>{role.role}</p>
        </div>
      </div>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "20%",
  },
  {
    title: "",
    dataIndex: "options",
    key: "options",
    width: "20%",
    render: () => (
      <div className="flex justify-end">
        <Dropdown
          icon={MenuVertical}
          label=""
          position="right"
          buttonStyle="text"
        >
          <li className="m-1">Edit</li>
          <li className="m-1">Delete</li>
        </Dropdown>
      </div>
    ),
  },
];
