import Notes from "components/Notes";

export const DASHBOARD_PATH = "/";
export const NOTES_PATH = "/notes";
export const CONTACTS_PATH = "/contacts";

export const ROUTES = [
  {
    path: NOTES_PATH,
    component: Notes,
  },
  {
    path: CONTACTS_PATH,
    component: Notes,
  },
];
