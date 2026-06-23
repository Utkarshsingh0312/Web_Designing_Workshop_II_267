import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Registration Successful!");

    setUsers([
      ...users,
      {
        name: formData.name,
        email: formData.email
      }
    ]);

    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "#eeeeee",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold"
          }}
        >
          Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "28px",
              border: "1px solid gray",
              outline: "none"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "28px",
              border: "1px solid gray",
              outline: "none"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "28px",
              border: "1px solid gray",
              outline: "none"
            }}
          />

          <div
            style={{
              textAlign: "center"
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Register
            </button>
          </div>
        </form>

        {success && (
          <h2
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "25px",
              fontSize: "30px"
            }}
          >
            {success}
          </h2>
        )}

        {users.length > 0 && (
          <div
            style={{
              backgroundColor: "#dfe8dd",
              padding: "20px",
              marginTop: "30px"
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              Registered Users
            </h2>

            <ul>
              {users.map((user, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    fontSize: "20px"
                  }}
                >
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;