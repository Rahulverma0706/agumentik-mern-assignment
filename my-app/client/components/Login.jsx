import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
