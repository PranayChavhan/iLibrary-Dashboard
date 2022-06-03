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

const IssuedResource = () => {
  const [books, setBooks] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API;

  const loadStudent = async () => {
    axios
      .get(`${apiKey}/api/issueresourses`)
      .then(function (response) {
        console.log(response.data.iissuedresources);
        setBooks(response.data.iissuedresources);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const handleDelete = (id) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");

    axios
      .delete(`${apiKey}/api/issueresourses/${id}`)
      .then(function () {
        swal({
          title: "Good job!",
          text: "Accepted successfully",
          icon: "success",
          button: {
            text: "Ok",
          },
        });
        loadStudent();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
                  <CTableHeaderCell scope="col">UserName</CTableHeaderCell>
                  <CTableHeaderCell scope="col">UserEmail</CTableHeaderCell>
                  <CTableHeaderCell scope="col">From</CTableHeaderCell>
                  <CTableHeaderCell scope="col">To</CTableHeaderCell>
                  
                  <CTableHeaderCell scope="col">Accept</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {books.map((element) => {
                const { title, image, userEmail, userName, from, to, id } = element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
                      <CTableDataCell>
                        <img
                          src={`${apiKey}${image}`}
                          width="70"
                          style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                          }}
                          alt="bopok-image"
                        />
                      </CTableDataCell>
                      <CTableDataCell>{title}</CTableDataCell>
                      <CTableDataCell>{userName}</CTableDataCell>
                      <CTableDataCell>{userEmail}</CTableDataCell>
                      <CTableDataCell>{from}</CTableDataCell>
                      <CTableDataCell>{to}</CTableDataCell>

                     
                     
                      <CTableDataCell>
                        <CButton
                          onClick={(e) => {
                            handleDelete(id);
                          }}
                          color="success"
                        >
                          Accept
                        </CButton>
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

export default IssuedResource;
