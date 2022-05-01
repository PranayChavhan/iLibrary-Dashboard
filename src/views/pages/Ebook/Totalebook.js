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
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/addebook")
      .then(function (response) {
        console.log(response.data.ebooks);
        setBooks(response.data.ebooks);
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
                const { title, author, category, size, pages, id, image } =
                  element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>

                      <CTableDataCell>
                        <div>
                          <embed
                            src={image}
                            width="100"
                            height="120"
                            type="application/pdf"
                          />
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
                        <CButton color="danger">Delete</CButton>
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
