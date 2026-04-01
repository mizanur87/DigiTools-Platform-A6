import React from "react";
import CartStack from "./CartStack";
import TotalPrice from "./TotalPrice";

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
        <div>Nothing To Show </div>
      )}
    </div>
  );
};

export default Selectedcart;
