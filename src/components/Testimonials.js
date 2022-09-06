import React from "react";

const Testimonials = () => {
  return (
    <section class="p-0 p-lg-5 my-5 container" id="testimonials">
      <div class="text-center mx-auto p-3 col-lg-6">
        <h2>Some Students Feedback</h2>
        <p>
          Hear from our students who have been doing well in many tech companies
          all around the world
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
                bangladesh.You can learn many things and crack a tech related
                job quickly. Pencil Courses offer you a great environment and
                system of learning where you just need to follow the
                instructions of the expert and experienced instructors who will
                guide you throughout the course.
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
                bangladesh.You can learn many things and crack a tech related
                job quickly. Pencil Courses offer you a great environment and
                system of learning where you just need to follow the
                instructions of the expert and experienced instructors who will
                guide you throughout the course.
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
  );
};

export default Testimonials;
