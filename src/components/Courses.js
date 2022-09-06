import React from "react";

const Courses = () => {
  return (
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
  );
};

export default Courses;
