import React from "react";
import { astronode_image_url, EightImageList } from "../utils/constant";

const ProductSuite = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto text-white mb-52">
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return (
            <div className="sm:border-2 px-4 py-5">
              <img
                className="w-52 hidden"
                src={astronode_image_url}
                alt="astronode_image_url"
              />
              <h2 className="font-bold text-xl">LYNC Wallet SDK</h2>
              <p>
                Empowering developers to integrate account abstraction in their
                game, dapp, metaverse and more in minutes.
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className=" w-[70%] mx-auto text-center text-white font-bold text-2xl">
          With LYNC, build on your <h3>favorite chain.</h3>
        </h2>
        <div className="grid grid-cols-2 gap-y-3 w-[90%] mx-auto border-2 mt-4 justify-center items-center">
            {EightImageList.map((el,i)=>{
                return(
                    <img key={i+1} className=" border-2 w-20 h-12 object-contain" src={el.url} alt={el.name} />
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSuite;
