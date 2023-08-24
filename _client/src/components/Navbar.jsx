import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserInfo(data);
      });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    });

    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1>BlogByte</h1>
        </Link>
        <div>
          {username ? (
            <p>
              Welcome back, <span className="highlight">{username}</span>
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          {username ? (
            <>
              <Link to={"/create"}> + Create Post</Link>
              <Link to={"/"} onClick={logout}>
                logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <p>Login</p>
              </Link>

              <Link to="/register">
                <p>Register</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
