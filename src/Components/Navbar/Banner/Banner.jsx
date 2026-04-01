import { Play, TargetIcon } from "lucide-react";
import React from "react";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="mx-auto container">
      <div className=" flex flex-col justify-center  items-center gap-4 md:flex-row text-left">
        {/* {Text part} */}

        <div className="space-y-3  flex flex-col justify-start  md:text-left  ">
          <p
            className="max-w-80  rounded-full bg-[#e1e7ffFF] p-2.5 flex items-center justify-start gap-1.5 
            "
          >
            <TargetIcon color="#9514fa" />
            <span>New: AI-Powered Tools Available</span>
          </p>
          <h1 className="font-bold text-5xl">
            Supercharge Your Digital <br /> Workflow
          </h1>
          <h2>
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </h2>
          <div className="flex gap-2 justify-center md:justify-start">
            <button className="btn text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              Explore Prodcuts
            </button>
            <button className="btn btn-outline btn-primary rounded-full ">
              <Play color="#9514fa" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* {Img} */}
        <div>
          <img className="" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
