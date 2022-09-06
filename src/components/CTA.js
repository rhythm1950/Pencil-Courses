import React from "react";

const CTA = () => {
  return (
    <section class="p-lg-5 p-3 container bg-primary col-10 my-5 text-white rounded mx-auto text-center text-lg-start">
      <div class="d-flex flex-lg-row flex-column justify-content-around align-items-center p-3">
        <div>
          <h2>Ready to join?</h2>
          <p>
            Pencil Courses provide the best quality service in bangladesh.You
            can learn many things and crack a tech related job quickly.
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
                Pencil Courses provide the best quality service in bangladesh.
                You can learn many things and crack a tech related job quickly.
                So, what are you waiting for? Join us today and start learning.
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
  );
};

export default CTA;
