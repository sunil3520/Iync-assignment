import React from "react";
import { astronode_image_url, EightImageList } from "../utils/constant";

const ProductSuite = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
      <h2 className="mb-24 text-6xl font-bold">Proudct <span className=" bg-gradient-to-t from-purple-700 via-pubple-600 to-purple-400 inline-block text-transparent bg-clip-text">Suite</span></h2>
      <div className=" grid grid-cols-1 w-[90%]  mx-auto text-white mb-52 md:w-[70%] md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return (
            <div className=" flex flex-col gap-5 rounded-lg px-4 py-5 bg-black">
              <img
                className="hidden md:block rounded-l-2xl"
                src={astronode_image_url}
                alt="astronode_image_url"
              />
              <h2 className="font-bold text-2xl">LYNC Wallet SDK</h2>
              <p>
                Empowering developers to integrate account abstraction in their
                game, dapp, metaverse and more in minutes.
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className=" w-[70%] mx-auto text-center text-white font-bold text-2xl md:text-6xl md:w-auto">
          With LYNC, build on your <h3>favorite chain.</h3>
        </h2>
        <div className="grid grid-cols-2 gap-y-3 w-[90%] md:w-auto md:grid-cols-4 md:gap-16 mx-auto  mt-4 md:mt-24 justify-center items-center">
            {EightImageList.map((el,i)=>{
                return(
                    <img key={i+1} className=" w-20 h-12  object-contain" src={el.url} alt={el.name} />
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSuite;
