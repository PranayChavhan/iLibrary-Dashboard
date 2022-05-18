import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CCard,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormSelect,
  CButton,
} from "@coreui/react";
import swal from "sweetalert";
import axios from "axios";

const EditBook = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;


  let params = useParams();

  const [books, setBooks] = useState([]);

  const loadStudent = async () => {
    axios
    .get(`${apiKey}/api/search/${params.name}`)
    .then(function (response) {
      console.log(response.data);
      setBooks(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  };
  const [titlee, setTitlee] = useState("");
  const [authorr, setAuthorr] = useState("");
  const [descriptionn, setDescriptionn] = useState("");
  const [categoryy, setCategoryy] = useState("");
  const [noofbookk, setNoofbookk] = useState("");
  const [imagee, setImagee] = useState("");

  useEffect(() => {
    loadStudent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", titlee);
    formData.append("author", authorr);
    formData.append("description", descriptionn);
    formData.append("category", categoryy);
    formData.append("noofbook", noofbookk);
    formData.append("image", imagee);

    axios
      .put(`${apiKey}/api/editbook/${id}`, formData)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Book Edited successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4 p-4">
            <h1>Edit Book</h1>

            <CForm onSubmit={handleSubmit} style={{ width: "40rem" }}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Book Name
                </CFormLabel>
                <CFormInput
                  value={titlee}
                  onChange={(e) => {
                    setTitlee(e.target.value);
                  }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Book Name"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Author
                </CFormLabel>
                <CFormInput
                  value={authorr}
                  onChange={(e) => {
                    setAuthorr(e.target.value);
                  }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Author name"
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  Description
                </CFormLabel>
                <CFormTextarea
                  value={descriptionn}
                  onChange={(e) => {
                    setDescriptionn(e.target.value);
                  }}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></CFormTextarea>
              </div>
              <div>
                <CFormSelect
                  value={categoryy}
                  onChange={(e) => {
                    setCategoryy(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Categories of Book</option>
                  <option value="Operating System">Operating System</option>
                  <option value="Java Programming">Java Programming</option>
                  <option value="c/c++ Programming">c/c++ Programming</option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="Object Oriented Programming">
                    Object Oriented Programming
                  </option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Data Structure">Data Structure</option>
                  <option value="Engineering Graphics">
                    Engineering Graphics
                  </option>
                  <option value="Networking">Networking</option>
                  <option value="RDBMS">RDBMS</option>
                  <option value="Computer Security">Computer Security</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mechanics">Mechanics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                </CFormSelect>
              </div>
              <div className="mb-3 mt-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  No of Books
                </CFormLabel>
                <CFormInput
                  value={noofbookk}
                  onChange={(e) => {
                    setNoofbookk(e.target.value);
                  }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Numbers of books"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Book Image</CFormLabel>
                <CFormInput
                  // value={image}
                  onChange={(e) => {
                    setImagee(e.target.files[0]);
                  }}
                  type="file"
                  id="formFile"
                />
              </div>
              <CButton type="submit" color="success">
                Submit
              </CButton>
            </CForm>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default EditBook;
