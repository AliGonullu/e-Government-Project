import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from './LoginValidation.js';
import axios from 'axios';
import UserInfo from "../UserInfo.js";




function Login() {


  const navigate = useNavigate();

  const [values, setValues] = useState({
    TC: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (validationErrors.TC === "" && validationErrors.password === "") {
      try {
        const res = await axios.post('http://localhost:8090/user/edevlet', values);
        if (res.data !== "Error" || res.data !== "Failed") {
          UserInfo.userID = res.data[0].ID;
          UserInfo.userTC = res.data[0].TC;
          console.log(res.data);
          navigate('/MainPage');    // NAVIGATION İŞLEMİ

        } else {
          alert("No Record Existed.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center bg-secondary align-items-center vh-100">
      <div className="bg-light p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <div className="mb-3">
            <label htmlFor="TC"><strong>TC</strong></label>
            <input
              type="number"
              name="TC"
              placeholder="Your GovID"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.TC && <span className="text-danger">{errors.TC}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-danger w-100">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
