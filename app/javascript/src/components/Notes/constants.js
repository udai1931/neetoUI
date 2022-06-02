import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const MENUBAR_DATA = {
  heads: [
    {
      title: "All",
      count: 200,
    },
    {
      title: "Users",
      count: 80,
    },
    {
      title: "Leads",
      count: 60,
    },
    {
      title: "Visitors",
      count: 60,
    },
  ],
  segments: [
    {
      title: "Europe",
      count: 80,
    },
    {
      title: "Middle-East",
      count: 60,
    },
    {
      title: "Asia",
      count: 60,
    },
  ],
  tags: [
    {
      title: "Sales",
      count: 80,
    },
    {
      title: "Finance",
      count: 60,
    },
    {
      title: "User Experience",
      count: 60,
    },
  ],
};

export const NOTES_DATA = [
  {
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdby: "Udai Gupta",
  },
  {
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdby: "Udai Gupta",
  },
  {
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdby: "Udai Gupta",
  },
  {
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Udai Gupta",
  },
];
