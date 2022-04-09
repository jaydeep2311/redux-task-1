import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setlogin } from "./Redux/action";
import { Auth } from "./Redux/action";

const Navbar = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const curUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(isAuth);
  const handlelogout = () => {
    if (isAuth) {
      dispatch(Auth(false));
      dispatch(setlogin({}));
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li
                className="nav-item"
                style={{
                  padding: "2%",
                  color: "black",
                }}
              >
                <Link
                  className="nav-item"
                  to="/home"
                  style={{
                    padding: "2%",
                    color: "black",
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  padding: "2%",
                  color: "black",
                }}
              >
                <Link
                  to="/register"
                  style={{
                    padding: "2%",
                    color: "black",
                  }}
                >
                  Register
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  padding: "2%",
                  color: "black",
                }}
              >
                <Link
                  to="/login"
                  style={{
                    padding: "2%",
                    color: "black",
                  }}
                >
                  Login
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  padding: "2%",
                  color: "black",
                }}
              >
                <Link
                  to="/employee"
                  style={{
                    padding: "2%",
                    color: "black",
                  }}
                  onClick={(event) => {
                    if (!isAuth) {
                      event.preventDefault();
                    }
                  }}
                >
                  Employee
                </Link>
              </li>
              <li>{isAuth ? "username:" + curUser.Name : ""}</li>
            </ul>
          </div>
        </div>
        <li
          style={{
            paddinfLeft: "5%",
          }}
        >
          {isAuth ? (
            <button
              style={{
                paddinfLeft: "100px",
              }}
              onClick={handlelogout}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
