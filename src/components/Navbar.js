// rfc - to create react function based component snippet
// impt - snippet to import prop-types

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// We can use Props to make the page dynamic
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                {props.hometext}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// you are here defining that which data types are you going to take as input in function
// Navbar.propTypes = {
//   //title: PropTypes.string.isRequired, // if after gving is required still u didnt put that parameter then you will find the error in console
//   title: PropTypes.string,
//   hometext: PropTypes.string,
//   abouttext: PropTypes.string,
// };

// // It will give the replacement if the title is not provided in app.js
// Navbar.defaultProps = {
//   title: "Set Title Name",
//   hometext: "Set Home Text",
//   abouttext: "Set About Text",
// };
