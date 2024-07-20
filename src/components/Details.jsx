import React from "react";
import { bitcoin_image_url, FiveImagesList, game_image_url } from "../utils/constant";
import { TiStar } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";
const Details = () => {
  return (
    <div className="w-[90%] mx-auto text-white">
      <p className=" w-[70%] mx-auto text-center text-white my-24">
        LYNC provides a scalable infrastructure for launching web3 games,
        without hampering the <span className="">gaming experience</span>.So
        that you can deliver the next big hit!
      </p>
      <h2 className=" w-[70%] mx-auto text-center text-white font-bold text-2xl">
        Making blockchain gaming accessible to <span>everyone!</span>
      </h2>
      <div className="flex flex-wrap justify-center w-[90%] mx-auto mt-12 mb-24 border-2">
        {FiveImagesList.map((el) => {
          return (
            <img className="w-20 object-contain" src={el.url} alt={el.name} />
          );
        })}
      </div>

      <div>
        <h2 className=" w-[70%] mx-auto text-center text-white font-bold text-2xl">
          Power Up Your Web3 Game Development, With <span>LYNC SDKs</span>
        </h2>
        <p className=" w-[70%] mx-auto text-center text-white">
          LYNC SDKs can be easily integrated into game engines like Unity 3D and
          Unreal Engine in a few clicks.
        </p>
      </div>
      <div className="flex flex-col items-center border-pink-950 bg-[#342269] rounded-xl border-2 py-5 mt-12">
        <h3 className=" mx-auto text-center text-white font-bold text-md">
          Don't Worry about the Web3 Complexities
        </h3>
        {[1, 2, 3, 4, 5].map((el) => {
          return (
            <div className=" ml-4 flex items-center gap-2  text-white">
              <TiStar />
              <p>Save 9-12 months of development time</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center border-2 px-3 py-3 mt-12 rounded-xl">
        <div className="flex flex-col gap-3">
          <h3>Elevate Your Gameplay with Essential Insights!</h3>

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
        <div>
          <img src={game_image_url} alt="game_image_url" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="border-2 p-3 rounded-lg">
            <h2 className="text-3xl font-extrabold">200+</h2>
            <p>Projects have downloaded & integrated LYNC SDKs</p>
        </div>
        <div>
        <h2 className="text-3xl font-extrabold">50000+</h2>
        <p>User ops created in 10 hours</p>
        <img src={bitcoin_image_url} alt="bitcoin_image_url" />
        </div>
        <div className="border-2 p-3 rounded-lg">
            <h2 className="text-3xl font-extrabold">8000+</h2>
            <p>Contracts have been deployed via LYNC</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
