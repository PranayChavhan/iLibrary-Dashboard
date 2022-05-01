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

const AddTeacher = () => {
    const [name, setName] = useState("");
    const [teacher_id, setTeacher_id] = useState("");
    const [password, setPassword] = useState("Pass@123");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [department, setDepartment] = useState("");
    const [teacherImg, setTeacherImg] = useState("");
  
    const baseURL = "http://127.0.0.1:8000/api/teachers";
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("teacher_id", teacher_id);
      formData.append("contact", contact);
      formData.append("address", address);
      formData.append("department", department);
      formData.append("teacherImg", teacherImg);
    
      axios
        .post(baseURL, formData)
        .then((res) => {
        })
        .catch((err) => alert("File Upload Error"));
    
  
      swal({
        title: "Good job!",
        text: "Book added successfully",
        icon: "success",
        button: {
          text:"Done",
        },
      })
  
    //   setTitle("");
    //   setAuthor("");
    //   setDescription("");
    //   setCategory("");
    //   setBookImg("");
    };


  return (
    <div>
        <CRow>
        <CCol xs>
          <CCard className="mb-4 p-4">
            <h1>Add Teacher</h1>
            <CForm onSubmit={handleSubmit} style={{ width: "40rem" }}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                Teacher Name
                </CFormLabel>
                <CFormInput
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Book Name"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                Teacher's ID
                </CFormLabel>
                <CFormInput
                value={teacher_id}
                onChange={(e) => {
                  setTeacher_id(e.target.value);
                }}
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Author name"
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  Password
                </CFormLabel>
                <CFormInput
                type = "password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                  id="exampleFormControlTextarea1"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  Contact
                </CFormLabel>
                <CFormInput
                type = "text"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                  id="exampleFormControlTextarea1"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  Address
                </CFormLabel>
                <CFormInput
                type = "text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                  id="exampleFormControlTextarea1"
                 />
              </div>
            
              <div>
                <CFormSelect
                value={department}
                onChange={((e)=>{setDepartment(e.target.value)})}
                aria-label="Default select example">
                  <option>Department</option>
                  <option value="CM" >CM</option>
                  <option value="CE" >CE</option>
                  <option value="IT" >IT</option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Upload Image</CFormLabel>
                <CFormInput 
                onChange={(e) => {
                  setTeacherImg(e.target.files[0]);
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
  )
}

export default AddTeacher