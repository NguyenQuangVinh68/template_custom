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

  return <div></div>;
}

export default Login;
