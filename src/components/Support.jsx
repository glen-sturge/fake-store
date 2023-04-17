import React from "react";

const Support = () => {
  return (
    <div className="support-page">
      <h1 className="support-title">Customer Support</h1>
      <div className="support-content-container">
        <div className="support-info">
          <h3>Shipping</h3>
          <p>We offer free worldwide shipping on all orders over $50.</p>
        </div>
        <div className="support-info">
          <h3>Returns</h3>
          <p>
            You have up to 14 days for a full refund. You have an additional 14
            days for store credit.
            <br />
            All sale items are FINAL SALE.
          </p>
        </div>
        <div className="support-info">
          <h3>Frequently Asked Questions</h3>
          <p class="support-faq">
            <strong>How long will it take for my package to arrive?</strong>
            <br />
            Depending where you are located it take anywhere from 5-10 business
            days.
          </p>
          <p class="support-faq">
            <strong>What payment options are available?</strong>
            <br />
            We accept Visa, Mastercard, American Express and PayPal.
          </p>
          <p class="support-faq">
            <strong>Is it possible to cancel my order?</strong>
            <br />
            If you have not received a notifcation that your order has shipped
            you can still cancel your order. To do so reach out to our team via
            email.
          </p>
          <p class="support-faq">
            <strong>How do I check my order status?</strong>
            <br />
            When an order is placed you will recieve a tracking number via
            email. From here you can track the progress of your shipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
