import React from "react";
import registerImage from "./img/register.svg";
import { Link } from "react-router-dom";

function Register() {
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
                <div className="row d-flex">
                  <div className="col-lg-6">
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Full Name</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="text"
                        name="name"
                        placeholder="Enter your name and surname"
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
                        name="phone"
                        placeholder="Enter a valid phone number"
                      />{" "}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">School Type</h6>
                      </label>{" "}
                      <input
                        type="text"
                        name="text"
                        placeholder="Primary or Secondary"
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
                        name="number"
                        placeholder="Highest fee a term"
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
                        name="text"
                        placeholder="Enter school motto"
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
                      />{" "}
                    </div>
                  </div>
                </div>

                <div className="row py-3 px-3">
                  {" "}
                  <button type="submit" className="btn btn-blue text-center">
                    Register
                  </button>{" "}
                </div>
                <div className="row mb-4 px-3">
                  {" "}
                  <small className="font-weight-bold">
                    Already have an account?{" "}
                    <Link to="/">
                      <a className="text-danger ">Login</a>
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
