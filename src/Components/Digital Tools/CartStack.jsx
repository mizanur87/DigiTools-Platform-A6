import React from "react";

const CartStack = ({ item, totalPrice, setSelected, selected }) => {
  function remove() {
    const filtered = selected.filter((p) => item.id !== p.id);
    setSelected(filtered);
  }

  return (
    <div className=" ">
      <div className="flex justify-between items-center p-5 bg-purple-100 gap-3 space-y-5 mb-5">
        <div>
          <div className="border-2 rounded-full h-13 w-13 border-gray-300 flex justify-center items-center">
            <img className="w-8 h-8 " src={item.icon} alt="" />
          </div>
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <p>${item.price}</p>
        </div>
        <div>
          <p onClick={remove} className="text-red-500 btn btn-ghost">
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartStack;
