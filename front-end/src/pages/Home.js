import React from "react";

export default function Home({ setUser }) {
  const handleLogout = async () => {
    const res = await fetch("http://127.0.0.1:5000/logout", {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
    setUser(data.login);
  };

  return (
    <div>
      <h1 className="text-success text-center">Login success</h1>
      <button className="btn btn-primary" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
