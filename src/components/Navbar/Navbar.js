import React from 'react'
import DTULogo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img
          src={DTULogo}
          width="100%"
          height="80"
          class="d-inline-block align-top "
          alt="ICDM"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <ion-icon name="menu" size="large"></ion-icon>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/call-for-papers">
              Call for Papers
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/important-dates">
              Important Dates
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/venue">
              Venue
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/manuscript-submission-and-guidlines">
              Manuscript Submission And Guidelines
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/registration-details">
              Registration Details
            </Link>
          </li>
        </ul>
      
      </div>
    </nav>
        </div>
    )
}

export default Navbar
