import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  let location = useLocation();
  
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <Logo />
        
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
            <li className={`nav-item ${location.pathname==="/general"? "active":""}`}>
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {/* <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li> */}
            <li className={`nav-item ${location.pathname==="/business"? "active":""}`}>
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className={`nav-item ${location.pathname==="/entertainment"? "active":""}`}>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className={`nav-item ${location.pathname==="/general"? "active":""}`}>
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className={`nav-item ${location.pathname==="/health"? "active":""}`}>
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className={`nav-item ${location.pathname==="/science"? "active":""}`}>
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-item ${location.pathname==="/sports"? "active":""}`}>
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-item ${location.pathname==="/technology"? "active":""}`}>
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
