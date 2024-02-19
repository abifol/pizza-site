import React from "react";

const footer = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const isOpen = currentHour >= 12 && currentHour < 22;

  return (
    <div>
      {isOpen ? (
        <div className="btnn" id="hide">
          <h2>
            We are open from 12:00 to 22:00. Come visit us or order online.
          </h2>
          <button className="btn">
            <div className="order"></div>Order
          </button>
        </div>
      ) : (
        <h2>
          We're currently closed. Please visit us during our operating hours.
        </h2>
      )}
    </div>
  );
};

export default footer;
