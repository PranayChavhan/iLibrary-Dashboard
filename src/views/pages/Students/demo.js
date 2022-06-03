import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import * as XLSX from "xlsx";
import axios from "axios";
import {
  CCard,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
} from "@coreui/react";
const Demo = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // submit
  const [excelData, setExcelData] = useState(null);
  // it will contain array of objects

  //  handle File
  const fileType = ["application/vnd.ms-excel"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    } else {
      setExcelData(null);
    }
  };

  const [name, setName] = useState("");
  const [enroll, setEnroll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Pass@123");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  const [userImg, setUserImg] = useState("");

  const handleClick = (
    StudentName,
    EnrollmentNo,
    Email,
    Contact,
    Address,
    Department,
    Year,
    Password,
    UploadImage
  ) => {
    setName(StudentName);
    setEnroll(EnrollmentNo);
    setEmail(Email);
    setContact(Contact);
    setAddress(Address);
    setDepartment(Department);
    setYear(Year);
    setPassword(Password);
    setUserImg(UploadImage);

    const article = {
      name: name,
      enrollment: enroll,
      email: email,
      password: password,
      contact: contact,
      address: address,
      department: department,
      year: year,
      userImg: userImg,
    };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("enrollment", enroll);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("userImg", userImg);

    console.log("====================================");
    console.log(article);
    console.log("====================================");

    axios
      .post(`${apiKey}/api/addUser`, article)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Student added successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
      })
      .catch((err) => alert(err));
  };

  const removeItem = (
    StudentName,
    EnrollmentNo,
    Email,
    Contact,
    Address,
    Department,
    Year,
    Password,
    UploadImage
  ) => {
    const article = {
      name: StudentName,
      enrollment: EnrollmentNo,
      email: Email,
      password: Password,
      contact: Contact,
      address: Address,
      department: Department,
      year: Year,
      userImg: UploadImage,
    };

    const formData = new FormData();
    formData.append("name", StudentName);
    formData.append("enrollment", EnrollmentNo);
    formData.append("email", Email);
    formData.append("password", Password);
    formData.append("contact", Contact);
    formData.append("address", Address);
    formData.append("department", Department);
    formData.append("year", Year);
    formData.append("userImg", UploadImage);

    console.log("====================================");
    console.log(article);
    console.log("====================================");
    axios
      .post(`${apiKey}/api/addUser`, formData)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "User Added Successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <CForm onSubmit={handleSubmit} style={{ width: "40rem" }}>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Submit File</CFormLabel>
          <CFormInput onChange={handleFile} type="file" id="formFile" />
        </div>
        <CButton type="submit" color="success">
          Submit
        </CButton>
      </CForm>
      <div>
        {!excelData ? (
          <h1>No data found</h1>
        ) : (
          <CRow>
            <CCol xs>
              <CCard className="mb-4">
                <CTable hover>
                  <CTableHead>
                    <CTableRow color="primary">
                      <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        Student Name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        Enrollment No
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        Department
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Year</CTableHeaderCell>
        
                      <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Register</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  {excelData.map((element) => {
                    const {
                      SrNo,
                      StudentName,
                      EnrollmentNo,
                      Email,
                      Contact,
                      Address,
                      Department,
                      Year,
                      Password,
                      UploadImage,
                    } = element;

                    return (
                      <CTableBody>
                        <CTableRow key={SrNo}>
                          <CTableHeaderCell scope="row">
                            {SrNo}
                          </CTableHeaderCell>
                          <CTableDataCell>{StudentName}</CTableDataCell>
                          <CTableDataCell>{EnrollmentNo}</CTableDataCell>
                          <CTableDataCell>{Email}</CTableDataCell>
                          <CTableDataCell>{Contact}</CTableDataCell>
                          <CTableDataCell>{Address}</CTableDataCell>
                          <CTableDataCell>{Department}</CTableDataCell>
                          <CTableDataCell>{Year}</CTableDataCell>
                         
                          <CTableDataCell>
                            <CButton color="danger">Delete</CButton>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              onClick={() => {
                                removeItem(
                                  StudentName,
                                  EnrollmentNo,
                                  Email,
                                  Contact,
                                  Address,
                                  Department,
                                  Year,
                                  Password,
                                  UploadImage
                                );
                              }}
                              color="warning"
                            >
                              Register
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
        )}
      </div>
    </div>
  );
};

export default Demo;
