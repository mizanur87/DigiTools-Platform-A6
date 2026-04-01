import React from "react";
import { CgProfile } from "react-icons/cg";
import user from "../../assets/user.png";
import pack from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import { UserIcon } from "lucide-react";

const ThreeSteps = () => {
  return (
    <div className="container mx-auto  py-[120px]">
      {/* {Text Part} */}
      <div className="text-center space-y-3 my-5">
        <h1 className="font-bold text-5xl ">Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

      {/* {Card part} */}
      <div className="flex flex-col justify-center items-center gap-3 md:flex-row justify-between">
        {/* {Card1} */}
        <div className="bg-white rounded-lg px-8 py-12 flex flex-col space-y-4 justify-center items-center text-center w-80">
          {/* <button className="badge rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-10 h-10  text-white">
            01
          </button> */}
          <div>
            <p className=" bg-purple-100 w-40 h-40 rounded-full flex items-center justify-center ">
              <img src={user} alt="" />
              {/* <UserIcon></UserIcon> */}
            </p>
          </div>
          {/* {Text part} */}
          <div>
            <h3 className="font-bold text-2xl">Create Account</h3>
            <p className="font-normal text-[14px] text-[#627382FF]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* {Card2} */}
        <div className="bg-white rounded-lg px-8 py-12 flex flex-col space-y-4 justify-center items-center text-center w-80">
          {/* <button className="badge rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-10 h-10  text-white">
            01
          </button> */}
          <div>
            <p className=" bg-purple-100 w-40 h-40 rounded-full flex items-center justify-center ">
              <img src={pack} alt="" />
              {/* <UserIcon></UserIcon> */}
            </p>
          </div>
          {/* {Text part} */}
          <div>
            <h3 className="font-bold text-2xl">Choose products</h3>
            <p className="font-normal text-[14px] text-[#627382FF]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* {Card2} */}
        <div className="bg-white rounded-lg px-8 py-12 flex flex-col space-y-4 justify-center items-center text-center w-80">
          {/* <button className="badge rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-10 h-10  text-white">
            01
          </button> */}
          <div>
            <p className=" bg-purple-100 w-40 h-40 rounded-full flex items-center justify-center ">
              <img src={rocket} alt="" />
              {/* <UserIcon></UserIcon> */}
            </p>
          </div>
          {/* {Text part} */}
          <div>
            <h3 className="font-bold text-2xl">Start Creating</h3>
            <p className="font-normal text-[14px] text-[#627382FF]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
