import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
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

      <main>
        {/* <!-- Hero section --> */}
        <section class="hero pb-5" id="hero">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              {/* <!-- carousel-1 --> */}
              <div class="carousel-item active">
                <img
                  src="./images/cover/cover (1).jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <h2>Get Started With Pencil Courses</h2>
                  <p>
                    Become skilled in quick time and crack your first tech job!
                  </p>
                  <button class="btn btn-primary">Discover Courses</button>
                </div>
              </div>
              {/* <!-- carousel-2 --> */}
              <div class="carousel-item">
                <img
                  src="./images/cover/cover (2).jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-md-block">
                  <h2>Get Complete Learning In Pencil Courses</h2>
                  <p>
                    We provide you with the best quality services in the courses
                  </p>
                  <button class="btn btn-primary">Discover Courses</button>
                </div>
              </div>
              {/* <!-- carousel-3 --> */}
              <div class="carousel-item">
                <img
                  src="./images/cover/cover (3).jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption d-md-block">
                  <h2>Step Towards Your Future In Tech World</h2>
                  <p>Huge opportunities are waiting for you, just grab it!</p>
                  <button class="btn btn-primary">Discover Courses</button>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* <!-- Courses section --> */}
        <section class="p-0 p-lg-5 container" id="courses">
          <div class="text-center mx-auto pt-5 px-2 col-lg-6">
            <h2>Discover Our Popular Courses</h2>
            <p>
              We provide high-quality services by the expert and experienced
              instructors in the courses of Pencil Curses
            </p>
          </div>

          <div class="container">
            <div class="row gx-4 row p-lg-4 p-2">
              {/* <!-- Course 1 --> */}
              <div class="col-12 col-lg-6 mb-3">
                <div class="border">
                  <div class="d-flex align-items-center rounded flex-lg-row flex-sm-row flex-column mx-auto">
                    <div class="course-img">
                      <img src="./images/course/course-1.png" alt="" />
                    </div>
                    <div class="p-4">
                      <h5>UI/UX Design</h5>
                      <p>Learn UI/UX design from here and crack a job!</p>
                      <p class="text-primary">Price : 25$</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Course 2 --> */}
              <div class="col-12 col-lg-6 mb-3">
                <div class="border">
                  <div class="d-flex align-items-center rounded flex-lg-row flex-sm-row flex-column mx-auto">
                    <div class="course-img">
                      <img src="./images/course/course-2.png" alt="" />
                    </div>
                    <div class="p-4">
                      <h5>Graphics Design</h5>
                      <p>Learn Graphics design from here and crack a job!</p>
                      <p class="text-primary">Price : 30$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Course 3 --> */}
            <div class="row gx-4 row p-lg-4 p-2">
              <div class="col-12 col-lg-6 mb-3">
                <div class="border">
                  <div class="d-flex align-items-center rounded flex-lg-row flex-sm-row flex-column mx-auto">
                    <div class="course-img">
                      <img src="./images/course/course-3.png" alt="" />
                    </div>
                    <div class="p-4">
                      <h5>Web Development</h5>
                      <p>Learn Web Development from here and crack a job!</p>
                      <p class="text-primary">Price : 40$</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Course 4 --> */}
              <div class="col-12 col-lg-6 mb-3">
                <div class="border">
                  <div class="d-flex align-items-center rounded flex-lg-row flex-sm-row flex-column mx-auto">
                    <div class="course-img">
                      <img src="./images/course/course-4.png" alt="" />
                    </div>
                    <div class="p-4">
                      <h5>App Development</h5>
                      <p>Learn App Development from here and crack a job!</p>
                      <p class="text-primary">Price : 35$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Course 5 --> */}
            <div class="row gx-4 row p-lg-4 p-2">
              <div class="col-12 col-lg-6 mb-3">
                <div class="border">
                  <div class="d-flex align-items-center rounded flex-lg-row flex-sm-row flex-column mx-auto">
                    <div class="course-img">
                      <img src="./images/course/course-5.png" alt="" />
                    </div>
                    <div class="p-4">
                      <h5>Digital Marketing</h5>
                      <p>Learn Digital Marketing from here and crack a job!</p>
                      <p class="text-primary">Price : 50$</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Course 6 --> */}
              <div class="col-12 col-lg-6 mb-3">
                <div class="border">
                  <div class="d-flex align-items-center rounded flex-lg-row flex-sm-row flex-column mx-auto">
                    <div class="course-img">
                      <img src="./images/course/course-6.png" alt="" />
                    </div>
                    <div class="p-4">
                      <h5>Web Design</h5>
                      <p>Learn Web Design from here and crack a job!</p>
                      <p class="text-primary">Price : 55$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center py-5">
            <button class="btn btn-primary" type="button">
              See More Courses
            </button>
          </div>
        </section>

        {/* <!-- Stats section --> */}
        <section class="stats container p-lg-5 p-4 mb-4" id="stats">
          <div class="row d-flex align-items-center bg-light my-4">
            <div class="stats-img col-md-5">
              <img src="./images/working.png" alt="" />
            </div>

            <div class="col-md-7 p-4 p-lg-2">
              <h2>Explore Our Premium Courses</h2>
              <p class="d-sm-none">
                Pencil Courses provide the best quality service in
                bangladesh.You can learn many things and crack a tech related
                job quickly. Pencil Courses offer you a great environment and
                system of learning where you just need to follow the
                instructions of the expert and experienced instructors who will
                guide you throughout the course.
              </p>
              <p>
                The more you will put effort today, the more output you will get
                tomorrow. So, what are you waiting for? Join us today and start
                learning.
              </p>
              <div class="row py-3">
                <div class="col-lg-4 col-6 mb-4">
                  <h2>5.7K+</h2>
                  <h6>Students Passed</h6>
                </div>
                <div class="col-lg-4 col-6 mb-4">
                  <h2>4.7+</h2>
                  <h6>Course Rating</h6>
                </div>
                <div class="col-lg-4 col-6 mb-4">
                  <h2>17+</h2>
                  <h6>Online Course</h6>
                </div>
              </div>
              <button class="btn btn-primary" type="button">
                See More Courses
              </button>
            </div>
          </div>
        </section>

        {/* <!-- CTA section --> */}
        <section class="p-lg-5 p-3 container bg-primary col-10 my-5 text-white rounded mx-auto text-center text-lg-start">
          <div class="d-flex flex-lg-row flex-column justify-content-around align-items-center p-3">
            <div>
              <h2>Ready to join?</h2>
              <p>
                Pencil Courses provide the best quality service in
                bangladesh.You can learn many things and crack a tech related
                job quickly.
              </p>
            </div>

            <button
              type="button"
              class="btn btn-outline-light col-lg-3 col-sm-4 col-10"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Join And Explore!
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade text-black-50"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Join Pencil COurses Today!
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Pencil Courses provide the best quality service in
                    bangladesh. You can learn many things and crack a tech
                    related job quickly. So, what are you waiting for? Join us
                    today and start learning.
                    <a href="#">
                      Click here to join the facebook group of Pencil Courses.
                    </a>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Students section --> */}
        <section class="container p-lg-5 p-3" id="students">
          <div class="col-lg-5 col-12 pt-5 text-center text-lg-start">
            <h2>Meet Our Successful Students</h2>
            <p>
              More than 5.7k students have taken the courses of Pencil Courses
              and they got an impact in their lives.
            </p>
          </div>

          <div>
            <div class="row gx-3 pt-4">
              {/* <!-- Student 1 --> */}
              <div class="col-lg-3 col-sm-6 mb-3">
                <div class="border">
                  <img
                    src="./images/student/student-1.png"
                    class="w-100"
                    alt=""
                  />
                  <div class="p-3">
                    <h5>Awlad Hossain</h5>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
              {/* <!-- Student 2 --> */}
              <div class="col-lg-3 col-sm-6 mb-3">
                <div class="border">
                  <img
                    src="./images/student/student-2.png"
                    class="w-100"
                    alt=""
                  />
                  <div class="p-3">
                    <h5>Jannatul Islam</h5>
                    <p>Motion Designer</p>
                  </div>
                </div>
              </div>
              {/* <!-- Student 3 --> */}
              <div class="col-lg-3 col-sm-6 mb-3">
                <div class="border">
                  <img
                    src="./images/student/student-3.png"
                    class="w-100"
                    alt=""
                  />
                  <div class="p-3">
                    <h5>Imran Hossain</h5>
                    <p>Graphic Designer</p>
                  </div>
                </div>
              </div>
              {/* <!-- Student 4 --> */}
              <div class="col-lg-3 col-sm-6 mb-3">
                <div class="border">
                  <img
                    src="./images/student/student-4.png"
                    class="w-100"
                    alt=""
                  />
                  <div class="p-3">
                    <h5>Nishi Akter</h5>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center py-5">
              <button class="btn btn-primary" type="button">
                View All
              </button>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials section --> */}
        <section class="p-0 p-lg-5 my-5 container" id="testimonials">
          <div class="text-center mx-auto p-3 col-lg-6">
            <h2>Some Students Feedback</h2>
            <p>
              Hear from our students who have been doing well in many tech
              companies all around the world
            </p>
          </div>

          <div class="container px-4 pt-3">
            <div class="row gx-3">
              {/* <!-- Testimonial-1 --> */}
              <div class="col-lg-6 col-sm-12 mb-3">
                <div class="p-4 border">
                  <div class="icons d-flex justify-content-between align-items-center">
                    <div class="quote-icon">
                      <h2>
                        <i class="fa-solid fa-quote-right"></i>
                      </h2>
                    </div>
                    <div>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star-half text-warning"></i>
                    </div>
                  </div>

                  <p class="pb-2">
                    Pencil Courses provide the best quality service in
                    bangladesh.You can learn many things and crack a tech
                    related job quickly. Pencil Courses offer you a great
                    environment and system of learning where you just need to
                    follow the instructions of the expert and experienced
                    instructors who will guide you throughout the course.
                  </p>
                  <div class="d-flex">
                    <div class="img">
                      <img src="./images/student/student-5.png" alt="" />
                    </div>
                    <div class="ps-3">
                      <h5>Awlad Hossain</h5>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Testimonial-2 --> */}
              <div class="col-lg-6 col-sm-12">
                <div class="p-4 border">
                  <div class="icons d-flex justify-content-between align-items-center">
                    <div class="quote-icon">
                      <h2>
                        <i class="fa-solid fa-quote-right"></i>
                      </h2>
                    </div>
                    <div class="ratings">
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star-half text-warning"></i>
                    </div>
                  </div>

                  <p class="pb-2">
                    Pencil Courses provide the best quality service in
                    bangladesh.You can learn many things and crack a tech
                    related job quickly. Pencil Courses offer you a great
                    environment and system of learning where you just need to
                    follow the instructions of the expert and experienced
                    instructors who will guide you throughout the course.
                  </p>
                  <div class="d-flex">
                    <div class="img">
                      <img src="./images/student/student-6.png" alt="" />
                    </div>
                    <div class="ps-3">
                      <h5>Shanta Akter</h5>
                      <p>Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- FAQ section --> */}
        <section class="container p-lg-5 p-3 mb-5" id="faq">
          <div class="text-center mx-auto pt-3 px-2 col-lg-6">
            <h2>Frequently Asked Questions</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div
            class="accordion col-lg-8 col-12 pt-4 mx-auto"
            id="accordionExample"
          >
            {/* <!-- question #1 --> */}
            <div class="accordion-item mb-3 border border-1">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What are the differences between flexbox and grid layout?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  The basic difference between CSS Grid Layout and CSS Flexbox
                  Layout is that flexbox was designed for layout in one
                  dimension - either a row or a column. Grid was designed for
                  two-dimensional layout - rows, and columns at the same time.
                  The two specifications share some common features, however,
                  and if you have already learned how to use flexbox, the
                  similarities should help you get to grips with Grid.
                </div>
              </div>
            </div>
            {/* <!-- question #2 --> */}
            <div class="mb-3 border border-1">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What are the differences between bootstrap and tailwind?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  The main difference between TailwindCSS and Bootstrap is that
                  Tailwind CSS is not a UI kit. Unlike UI kits such as
                  Bootstrap, Bulma, and Foundation, Tailwind CSS doesn’t have a
                  default theme or built-in UI components. Instead, it comes
                  with predesigned widgets you can use to build your site from
                  scratch.
                </div>
              </div>
            </div>
            {/* <!-- question #3 --> */}
            <div class="mb-3 border border-1">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  what is css box model?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  The CSS box model is a container that contains multiple
                  properties including borders, margin, padding, and the content
                  itself. It is used to create the design and layout of web
                  pages. It can be used as a toolkit for customizing the layout
                  of different elements. The web browser renders every element
                  as a rectangular box according to the CSS box model.
                </div>
              </div>
            </div>
            {/* <!-- question #4 --> */}
            <div class="mb-3 border border-1">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  what is a semantic tag?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  The HTML semantics refers to the tags that provide meaning to
                  an HTML page rather than just presentation. It makes HTML more
                  comprehensible by better defining the different sections and
                  layout of web pages.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Companies section --> */}
        <section class="mb-5 container px-5 d-none d-lg-block visible-hidden visible-block-lg">
          <h2 class="text-center">Trusted by over 800+ companies</h2>
          <div class="d-flex justify-content-around align-items-center company-img px-5">
            <img src="./images/company/company-1.png" alt="" class="m-3 p-3" />
            <img src="./images/company/company-2.png" alt="" class="m-3 p-3" />
            <img src="./images/company/company-3.png" alt="" class="m-3 p-3" />
            <img src="./images/company/company-4.png" alt="" class="m-3 p-3" />
            <img src="./images/company/company-5.png" alt="" class="m-3 p-3" />
            <img src="./images/company/company-6.png" alt="" class="m-3 p-3" />
          </div>
        </section>
      </main>

      <footer class="bg-dark text-center text-white p-5">
        <h2>Pencil Courses</h2>
        <p>Office 41, Zawaya Buildin, Ghala Muscat,</p>
        <p>Sultanate of Oman</p>
        <p>
          <a href="#" class="text-decoration-none text-muted">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" class="text-decoration-none text-muted">
            Terms of use
          </a>
        </p>
        <h3>
          <a href="https://www.linkedin.com/in/shahriar-rhythm/">
            <i class="fa-brands fa-facebook px-2 text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/shahriar-rhythm/">
            <i class="fa-brands fa-instagram px-2 text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/shahriar-rhythm/">
            <i class="fa-brands fa-twitter px-2 text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/shahriar-rhythm/">
            <i class="fa-brands fa-linkedin px-2 text-white"></i>
          </a>
        </h3>
      </footer>
    </>
  );
};

export default App;
