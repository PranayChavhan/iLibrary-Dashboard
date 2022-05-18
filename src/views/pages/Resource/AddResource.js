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



const AddResource = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const baseURL = `${apiKey}/api/resources`;

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", img);

    console.log('====================================');
    console.log(formData);
    console.log('====================================');
  
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
            <h1>Add Resources</h1>
            <CForm onSubmit={handleSubmit} style={{ width: "40rem" }}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Resource Name
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
            
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Resource Image</CFormLabel>
                <CFormInput 
                onChange={(e) => {
                  setImg(e.target.files[0]);
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
}

export default AddResource