import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#1976d2",
        color: "#fff",
      }}
    >
      <div>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          E-Shop
        </Link>
      </div>
      <div>
        {!token ? (
          <>
            <Link to="/login" style={{ color: "#fff", marginRight: "10px" }}>Login</Link>
            <Link to="/signup" style={{ color: "#fff" }}>Signup</Link>
          </>
        ) : (
          <>
            <Link to="/cart" style={{ color: "#fff", marginRight: "10px" }}>Cart</Link>
            <button onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
