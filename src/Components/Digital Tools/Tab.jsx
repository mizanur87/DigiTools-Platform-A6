import React from "react";

const Tab = ({ toggle, setToggle, selected }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-5 ">
      {/* {Text Section} */}
      <h1 className="font-bold text-5xl ">Premium Digital Tools</h1>
      <p>
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* {Button Section} */}
      <div className="rounded-full text-center bg-white border-2 border-[#f6f6f6] m-w-[20%] space-x-1 p-1.3 flex justify-center items-center">
        <button
          onClick={() => setToggle("available")}
          className={` ${toggle === "available" ? "btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "btn rounded-full text-[#25065d]"} `}
        >
          Products
        </button>
        {/* {text-[#25065d]} */}
        <button
          onClick={() => setToggle("selected")}
          className={` ${toggle === "selected" ? "btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "btn rounded-full text-[#25065d]"} `}
        >
          cart({selected.length})
        </button>
      </div>
    </div>
  );
};

export default Tab;
