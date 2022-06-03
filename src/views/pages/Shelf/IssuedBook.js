import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CCol,
  CButton,
  CRow,
} from "@coreui/react";

const IssuedBook = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBook();
  }, []);
  const loadBook = async () => {
    axios
      .get(`${apiKey}/api/allissuedbook`)
      .then(function (response) {
        setBooks(response.data.issuedbook);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function removeItem(id) {
    axios
      .delete(`${apiKey}/api/bookkk/${id}`)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Book Accepted successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
        loadBook();
      })
      .catch((err) => alert(err));
  }

  return (
    <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="btn btn-primary mb-2"
        table="table-to-xls"
        filename="Students"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CTable hover id="table-to-xls">
              <CTableHead>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Enrollment No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Year</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Essued Book</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Accept</CTableHeaderCell>
                 
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {books.map((element) => {
                  const {
                    title,
                    author,
                    category,
                    userEmail,
                    userEnrollment,
                    userName,
                    updated_at,
                    image,
                    id,
                    status,
                  } = element;
                  return (
                    <>
                      {status === "Issued" ? (
                        <>
                          <CTableRow>
                            <CTableHeaderCell scope="row">
                              {id}
                            </CTableHeaderCell>
                            <CTableDataCell>{userName}</CTableDataCell>
                            <CTableDataCell>{userEnrollment}</CTableDataCell>
                            <CTableDataCell>2rd Year</CTableDataCell>
                            <CTableDataCell>
                              {updated_at.slice(0, 10)}
                            </CTableDataCell>
                            <CTableDataCell>{title}</CTableDataCell>
                            <CTableDataCell>{category}</CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeItem(id);
                                }}
                                color="success"
                                type="sumbit"
                              >
                                Accept
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        </>
                      ) : null}
                    </>
                  );
                })}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default IssuedBook;
