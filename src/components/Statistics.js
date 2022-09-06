import React from "react";

const Statistics = () => {
  return (
    <section class="stats container p-lg-5 p-4 mb-4" id="stats">
      <div class="row d-flex align-items-center bg-light my-4">
        <div class="stats-img col-md-5">
          <img src="./images/working.png" alt="" />
        </div>

        <div class="col-md-7 p-4 p-lg-2">
          <h2>Explore Our Premium Courses</h2>
          <p class="d-sm-none">
            Pencil Courses provide the best quality service in bangladesh.You
            can learn many things and crack a tech related job quickly. Pencil
            Courses offer you a great environment and system of learning where
            you just need to follow the instructions of the expert and
            experienced instructors who will guide you throughout the course.
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
  );
};

export default Statistics;
