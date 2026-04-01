import React, { use, useState } from "react";
import AllCards from "./AllCards";

const AllInfos = ({ PromiseData, choose, toggle, setToggle }) => {
  const fData = use(PromiseData);

  //   console.log(fData);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-[120px]  ">
      {/* {Healines} */}

      {/* {Allcards} */}
      <div className="grid grid-cols-1  my-4 justify-items-center  gap-5 md:grid-cols-3">
        {fData.map((singleData) => (
          <AllCards
            key={singleData.id}
            choose={choose}
            singleData={singleData}
          ></AllCards>
        ))}
      </div>
    </div>
  );
};

export default AllInfos;
