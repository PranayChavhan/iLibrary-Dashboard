import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilCalculator,
  cilBook,
  cilSpeedometer,
  cilLibrary,
  cilCaretRight,
  cilArrowRight,
  cilExpandRight,
  cilList,
  cilUser,
  cilNoteAdd,
  cilSchool,
  cilAddressBook,
} from "@coreui/icons";

import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavTitle,
    name: "Shelf",
  },
  {
    component: CNavItem,
    name: "Books",
    to: "/books",
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    badge: {
      color: "info",
      // text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: "Add Books",
    to: "/add-books",
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Issued Book",
    to: "/issued-book",
    icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Waiting List",
    to: "/waiting-list",
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavTitle,
    name: "Students",
  },
  {
    component: CNavItem,
    name: "Total Students",
    to: "/total-students",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Add students",
    to: "/add-students",
    icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavTitle,
    name: "Teachers",
  },
  {
    component: CNavItem,
    name: "Total Teachers",
    to: "/total-teachers",
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Add Teachers",
    to: "/add-teachers",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavTitle,
    name: "Resources",
  },
  {
    component: CNavItem,
    name: "Total Resources",
    to: "/total-resources",
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Isssued Resources",
    to: "/issued-resources",
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Add Resources",
    to: "/add-resources",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },



  {
    component: CNavTitle,
    name: "E-Books",
  },
  {
    component: CNavItem,
    name: "Total EBooks",
    to: "/total-ebooks",
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "Add Ebook",
    to: "/add-ebook",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
];

export default _nav;
