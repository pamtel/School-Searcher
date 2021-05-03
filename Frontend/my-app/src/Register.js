import React, { useState, useCallback } from "react";
import registerImage from "./img/register.svg";
import { Link } from "react-router-dom";
import axios from 'axios'

function Register() {
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    school_type: "",
    address: "",
    fees: "",
    logo: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/v1/user/register"
    // setInput({
    //         full_name: "",
    //         email: "",
    //         phone_number: "",
    //         school_type: "",
    //         address: "",
    //         fees: "",
    //         logo: "",
    //         password: "",
    //       }); 
    const data = {
              full_name: input.full_name,
              email: input.email,
              phone_number: input.phone_number,
              school_type: input.school_type,
              address: input.address,
              fees: input.fees,
              logo: input.logo,
              password: input.password,
            }
    axios.post(url, data)
    .then((res) => {
      console.log("Res", res.data);
    })
    .catch((err) =>{
      console.log("Err Connecting to Backend", err);
    })

    
    
  }
    
  //   useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     const data = await fetch {
  //       headers: {
  //         "content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(input),
  //     });

  //     const result = await data.json();
  //     
  //     return result;
  //   },
  //   [input]
  // );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row">
                  <img
                    src="https://i.imgur.com/CXQmsmF.png"
                    alt="signIn"
                    className="logo"
                  />
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src={registerImage} alt="register" className="image" />{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <form className="row d-flex" onSubmit={(e) => handleSubmit(e)}>
                  <div className="col-lg-6">
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Full Name</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="full_name"
                        placeholder="Enter your name and surname"
                        value={input.full_name}
                        onChange={handleChange}
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Email Address</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="email"
                        placeholder="Enter a valid email address"
                        value={input.email}
                        onChange={handleChange}
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Phone Number</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="phone_number"
                        placeholder="Enter a valid phone number"
                        value={input.phone_number}
                        onChange={handleChange}
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">School Type</h6>
                      </label>{" "}
                      <input
                        type="text"
                        name="school_type"
                        placeholder="Primary or Secondary"
                        value={input.school_type}
                        onChange={handleChange}
                      />{" "}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">School Address</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="address"
                        placeholder="Enter School address"
                        value={input.address}
                        onChange={handleChange}
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">School fees</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="fees"
                        placeholder="Highest fee a term"
                        value={input.fees}
                        onChange={handleChange}
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Logo</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="logo"
                        placeholder="Enter school motto"
                        value={input.logo}
                        onChange={handleChange}
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Password</h6>
                      </label>{" "}
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={input.password}
                        onChange={handleChange}
                      />{" "}
                    </div>
                  </div>

                  <div className="row py-3 px-3">
                  {" "}
                  <button type="submit" className="btn btn-blue text-center">
                    Register
                  </button>{" "}
                </div>
                </form>


                <div className="row mb-4 px-3">
                  {" "}
                  <small className="font-weight-bold">
                    Already have an account?{" "}
                    <Link to="/" className="text-danger ">
                      Login
                    </Link>
                  </small>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue py-4">
            <div className="row px-3">
              {" "}
              <small className="ml-4 ml-sm-5 mb-2">
                Copyright &copy; 2021. All rights reserved.
              </small>
              <div className="social-contact ml-4 ml-sm-auto">
                {" "}
                <span className="fa fa-facebook mr-4 text-sm"></span>{" "}
                <span className="fa fa-google-plus mr-4 text-sm"></span>{" "}
                <span className="fa fa-linkedin mr-4 text-sm"></span>{" "}
                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
