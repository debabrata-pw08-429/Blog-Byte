import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    let obj = {
      email,
      password,
    };

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.status === 200) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        window.location = "/";
      });
    } else {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login_form">
      <h1>Login Form</h1>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
