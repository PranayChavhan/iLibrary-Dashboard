import React, { useState } from "react";
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
import swal from 'sweetalert';
import axios from "axios";


const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [noofbook, setNoofbook] = useState("");
  
  const [bookImg, setBookImg] = useState("");

  const baseURL = "http://127.0.0.1:8000/api/add";

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("noofbook", noofbook);
    formData.append("image", bookImg);
  
    axios
      .post(baseURL, formData)
      .then((res) => {

        swal({
          title: "Good job!",
          text: "Book added successfully",
          icon: "success",
          button: {
            text:"Done",
          },
        })

      })
      .catch((err) => alert("File Upload Error"));
  

    

    // setTitle("");
    // setAuthor("");
    // setDescription("");
    // setCategory("");
    // setNoofbook("");
    // setBookImg("");
  };

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4 p-4">
            <h1>Add books</h1>
            <CForm onSubmit={handleSubmit} style={{ width: "40rem" }}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Book Name
                </CFormLabel>
                <CFormInput
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
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
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
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
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></CFormTextarea>
              </div>
              <div>
                <CFormSelect
                value={category}
                onChange={((e)=>{setCategory(e.target.value)})}
                aria-label="Default select example">
                  <option>Categories of Book</option>
                  <option value="First Year" >First Year</option>
                  <option value="Second Year" >Second Year</option>
                  <option value="Third Year" >Third Year</option>
                </CFormSelect>
              </div>
              <div className="mb-3 mt-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  No of Books
                </CFormLabel>
                <CFormInput
                value={noofbook}
                onChange={(e) => {
                  setNoofbook(e.target.value);
                }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Numbers of books"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Book Image</CFormLabel>
                <CFormInput 
                onChange={(e) => {
                  setBookImg(e.target.files[0]);
                }}
                type="file" id="formFile" />
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

export default AddBook;
