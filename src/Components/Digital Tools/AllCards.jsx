import React from "react";

const AllCards = ({ singleData }) => {
  const { name, description, price, period, tagType, features } = singleData;
  return (
    <div className="">
      {/* {cards section} */}

      <div className="card w-90  shadow-sm ">
        <div className="card-body relative ">
          <div className="border-2 rounded-full h-13 w-13 border-gray-300 flex justify-center items-center">
            <img className="w-8 h-8 " src={singleData.icon} alt="" />
          </div>

          <span className="badge  absolute right-2  badge-xs bg-[#fef3c6FF] text-[#bb4d00]">
            {tagType}
          </span>
          <div className="">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-[14px]">{description}</p>
            <span className="text-xl">
              <span className="text-bold">${price}</span>/{period}
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Access to all premium tools</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Priority support</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited projects</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Cloud Sync</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Advanced Analytics</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary w-full  rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white  ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
