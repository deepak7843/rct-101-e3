import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return (
    <div className="login" >
      <p>Login</p>
      <input data-cy="login-email" name="email" type="email" placeholder="Enter Email" class  />
      <br />
      <input data-cy="login-password" name="password" type= "password" placeholder="Enter Password..." />
      <br />
      <button data-cy="login-submit" type= "submit" > Login </button>
    </div>
  );
};

export default Login;
