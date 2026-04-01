import React from "react";

const Stats = () => {
  return (
    <div className="mx-auto container grid grid-cols-3 justify-center items-center ">
      <div>
        <h2 className="text-3xl font-bold">50k+</h2>
        <p className="text-[14px]">Active Users</p>
      </div>
      {/* <div className="divider divider-horizontal divider-start"></div> */}
      <div>
        <h2 className="text-3xl font-bold">200+</h2>
        <p className="text-[14px]">Premium User</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">4.9</h2>
        <p className="text-[14px]">Rating</p>
      </div>
    </div>
  );
};

export default Stats;
