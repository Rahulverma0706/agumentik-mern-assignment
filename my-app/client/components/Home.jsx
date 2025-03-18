import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken"); // Check if user is logged in

  useEffect(() => {
    if (token) {
      navigate("/products"); // Redirect if logged in
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <div className="space-x-4">
        <button onClick={() => navigate("/login")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
        <button onClick={() => navigate("/register")} className="px-4 py-2 bg-green-500 text-white rounded">
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
