import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const fetchData = async () => {
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      setUser(); //set user here
      navigate("/");
    } catch (er) {
      console.log(er.message);
      setFormData({ ...formData, error: er.message }); //set error here
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="mt-5 m-4 p-5 bg-light border border-secondary rounded"
        style={{ width: "400px" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="text-center ">Register</h1>
          <hr className="mb-4" />
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name :
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control mb-4"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name :
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control mb-4"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="text"
              id="email"
              className="form-control mb-4"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="pasword" className="form-label">
              Password:
            </label>
            <input
              type="text"
              id="pasword"
              className="form-control mb-5"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              required
            />
          </div>
          <div>
            <button className="btn btn-primary w-100">Register</button>
          </div>
          <p className="mt-4 text-danger">{formData.error}</p>
          <p className="mt-4">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
