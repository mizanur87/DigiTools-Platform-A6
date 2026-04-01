import React from "react";

const TotalPrice = ({ totalPrice }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-10">
        <h2>Total Price: </h2>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default TotalPrice;
