import React from "react";

const Donation = () => {
  return (
    <section id="donation-section">
      <div className="section-heading">
        <h1>Donate Today</h1>
        <p>
          We have been facing a lot of natural disasters in our country
          <br /> from the very past for which people face trouble
        </p>
      </div>

      <div className="btn-container">
        <button className="donation-button">100tk</button>
        <button className="donation-button active-button">200</button>
        <button className="donation-button">500tk</button>
        <button className="donation-button">1000tk</button>
        <button className="donation-button">5000tk</button>
      </div>
      <input type="text" name="" id="" placeholder="Other Amount (Taka)" />
      <button className="main-button">
        <a href="shahriarrhythm.com" target="_blank">
          Donate Today
        </a>
      </button>
    </section>
  );
};

export default Donation;
