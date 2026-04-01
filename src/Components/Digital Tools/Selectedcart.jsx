import React from "react";
import CartStack from "./CartStack";
import TotalPrice from "./TotalPrice";
import shoppingCart from "../../assets/products/shopping-cart.png";

const Selectedcart = ({ selected, totalPrice, setSelected }) => {
  return (
    <div>
      <p>Your Cart</p>
      {selected.length > 0 ? (
        <>
          {selected.map((item) => (
            <CartStack
              selected={selected}
              setSelected={setSelected}
              totalPrice={totalPrice}
              item={item}
            ></CartStack>
          ))}
          <TotalPrice totalPrice={totalPrice}></TotalPrice>
        </>
      ) : (
        <div className="container mx-auto bg-[#d0d0d0a7] flex flex-col justify-center items-center p-32 rounded-2xl">
          <img className="w-12 mb-3.5" src={shoppingCart} alt="" />
          <p className="text-2xl font-semibold text-[#627382]">
            Your Cart is empty
          </p>
        </div>
      )}
    </div>
  );
};

export default Selectedcart;
