import React from "react";

const WorkFlow = () => {
  return (
    <div className="container mx-auto space-y-6 flex flex-col py-15 justify-center items-center">
      {/* { text part Upper} */}
      <div className="text-white text-center space-y-4">
        <h1 className="font-bold text-2xl">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-[16px] opacity-70">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
      </div>
      {/* {button text part lower} */}
      <div className="space-y-4">
        <div className=" flex items-center justify-center gap-2 ">
          <button className="btn bg-white rounded-full ">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              Explore products
            </span>
          </button>
          <button className=" btn  btn-outline text-white border-amber-50 rounded-full">
            Explore products
          </button>
        </div>
        <p className="text-white text-center opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default WorkFlow;
