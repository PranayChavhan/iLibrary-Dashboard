import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  CCol,
  CRow,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
} from "@coreui/react";

const LoginPage = () => {
    let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
        history.push("/");
    }else{
        history.push("/login");
    }
  }, [])


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseURL = "http://127.0.0.1:8000/api/loginAdmin";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post(baseURL, formData)
      .then((res) => {
        let result = res.data.students;

        if (res.data.status === 202) {
          swal({
            title: "Good job!",
            text: "Login Successfully",
            icon: "success",
            button: {
              text: "Done",
            },
          });
          history.push("/dashboard");
          localStorage.setItem("isAuthenticated", JSON.stringify(result));
        } else {
          swal({
            title: "Error",
            text: "Login Faild",
            icon: "error",
            button: {
              text: "Done",
            },
          });
        }
      })
      .catch((err) => alert(err));


  };

  return (
    <div>
      <h6 className="p-2">iLibrary - Dashboard</h6>
      <CContainer>
        <CRow>
          <CCol></CCol>
          <CCol
            className=" border pb-5 rounded d-flex flex-column justify-content-center"
            xs={6}
          >
            <header class="header">
              <span class="header-brand">Login to continue...</span>
            </header>
            <CForm onSubmit={handleSubmit}>
              <div className="mt-5">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Email
                </CFormLabel>
                <CFormInput
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mt-3 mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Passsword
                </CFormLabel>
                <CFormInput
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
              </div>

              <CButton type="submit" color="success">
                Submit
              </CButton>
            </CForm>
          </CCol>
          <CCol></CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default LoginPage;
