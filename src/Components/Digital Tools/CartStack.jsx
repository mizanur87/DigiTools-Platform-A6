import React from "react";
import { toast } from "react-toastify";

const CartStack = ({ item, totalPrice, setSelected, selected }) => {
  function remove() {
    const filtered = selected.filter((p) => item.id !== p.id);
    toast.error("Item Removed");
    setSelected(filtered);
  }

  return (
    <div className="card card-dash bg-base-100 container mx-auto border-2 ">
      <div className="flex justify-between items-center px-10 py-5  bg-[#f9fafc] rounded-xl gap-3 space-y-5 mb-5">
        <div className="">
          <div className="border-2 rounded-full h-13 w-13 shadow-xl flex justify-center items-center">
            <img className="w-8 h-8 " src={item.icon} alt="" />
          </div>
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <p>${item.price}</p>
        </div>
        <div>
          <p onClick={remove} className="text-[#ff3980] btn btn-ghost">
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartStack;
