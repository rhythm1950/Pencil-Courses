import React from "react";

const Plans = () => {
  return (
    <section id="plan-section">
      <div className="section-heading">
        <h1>Our Donation Plan</h1>
        <p>
          We have various donation plans so that everyone can contribute
          <br /> to this heavenly human activity.
        </p>
      </div>

      <div className="plans-container">
        <div className="plan-div" id="plan-div1">
          <img src="./icons/food.png" alt="food" />
          <h3>Food for all</h3>
          <p>
            We are working hard to ensure the food, which is one of the most
            essential things to lead our lives, for all the people around us in
            Bangladesh.
          </p>
        </div>

        <div className="plan-div" id="plan-div2">
          <img src="./icons/shelter.png" alt="shelter" />
          <h3>Shelter for all</h3>
          <p>
            Many people are out of shelter in Bangladesh who needs help from us
            to get a place to stay. So we all should join to contribute here.
          </p>
        </div>

        <div className="plan-div" id="plan-div3">
          <img src="./icons/Frame-1.png" alt="frame" />
          <h3>Basic education</h3>
          <p>
            We have been working with an amazing enthusiastic team who learn and
            implement the knowledge to solve the problems of daily life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
