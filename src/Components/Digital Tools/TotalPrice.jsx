import React from "react";

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between  items-center py-10">
        <h2 class="font-bold text-xl">Total Price: </h2>
        <p class="font-bold text-xl">${totalPrice}</p>
      </div>
      {/* <button className=" btn btn-primary   rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
        proceed to checkout
      </button> */}
    </div>
  );
};

export default TotalPrice;
