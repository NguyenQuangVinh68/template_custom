import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import imgLogo from "../../../assets/image/logo.svg";

function Register() {
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    list_err: [],
  });

  const handleInput = (e) => {
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    axios
      .post(`/signup`, data)
      .then((res) => {
        // neu signup thanh cong thi se luu trong localstore
        if (res.data.status === 200) {
          localStorage.setItem("ACCESS_TOKEN", res.data.token);
          localStorage.setItem("user_name", res.data.token);
        } else {
          setRegister({ ...registerInput, list_err: res.data.validator_err });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="sign__form">
      <a href="#" className="sign__logo">
        <img src={imgLogo} alt="" />
      </a>
      <div className="sign__group">
        <input
          type=""
          value={registerInput.name}
          className="sign__input"
          name="name"
          placeholder="Name"
          onChange={handleInput}
        />
        <span className="error sign__text">{registerInput.list_err.name}</span>
      </div>
      <div className="sign__group">
        <input
          type=""
          value={registerInput.email}
          className="sign__input"
          name="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <span className="error sign__text">{registerInput.list_err.email}</span>
      </div>

      <div className="sign__group">
        <input
          type=""
          value={registerInput.password}
          className="sign__input"
          name="password"
          placeholder="Password"
          onChange={handleInput}
        />
        <span className="error sign__text">
          {registerInput.list_err.password}
        </span>
      </div>

      <div className="sign__group sign__group--checkbox">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          defaultChecked="checked"
        />
        <label htmlFor="remember">
          I agree to the <a href="privacy.html">Privacy Policy</a>
        </label>
      </div>

      <button className="sign__btn" type="submit">
        Sign up
      </button>
      <span className="sign__text">
        Already have an account? <Link to="/login">Login!</Link>
      </span>
    </form>
  );
}

export default Register;
