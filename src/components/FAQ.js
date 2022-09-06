import React from "react";

const FAQ = () => {
  return (
    <section class="container p-lg-5 p-3 mb-5" id="faq">
      <div class="text-center mx-auto pt-3 px-2 col-lg-6">
        <h2>Frequently Asked Questions</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div class="accordion col-lg-8 col-12 pt-4 mx-auto" id="accordionExample">
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
              Layout is that flexbox was designed for layout in one dimension -
              either a row or a column. Grid was designed for two-dimensional
              layout - rows, and columns at the same time. The two
              specifications share some common features, however, and if you
              have already learned how to use flexbox, the similarities should
              help you get to grips with Grid.
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
              Tailwind CSS is not a UI kit. Unlike UI kits such as Bootstrap,
              Bulma, and Foundation, Tailwind CSS doesn’t have a default theme
              or built-in UI components. Instead, it comes with predesigned
              widgets you can use to build your site from scratch.
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
              The CSS box model is a container that contains multiple properties
              including borders, margin, padding, and the content itself. It is
              used to create the design and layout of web pages. It can be used
              as a toolkit for customizing the layout of different elements. The
              web browser renders every element as a rectangular box according
              to the CSS box model.
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
              The HTML semantics refers to the tags that provide meaning to an
              HTML page rather than just presentation. It makes HTML more
              comprehensible by better defining the different sections and
              layout of web pages.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
