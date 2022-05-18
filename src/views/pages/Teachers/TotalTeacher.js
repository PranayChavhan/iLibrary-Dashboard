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
  CButton,
} from "@coreui/react";

const TotalTeacher = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [teacherData, setTeacherData] = useState([]);

  const loadStudent = async () => {
    axios
      .get(`${apiKey}/api/teachers`)
      .then(function (response) {
        console.log(response.data.teachers);
        setTeacherData(response.data.teachers);
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
    .delete(`${apiKey}/api/teacher/${id}`)
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
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CTable hover>
              <CTableHead>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Teacher Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Teacher's ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                  <CTableHeaderCell scope="col">View</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              {teacherData.map((element) => {
                const { name, teacher_id, contact, address, department, id } =
                  element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
                      <CTableDataCell>{name}</CTableDataCell>
                      <CTableDataCell>{teacher_id}</CTableDataCell>
                      <CTableDataCell>{contact}</CTableDataCell>
                      <CTableDataCell>{address}</CTableDataCell>
                      <CTableDataCell>{department}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="primary" disabled>
                          View
                        </CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color="success">Edit</CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton onClick={((e)=>{handleDelete(id)})} color="danger">Delete</CButton>
                      </CTableDataCell>
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

export default TotalTeacher;
