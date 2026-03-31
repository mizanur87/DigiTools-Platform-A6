import { Play, TargetIcon } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div>
      {/* {Daisy banner} */}
      <div className="hero bg-base-200 container mx-auto ">
        <div className="hero-content flex-col justify-center items-center text-center md:flex-row-reverse justify-between ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          {/* {Text part} */}
          <div>
            <div>
              <h1
                className="rounded-full bg-[#e1e7ffFF] p-4 flex items-center gap-1.5
            "
              >
                <TargetIcon color="#9514fa" />
                <span>New: AI-Powered Tools Available</span>
              </h1>
            </div>
            <div className="bg-amber-400 ">
              <h1 className="text-center font-extrabold  text-[72px] md:text-3xl font-bold text-left">
                Supercharge Your <br /> Digital Workflow
              </h1>
              <p className="  text-center  md:py-6 text-[18px] font-normal text-[#627382FF] text-left">
                Access premium AI tools, design assets, templates, and
                productivity <br />
                software—all in one place. Start creating faster today. <br />{" "}
                Explore Products
              </p>
            </div>
            {/* {Buttons here} */}
            <div className="bg-amber-700 flex justify-left text-center  md:gap-4 justify-left text-left items-start ">
              <button className="btn text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Explore Prodcuts
              </button>
              <button className="btn btn-outline btn-primary rounded-full ">
                <Play color="#9514fa" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
