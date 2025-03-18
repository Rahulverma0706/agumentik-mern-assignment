import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
