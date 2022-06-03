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

const Totalebook = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [books, setBooks] = useState([]);

  const loadStudent = async () => {
    axios
      .get(`${apiKey}/api/addebook`)
      .then(function (response) {
        console.log(response.data.ebooks);
        setBooks(response.data.ebooks);
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
    .delete(`${apiKey}/api/ebook/${id}`)
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
                  <CTableHeaderCell scope="col">Book Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Author</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Size in MB</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Pages</CTableHeaderCell>
                  <CTableHeaderCell scope="col">View</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {books.map((element) => {
                const { title, author, category, size, pages, id, image, bookimg } =
                  element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>

                      <CTableDataCell>
                        <div>
                          <img src={`${apiKey}${bookimg}`} width="100"  alt="" />
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>{title}</CTableDataCell>
                      <CTableDataCell>{author}</CTableDataCell>
                      <CTableDataCell>{category}</CTableDataCell>
                      <CTableDataCell>{size}</CTableDataCell>
                      <CTableDataCell>{pages}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="primary">View</CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color="success">Edit</CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton  onClick={((e)=>{handleDelete(id)})} color="danger">Delete</CButton>
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

export default Totalebook;
