import React from "react";

const Hero = () => {
  return (
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
              <p>Become skilled in quick time and crack your first tech job!</p>
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
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
