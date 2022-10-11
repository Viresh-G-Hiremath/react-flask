import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.msg) {
        throw new Error(data.msg);
      }
      setUser(data.login); //set user here
      navigate("/");
    } catch (er) {
      console.log(er.message);
      setError(er.message); //set error here
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="p-5 m-4 mt-5 bg-light border border-secondary rounded"
        style={{ width: "400px" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Login</h1>
          <hr className="mb-4" />
          <div>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="form-control mb-4"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <button className="btn btn-primary w-100">Login</button>
          </div>
          <div>
            <p className="mt-4 text-danger">{error}</p>
            <p className="mt-4">
              Don't have a account? <Link to="/register">register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
