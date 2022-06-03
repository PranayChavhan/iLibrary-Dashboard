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
  CCol,
  CRow,
  CButton,
} from "@coreui/react";

const WaitingList = () => {
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

  function removeItem(
    title,
    author,
    category,
    userEmail,
    userEnrollment,
    userName,
    status,
    image,
    id
  ) {
    const article = {
      title: title,
      author: author,
      category: category,
      userEmail: userEmail,
      userEnrollment: userEnrollment,
      userName: userName,
      status: "Issued",
      image: image,
      id: id,
    };

    axios
      .post(`${apiKey}/api/issuedbook/${id}`, article)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Book added to wishlist successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
        loadBook();
      })
      .catch((err) => alert(err));
  }

  function removeBook(id) {
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
                  <CTableHeaderCell scope="col">Reject</CTableHeaderCell>
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
                      {status === "Waiting" ? (
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
                                 
                                  removeItem(
                                    title,
                                    author,
                                    category,
                                    userEmail,
                                    userEnrollment,
                                    userName,
                                    status,
                                    image,
                                    id
                                  );
                                }}
                                color="success"
                                type="sumbit"
                              >
                                Accept
                              </CButton>
                            </CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeBook(id);
                                }}
                                color="danger"
                              >
                                Reject
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

export default WaitingList;
