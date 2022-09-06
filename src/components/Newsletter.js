import React from "react";

const Newsletter = () => {
  return (
    <section id="newsletter-section">
      <div className="section-heading">
        <h1>Subscribe To Our Newsletter</h1>
        <p>
          We can noify you whenever we do any activity of donation. If you are
          willing
          <br /> to recieve our message regularly then please subscribe to our
          newsletter and we will be in touch shortly.
        </p>
      </div>

      <div className="form">
        <input
          type="email"
          className="form-email"
          placeholder="Enter your email address"
        />
        <button className="form-button">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
