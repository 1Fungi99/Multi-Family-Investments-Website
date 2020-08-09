import React from "react";
import Container from "@material-ui/core/Container";

function Nav() {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/about-us">
              About Us
            </a>
            <a className="nav-link" href="/investment-criteria">
              Investment Criteria
            </a>
            <a className="nav-link" href="/contact-us">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Nav;
