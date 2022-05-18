import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";
import { useHistory } from "react-router-dom";
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

const Books = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  let navigate = useHistory();
  const [books, setBooks] = useState([]);

  const loadStudent = async () => {
    axios
      .get(`${apiKey}/api/add`)
      .then(function (response) {
        console.log(response.data.books);
        setBooks(response.data.books);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log('==========uhuhauauaunauauna==========================');
  console.log(books.length);
  console.log('====================================');
  useEffect(() => {
    loadStudent();
  }, []);

  const handleDelete = (id) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");

    axios
      .delete(`${apiKey}/api/book/${id}`)
      .then(function () {
        swal({
          title: "Good job!",
          text: "Book deleted successfully",
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

  const handleEdit = (title) => {
    navigate.push(`/${title}`);
  };

  return (
    <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="btn btn-primary mb-2"
        table="table-to-xls"
        filename="Book"
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
                  <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Book Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Author</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">No Of Boooks</CTableHeaderCell>

                  <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              {books.map((element) => {
                const { title, author, category, noofbook, id, image } =
                  element;
                return (
                  <CTableBody>
                    <CTableRow key={id}>
                      <CTableHeaderCell scope="row">{id}</CTableHeaderCell>
                      <CTableDataCell>
                        <img
                          src={image}
                          width="70"
                          style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                          }}
                          alt="bopok-image"
                        />
                      </CTableDataCell>
                      <CTableDataCell>{title}</CTableDataCell>
                      <CTableDataCell>{author}</CTableDataCell>
                      <CTableDataCell>{category}</CTableDataCell>
                      <CTableDataCell>{noofbook}</CTableDataCell>

                      <CTableDataCell>
                        <CButton
                          onClick={() => {
                            handleEdit(title);
                          }}
                          color="success"
                        >
                          Edit
                        </CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          onClick={(e) => {
                            handleDelete(id);
                          }}
                          color="danger"
                        >
                          Delete
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

export default Books;
