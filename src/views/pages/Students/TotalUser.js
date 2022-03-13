import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CCard,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";
const TotalUser = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/addUser")
      .then(function (response) {
        console.log(response.data.books);
        setUserData(response.data.books);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CTable hover>
              <CTableHead>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Enrollment No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Year</CTableHeaderCell>
                  <CTableHeaderCell scope="col">View</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              {userData.map((element) => {
                const {
                  name,
                  enrollment,
                  email,
                  contact,
                  address,
                  department,
                  year,
                  id,
                } = element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
                      <CTableDataCell>{name}</CTableDataCell>
                      <CTableDataCell>{enrollment}</CTableDataCell>
                      <CTableDataCell>{email}</CTableDataCell>
                      <CTableDataCell>{contact}</CTableDataCell>
                      <CTableDataCell>{address}</CTableDataCell>
                      <CTableDataCell>{department}</CTableDataCell>
                      <CTableDataCell>{year}</CTableDataCell>
                      <CTableDataCell><CButton color="primary" disabled>View</CButton></CTableDataCell>
                      <CTableDataCell><CButton color="success">Edit</CButton></CTableDataCell>
                      <CTableDataCell><CButton color="danger">Delete</CButton></CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                );
              })}
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default TotalUser;
