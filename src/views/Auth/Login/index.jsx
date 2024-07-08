import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookie from "universal-cookie";
import jwt from "jwt-decode";

import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CRow,
} from "@coreui/react";
import storeKey from "../../../constants/store-key";

import apiAuth from "../../../api/apiAuth";

function Login() {
  const [authentication, setAuthention] = useState(false);

  const [list_err, setListError] = useState({
    list: {
      Email: [],
      Password: [],
    },
  });
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    (async () => {
      try {
        const res = await apiAuth.login(data);
        const cookie = new Cookie();
        const decode = jwt(res.data.token);
        localStorage.setItem(storeKey.USER, JSON.stringify(decode));
        console.log(storeKey.USER);
        cookie.set("jwt_authentication", res.data.token);
        setAuthention(true);
      } catch (error) {
        setLogin({
          email: "",
          password: "",
        });
        setListError((prev) => ({
          ...prev,
          list: error.response.data.errors,
        }));
      }
    })();
  };

  return (
    <div>
      {authentication && <Navigate to="/" />}
      <form onSubmit={handleSubmit} className="sign__form">
        <div className="sign__group">
          <input
            type="text"
            name="email"
            onChange={handleInput}
            value={loginInput.email}
            className="sign__input"
            placeholder="Email"
          />

          {list_err.list.Email != undefined &&
            list_err.list.Email.map((item, index) => {
              return (
                <p className="error sign__text m-0 text-danger" key={index}>
                  {item}
                </p>
              );
            })}
        </div>
        <div className="sign__group">
          <input
            type="password"
            name="password"
            onChange={handleInput}
            value={loginInput.password}
            className="sign__input"
            placeholder="Password"
          />
          {list_err.list.Password != undefined &&
            list_err.list.Password.map((item, index) => {
              return (
                <p className="error sign__text m-0 text-danger" key={index}>
                  {item}
                </p>
              );
            })}
        </div>
        <div className="sign__group sign__group--checkbox">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            defaultChecked="checked"
          />
        </div>
        <button className="sign__btn" type="submit">
          Sign in
        </button>
        <span className="sign__text">
          Don't have an account? <Link to="/register">Register!</Link>
        </span>
      </form>

      <CForm className="row g-3">
        <CCol md={6}>
          <CFormInput type="email" id="inputEmail4" label="Email" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="password" id="inputPassword4" label="Password" />
        </CCol>
        <CCol xs={12}>
          <CFormInput
            id="inputAddress"
            label="Address"
            placeholder="1234 Main St"
          />
        </CCol>
        <CCol xs={12}>
          <CFormInput
            id="inputAddress2"
            label="Address 2"
            placeholder="Apartment, studio, or floor"
          />
        </CCol>
        <CCol md={6}>
          <CFormInput id="inputCity" label="City" />
        </CCol>
        <CCol md={4}>
          <CFormSelect id="inputState" label="State">
            <option>Choose...</option>
            <option>...</option>
          </CFormSelect>
        </CCol>
        <CCol md={2}>
          <CFormInput id="inputZip" label="Zip" />
        </CCol>
        <CCol xs={12}>
          <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Sign in
          </CButton>
        </CCol>
      </CForm>
    </div>
  );
}

export default Login;
