
import React from "react";

function App() {

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f3f0ff",
  };

  const formStyle = {
    background: "white",
    padding: "35px",
    borderRadius: "18px",
    width: "380px",
    boxShadow: "0 0 15px rgba(0,0,0,0.15)",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#7c3aed",
    marginBottom: "25px",
    fontSize: "34px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    border: "2px solid #c4b5fd",
    borderRadius: "10px",
    fontSize: "18px",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(to right, #7c3aed, #9333ea)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "22px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <div style={formStyle}>
        <h1 style={headingStyle}>Student Registration Form</h1>

        <input type="text" placeholder="Student Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input type="text" placeholder="Course" style={inputStyle} />
        <input type="tel" placeholder="Mobile Number" style={inputStyle} />

        <button style={buttonStyle}>Register</button>
      </div>
    </div>
  );
}

export default App;
