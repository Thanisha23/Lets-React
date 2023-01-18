import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link className="nav-item active">
              <a className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={props.changeMode}
            >
              Enable dark mode
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

//Prop-types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

//if we don't pass the props then the default props that will be set are:
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};

export default Navbar;
