import React from "react";

const Statistics = () => {
  return (
    <section id="count-section">
      <div className="section-heading">
        <h1>Our Statistics</h1>
        <p>
          Our team is working to solve the issues in our society that build up
          <br /> bad and negative impact in our lives and people are getting
          depressed.
        </p>
      </div>

      <div className="cards-container">
        <div className="column">
          <div className="card">
            <img src="./icons/Frame-1.png" alt="frame" />
            <h3>759+</h3>
            <p>Contributor</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="./icons/Frame-1.png" alt="frame" />
            <h3>60k+</h3>
            <p>Recieved</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="./icons/Frame-1.png" alt="frame" />
            <h3>30+</h3>
            <p>Employees</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="./icons/Frame-1.png" alt="frame" />
            <h3>100k+</h3>
            <p>Goal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
