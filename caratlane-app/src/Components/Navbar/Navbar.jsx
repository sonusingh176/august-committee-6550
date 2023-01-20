import React from "react";
import logo from "../../assests/img/vector.svg";
import './navbar.css'
import indi from '../../assests/img/india.png'

function Navbar() {
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} alt="" style={{ width: "12%" }} />
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            <i className="bi bi-house-heart"></i>
              <li className="nav-item">
                <a  className="nav-link navtxt"  href="#">
                  FREE TRY AT HOME
                </a>
              </li>

              <i className="bi bi-shop"></i>
              <li className="nav-item">
                <a className="nav-link navtxt" href="#">
                  FIND STORE
                </a>
              </li>

              <i className="bi bi-bag-heart"></i>
              <li className="nav-item">
                <a className="nav-link navtxt" href="#" >
                  PLAN OF PURCHASE
                </a>
              </li>

              <i className="bi bi-gem"></i>
              <li className="nav-item">
                <a className="nav-link navtxt" href="#">
                  BUT DIGITAL GOLD
                </a>
              </li>

            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button  className="btn btn-outline-success" type="submit">
                <i className="ri-search-line"></i>
              </button>
            </form>
            <img src={indi} alt="" style={{width:'40px'}} />
            <i class="bi bi-person-fill"></i>
            <i class="bi bi-heart-fill"></i>
            <i class="bi bi-bag-check-fill"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
