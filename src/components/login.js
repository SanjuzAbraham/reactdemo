import React from "react";
import './login.css';

const login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Hello</h1>
        <span>
          <h3>Login to your account</h3>
        </span>
        <div className="input-field">
          <input
            className="effect"
            type="email"
            placeholder="Username"
            name="email"
            required
            autocomplete="off"
          />
          <span className="focus-border"></span>
        </div>
        <div className="input-field">
          <input
            className="effect"
            type="password"
            placeholder="Password"
            name="password"
            required
            autocomplete="off"
          />
          <span className="focus-border"></span>
        </div>
        <span style={{textAlign: "right", marginRight: "30px"}}>
          <a>Forgot password ?</a>
        </span>
        <div className="input-field">
          <input
            className="btn"
            type="submit"
            name="submitBtn"
            value="LOG IN"
          />
        </div>
        <span>
          Don't have account ?<a>Sign Up</a>
        </span>
      </form>
    </div>
  );
};

export default login;
