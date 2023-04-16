import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact-content">
        Feel free to reach out to one of our customer service agents with any
        concerns or questions.
      </div>
      <div className="contact-info-container">
        <div>
          <i>
            <strong>Address:</strong> 123 Sample Street, A1A 1A1, St.John's, NL,
            Canada
          </i>
        </div>
        <div className="contact-info">
          <i>
            <strong>Phone:</strong> 1-(709)-123-4567
          </i>
        </div>
        <div>
          <i>
            <strong>Email:</strong> oneunited@info.ca
          </i>
        </div>
      </div>
      <div className="contact-info">
        <strong>Or Visit Our Socials:</strong>
      </div>
      <div className="socials">
        <img src={require("../images/Socials.png")}></img>
      </div>
    </div>
  );
};

export default Contact;
