import React from "react";

import "../App.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-top">
          <div id="left">
            <h4>Subscribe</h4> <br />
            <form>
              <label htmlFor="email">
                <h6>Subscribe to our newsletter!</h6>
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <br />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div id="center">
            <h4>Quick Links</h4> <br />
            <h6>Shipping</h6> <br />
            <h6>Returns</h6> <br />
            <br />
          </div>
          <div id="right">
            <img
              id="shopping-bag"
              src={require("../images/thumbnailbag.png")}
              alt="We Are One United, Always, Shopping Bag"
              width="65px"
              height="85px"
            />{" "}
            <h5>**Free with $50 purchase.</h5>
          </div>
        </div>
        <div className="footer-bottom">
          <hr />
          <div className="container">
            <div className="thumbnails">
              <img src={require("../images/Visa.png")} alt="Visa thumbnail" />
              <img
                src={require("../images/MasterCard.png")}
                alt="Mastercard thumbnail"
              />
              <img src={require("../images/Amex.png")} alt="Amex thumbnail" />
              <img
                src={require("../images/Paypal.png")}
                alt="Paypal thumbnail"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

// /*  */
