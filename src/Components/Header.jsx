import React from "react";
import logo from "../assets/new-logo.svg";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg " style={{ background: "#017e7e" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li class="nav-item mx-3">
                <a
                  class="nav-link active li_color text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  ABHA<span className="sub_name">(Health ID)</span>{" "}
                </a>
              </li>
              <li class="nav-item mx-3">
                <a
                  class="nav-link active li_color text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  Dashboard{" "}
                </a>
              </li>
              <li class="nav-item mx-3">
                <a
                  class="nav-link active li_color text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  Verify Certificate{" "}
                </a>
              </li>
              <li class="nav-item mx-3">
                <a
                  class="nav-link active li_color text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  FAQ{" "}
                </a>
              </li>
              <li class="nav-item mx-3">
                <a
                  class="nav-link active li_color text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  Partners{" "}
                </a>
              </li>

              <button type="button" class="btn regi_btn mx-3">
                Register / Sign In{" "}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
