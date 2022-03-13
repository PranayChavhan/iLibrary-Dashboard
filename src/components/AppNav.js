import React from "react";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CBadge,
  CNavGroup,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import {
  cilSpeedometer,
  cilBook,
  cilLibrary,
  cilCaretRight,  
  cilList,
  cilUser,
  cilNoteAdd,
  cilSchool,
  cilAddressBook,
} from "@coreui/icons";

const AppNav = () => {
  return (
    <div>
      <CSidebar>
        <CNavItem href="/dashboard">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Dashboard
        </CNavItem>

        <CSidebarNav>
          <CNavGroup toggler="SHELF">
            <CNavItem href="/books">
              <CIcon customClassName="nav-icon" icon={cilBook} /> Books
            </CNavItem>

            <CNavItem href="/add-books">
              <CIcon customClassName="nav-icon" icon={cilLibrary} /> Add Books
            </CNavItem>

            <CNavItem href="/issued-book">
              <CIcon customClassName="nav-icon" icon={cilCaretRight} /> Issued
              Book
            </CNavItem>

            <CNavItem href="/waiting-list">
              <CIcon customClassName="nav-icon" icon={cilList} /> Waiting List
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>

        <CSidebarNav>
          <CNavGroup toggler="STUDENTS">
            <CNavItem href="/total-students">
              <CIcon customClassName="nav-icon" icon={cilUser} /> Total Students
            </CNavItem>

            <CNavItem href="/add-students">
              <CIcon customClassName="nav-icon" icon={cilNoteAdd} /> Add
              Students
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>

        <CSidebarNav>
          <CNavGroup toggler="TEACHERS">
            <CNavItem href="/total-teachers">
              <CIcon customClassName="nav-icon" icon={cilSchool} /> Total
              Teachers
            </CNavItem>

            <CNavItem href="/add-teachers">
              <CIcon customClassName="nav-icon" icon={cilAddressBook} /> Add
              Teachers
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
        <CSidebarNav>
          <CNavGroup toggler="RESOURCES">
            <CNavItem href="/total-resources">
              <CIcon customClassName="nav-icon" icon={cilSchool} /> Total
              Resources
            </CNavItem>

            <CNavItem href="/add-resources">
              <CIcon customClassName="nav-icon" icon={cilLibrary} /> Add
              Resources
            </CNavItem>

            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilCaretRight} /> Issued
              Resources
            </CNavItem>

            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilList} /> Waiting List
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
      </CSidebar>
    </div>
  );
};

export default AppNav;
