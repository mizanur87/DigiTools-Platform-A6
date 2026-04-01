import React, { use, useState } from "react";
import AllCards from "./AllCards";

const AllInfos = ({ PromiseData }) => {
  const [toggle, setToggle] = useState(false);

  const fData = use(PromiseData);
  //   console.log(fData);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-[120px]  ">
      {/* {Healines} */}
      <div className="text-center flex flex-col justify-center items-center gap-5 ">
        {/* {Text Section} */}
        <h1 className="font-bold text-5xl ">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* {Button Section} */}
        <div className="rounded-full text-center bg-white border-2 border-[#f6f6f6] m-w-[20%] space-x-2 p-1.3 flex justify-center items-center">
          <button className="btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            Products
          </button>
          {/* {text-[#25065d]} */}
          <button className=" btn rounded-full text-[#25065d] ">
            card({fData.length})
          </button>
        </div>
      </div>
      {/* {Allcards} */}
      <div className="grid grid-cols-1  my-4 justify-center items-center md:grid-cols-3">
        {fData.map((singleData) => (
          <AllCards key={singleData.id} singleData={singleData}></AllCards>
        ))}
      </div>
    </div>
  );
};

export default AllInfos;
