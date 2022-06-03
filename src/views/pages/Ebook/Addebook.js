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
import swal from "sweetalert";
import axios from "axios";

const Addebook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [pages, setPages] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [Img, setImg] = useState("");

  const apiKey = process.env.REACT_APP_NEWS_API;

  const baseURL = `${apiKey}/api/addebook`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("size", size);
    formData.append("pages", pages);
    formData.append("image", bookImg);
    formData.append("bookimg", Img);

    axios
      .post(baseURL, formData)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "E-Book added successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
      })
      .catch((err) => alert("File Upload Error"));

    setTitle("");
    setAuthor("");
    setDescription("");
    setCategory("");
    setSize("");
    setPages("");
    setBookImg("");
    setImg("");
  };

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4 p-4">
            <h1>Add E-books</h1>
            <CForm onSubmit={handleSubmit} style={{ width: "40rem" }}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Ebook Name
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
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Categories of Book</option>
                  <option value="Operating System">Operating System</option>
                  <option value="Java Programming">Java Programming</option>
                  <option value="c/c++ Programming">c/c++ Programming</option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="Data Structure">Data Structure</option>
                  <option value="Networking">Networking</option>
                  <option value="RDBMS">RDBMS</option>
                  <option value="Computer Security">Computer Security</option>
                  <option value="Web Development">Web Development</option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Size in MB
                </CFormLabel>
                <CFormInput
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="size in mb"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Pages
                </CFormLabel>
                <CFormInput
                  value={pages}
                  onChange={(e) => {
                    setPages(e.target.value);
                  }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="No of pages"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">PDF File</CFormLabel>
                <CFormInput
                  onChange={(e) => {
                    setBookImg(e.target.files[0]);
                  }}
                  type="file"
                  id="formFile"
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="formFile">PDF Image</CFormLabel>
                <CFormInput
                  onChange={(e) => {
                    setImg(e.target.files[0]);
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

export default Addebook;
