import React from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="login-box">
        <form>
          <p className="title">Login</p>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          <center>
            <span className="submit">Submit</span>
          </center>
        </form>
        <div className="navigationLink">
          <p className="signup">
            Don't have an account?
            <Link to="/Signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
