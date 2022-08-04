import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <header>
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="auth/signup">
          <div>Sign Up</div>
        </Link>
        <Link to="/auth/login">
          <div>Login</div>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
