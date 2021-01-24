import React from "react";
import { Link } from 'react-router-dom';
import './login.css';

const login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Welcome</h1>
        <span>
          <h3>Create a new account</h3>
        </span>
        <div className="input-field">
          <input
            className="effect"
            type="text"
            placeholder="Name"
            name="name"
            required
            autocomplete="off"
          />
          <span className="focus-border"></span>
        </div>
        <div className="input-field">
          <input
            className="effect"
            type="email"
            placeholder="Email"
            name="email"
            required
            autocomplete="off"
          />
          <span className="focus-border"></span>
        </div>
        <div className="input-field">
          <input
            className="effect"
            type="number"
            placeholder="Mobile No"
            name="mob"
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
        
        <div className="input-field">
          <input
            className="btn"
            type="submit"
            name="submitBtn"
            value="Sign Up"
          />
        </div>
        {/* <span>
          Already have an account ?<Link to="/src/components/login.js">Login</Link>
        </span> */}
      </form>
    </div>
  );
};

export default login;
