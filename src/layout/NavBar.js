import { Link } from "react-router-dom";
import React from "react";
import { LoginContext } from "../App";
export function NavBar() {
  const { token, setToken } = React.useContext(LoginContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#e1c2e4" }}
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={`/home`}>
            <b>Home </b>
          </Link>
        </li>

        {!token && (
          <li className="nav-item">
            <Link className="nav-link" to={`/login`}>
              <b>Login </b>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
