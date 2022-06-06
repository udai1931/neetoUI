import { Notes, UserCircle, Download } from "neetoicons";

export const APP_NAME = "neetoUI";
export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Notes,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Download,
  },
];

export const AVATAR_IMAGE_URL =
  "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";
