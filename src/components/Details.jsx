import React from "react";
import {
  bitcoin_image_url,
  FiveImagesList,
  game_image_url,
} from "../utils/constant";
import { TiStar } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";
const Details = () => {
  return (
    <div className="w-[90%] mx-auto text-white">
      <p className=" w-[70%] mx-auto text-center text-white my-24 text-xl">
        LYNC provides a scalable infrastructure for launching web3 games,
        without hampering the <span className="">gaming experience</span>.So
        that you can deliver the next big hit!
      </p>
      <h2 className=" w-[50%] mx-auto text-center text-white font-bold text-2xl lg:text-5xl">
        Making blockchain gaming accessible to <span>everyone!</span>
      </h2>
      <div className="flex flex-wrap justify-center w-[90%] mx-auto mt-12 mb-24 lg:gap-8">
        {FiveImagesList.map((el) => {
          return (
            <img
              className="w-20 md:w-24 lg:w-32 object-contain"
              src={el.url}
              alt={el.name}
            />
          );
        })}
      </div>

      <div>
        <h2 className=" w-[70%] mx-auto text-center  text-white font-bold text-2xl lg:text-5xl">
          Power Up Your Web3 Game Development, With <span>LYNC SDKs</span>
        </h2>
        <p className=" w-[70%] mx-auto text-center text-white lg:text-2xl mt-4">
          LYNC SDKs can be easily integrated into game engines like Unity 3D and
          Unreal Engine in a few clicks.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col  items-start border-pink-950 bg-[#342269] rounded-3xl border-2 py-10 px-20 mt-12 lg:w-[60%]">
          <h3 className=" mx-auto  text-white font-bold text-md lg:text-3xl">
            Don't Worry about the Web3 Complexities
          </h3>
          {[1, 2, 3, 4, 5].map((el) => {
            return (
              <div className=" ml-4 flex items-center gap-2  text-white lg:text-xl">
                <TiStar />
                <p>Save 9-12 months of development time</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" h-[400px] flex flex-col gap-4 lg:w-[70%] lg:flex-row lg:items-baseline lg:justify-center md:mx-auto">
        <div className="flex border-2  px-12 py-8 pb-16 mt-12 rounded-xl md:w-[60%]">
          <div className="flex flex-col gap-3 w-[100%] ">
            <h3 className="md:text-2xl">Elevate Your Gameplay with Essential Insights!</h3>

            <p>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
            <div>
              <button
                className="flex items-center text-[black]  bg-white hover:bg-blue-800 hover:text-white rounded-lg text-sm px-2 py-1 lg:px-3 lg:py-2 text-center"
                type="button"
              >
                View Docs
              </button>
            </div>
          </div>
          <div className="">
            <img className="h-[250px]"  src={game_image_url} alt="game_image_url" />
          </div>
        </div>
        <div className="flex flex-col gap-2 md: w-[22%]">
        <div className="border-2 p-6 rounded-lg">
          <h2 className="text-3xl font-extrabold">200+</h2>
          <p>Projects have downloaded & integrated LYNC SDKs</p>
        </div>
        <div className="border-2 p-6 rounded-lg">
          <h2 className="text-3xl font-extrabold">8000+</h2>
          <p>Contracts have been deployed via LYNC</p>
        </div>
        </div>
        <div className="md:w-[%] border p-6 pb-16  rounded-lg">
          <h2 className="text-3xl font-extrabold">50000+</h2>
          <p>User ops created in 10 hours</p>
          <img className="w-[200px]" src={bitcoin_image_url} alt="bitcoin_image_url" />
        </div>
        
      </div>
    </div>
  );
};

export default Details;
