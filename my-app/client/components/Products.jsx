import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("userToken", res.data.token);
      navigate("/products"); // Redirect to products after login
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border px-2 py-1 mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-2 py-1 mb-2" />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    </div>
  );
}

export default Login;
