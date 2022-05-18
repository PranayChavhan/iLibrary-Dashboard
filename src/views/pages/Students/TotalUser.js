import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
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
  CButton,
} from "@coreui/react";
const TotalUser = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [userData, setUserData] = useState([]);
  
  const loadStudent = async () => {
    axios
    .get(`${apiKey}/api/addUser`)
    .then(function (response) {
      console.log(response.data.students);
      setUserData(response.data.students);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  useEffect(() => {
    
    loadStudent();
  }, []);


  const handleDelete = (id) =>{
    console.log('====================================');
    console.log(id);
    console.log('====================================');
  
    axios
    .delete(`${apiKey}/api/student/${id}`)
    .then(function() {
      swal({
        title: "Good job!",
        text: "Book deleted successfully",
        icon: "success",
        button: {
          text:"Ok",
        },
      });
      loadStudent();
      
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  return (
    <div>
       <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="btn btn-primary mb-2"
        table="table-to-xls"
        filename="Student"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CTable hover id="table-to-xls">
              <CTableHead>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="col">SrNo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">StudentName</CTableHeaderCell>
                  <CTableHeaderCell scope="col">EnrollmentNo</CTableHeaderCell>
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
                      <CTableDataCell><CButton onClick={((e)=>{handleDelete(id)})} color="danger">Delete</CButton></CTableDataCell>
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
