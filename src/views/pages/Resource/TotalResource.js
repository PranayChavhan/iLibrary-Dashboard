import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CButton,
  CCol,
  CRow,
} from "@coreui/react";

const TotalResource = () => {
  const [books, setBooks] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API;

  const loadStudent = async () => {
    axios
      .get(`${apiKey}/api/resources`)
      .then(function (response) {
        console.log(response.data.resources);
        setBooks(response.data.resources);
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
    .delete(`${apiKey}/api/resources/${id}`)
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
                  <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Resource Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">View</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {books.map((element) => {
                const { title, id, description, image } =
                  element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
                      <CTableDataCell>
                        <img
                          src={image}
                          width="70"
                          style={{ border: "1px solid gray", borderRadius: "5px" }}
                          alt="bopok-image"
                        />
                      </CTableDataCell>
                      <CTableDataCell>{title}</CTableDataCell>
                      <CTableDataCell>{description}</CTableDataCell>
                      
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
}

export default TotalResource