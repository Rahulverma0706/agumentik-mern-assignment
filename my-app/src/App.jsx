import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../client/components/Login";
import Register from "../client/components/Register";
import Products from "../client/components/Products";
import Home from "../client/components//Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>  {/* ✅ Close <Routes> here */}
    </Router>
  );
}

export default App;
