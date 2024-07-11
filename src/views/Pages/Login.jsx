import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookie from "universal-cookie";
import jwt from "jwt-decode";

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import apiAuth from "../../api/apiAuth";

const Login = () => {
  const [list_err, setListError] = useState({
    list: {
      emp_no: [],
      pass: [],
    },
  });
  const [loginInput, setLogin] = useState({
    emp_no: "",
    pass: "",
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      emp_no: loginInput.emp_no,
      pass: loginInput.pass,
    };

    (async () => {
      try {
        const res = await apiAuth.login(data);
        setAuthention(true);
      } catch (error) {
        setLogin({
          emp_no: "",
          pass: "",
        });
        setListError((prev) => ({
          ...prev,
          list: error.response.data.errors,
        }));
      }
    })();
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={handleInput}
                      />
                      {list_err.list.emp_no != undefined &&
                        list_err.list.emp_no.map((item, index) => {
                          return (
                            <p
                              className="error sign__text m-0 text-danger"
                              key={index}
                            >
                              {item}
                            </p>
                          );
                        })}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={handleInput}
                      />
                      {list_err.list.pass != undefined &&
                        list_err.list.pass.map((item, index) => {
                          return (
                            <p
                              className="error sign__text m-0 text-danger"
                              key={index}
                            >
                              {item}
                            </p>
                          );
                        })}
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
