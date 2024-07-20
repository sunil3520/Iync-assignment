import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ThreeImagesList } from "../utils/constant";

const Heading = () => {
  return (
    <div>
      <div className=" w-[75%] m-auto text-center mt-20 ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Launch Your Game on{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Web 3.0
          </span>{" "}
          in Minutes
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We help game developers to launch their game on Web 3.0, by keeping
          blockchain complexities aside with WebWorld SDKs!
        </p>
      </div>
      <div className="flex flex-col w-[70%] m-auto md:w-[150px] ">
        <button
          type="button"
          className="flex items-center justify-center md:gap-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-sm rounded-full text-sm px-3 py-3 lg:px-3 lg:py-2"
        >
          Get started
          <IoIosArrowRoundForward />
        </button>
        <button
          type="button"
          className="flex items-center justify-center md:gap-3 text-white  font-sm rounded-full text-sm px-3 py-3 lg:px-3 lg:py-2 "
        >
          View Docs
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div className="flex flex-col items-center mt-8 text-white md:w-[60%] mx-auto">
      <h4>Backed By</h4>
      <div className="w-[90%] flex  justify-center gap-8 mt-10 bg-[#2a2c5e] px-4 py-7 border-slate-600 rounded-xl">
       
        {
          ThreeImagesList.map((el)=>{
            return (
              <img className="w-20 object-contain" src={el.url} alt={el.name}  />
            )
          })
        }
      </div>
      </div>
    </div>
  );
};

export default Heading;
