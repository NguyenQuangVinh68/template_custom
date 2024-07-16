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
import { ApiAuth } from "../../api";
import { useStore, action } from "../../store";

const Login = () => {
  const [state, dispatch] = useStore();

  const [errorLbl, setErrorLbl] = useState();
  const [loginInput, setLogin] = useState({
    emp_no: "",
    pass: "",
  });

  const handleInput = (e) => {
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("on submit");
    e.preventDefault();
    const data = {
      emp_no: loginInput.emp_no,
      password: loginInput.password,
    };
    (async () => {
      try {
        const cookie = new Cookie();
        const res = await ApiAuth.login(data);

        dispatch(action.setIsLogin(true));
        dispatch(action.setUser(jwt(res.data.token)));

        cookie.set("jwt_authentication", res.data.token);
      } catch (error) {
        setLogin({
          emp_no: "",
          password: "",
        });
        setErrorLbl(error.response.data.message);
      }
    })();
  };

  return (
    <>
      {state.isLogin && <Navigate to="/" />}
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
                          name="emp_no"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={handleInput}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          name="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={handleInput}
                        />
                      </CInputGroup>
                      {errorLbl && (
                        <p className="text-danger text-center">{errorLbl}</p>
                      )}
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
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
    </>
  );
};

export default Login;
