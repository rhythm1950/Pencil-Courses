import React from "react";

const Header = () => {
  return (
    <header>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h4>Pencil Courses</h4>
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
            <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link px-3 active"
                  aria-current="page"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#courses">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#stats">
                  Stats
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#students">
                  Students
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
