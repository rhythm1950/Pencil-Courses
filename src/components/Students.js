import React from "react";

const Students = () => {
  return (
    <section class="container p-lg-5 p-3" id="students">
      <div class="col-lg-5 col-12 pt-5 text-center text-lg-start">
        <h2>Meet Our Successful Students</h2>
        <p>
          More than 5.7k students have taken the courses of Pencil Courses and
          they got an impact in their lives.
        </p>
      </div>

      <div>
        <div class="row gx-3 pt-4">
          {/* <!-- Student 1 --> */}
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="border">
              <img src="./images/student/student-1.png" class="w-100" alt="" />
              <div class="p-3">
                <h5>Awlad Hossain</h5>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          {/* <!-- Student 2 --> */}
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="border">
              <img src="./images/student/student-2.png" class="w-100" alt="" />
              <div class="p-3">
                <h5>Jannatul Islam</h5>
                <p>Motion Designer</p>
              </div>
            </div>
          </div>
          {/* <!-- Student 3 --> */}
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="border">
              <img src="./images/student/student-3.png" class="w-100" alt="" />
              <div class="p-3">
                <h5>Imran Hossain</h5>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
          {/* <!-- Student 4 --> */}
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="border">
              <img src="./images/student/student-4.png" class="w-100" alt="" />
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
  );
};

export default Students;
