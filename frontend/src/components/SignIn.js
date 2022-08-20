import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

export const SignIn = (props) =>  {
    let [authMode, setAuthMode] = useState("signin");

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    let dataToSubmit = {
        "email":"client6@user.com",
        "password":"123",
    }


    const onSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');

        axios.post("http://localhost:3001/signin", {
            dataToSubmit
        }).then((response)=> {
            console.log(response);
         }).catch(error => console.log(error))
    }
  if (authMode === "signin") {
    return (
      <>
        <Navigation />
        <div className="Auth-form-container">
            <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                </span>
                </div>
                <div className="form-group mt-3">
                <label>Email address test</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                />
                </div>
                <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                />
                </div>
                <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>
                    Submit
                </button>
                </div>
                <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
                </p>
            </div>
            </form>
        </div>
        </>
    )
  }else{
    return (
        <>
            <Navigation />
            <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                    Already registered?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                    Sign In
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Full Name</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="e.g Jane Doe"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form>
            </div>
        </>
      )
  }

  
}