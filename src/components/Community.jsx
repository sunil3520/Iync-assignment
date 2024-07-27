import React from "react";
import { community_image_url, EightImageList, EightImageList2 } from "../utils/constant";

const Community = () => {
  return (
    <div>
      <div className="w-[90%]  flex flex-col items-center relative">
        <img
          className="  mx-auto"
          src={community_image_url}
          alt="community_image_url"
        />
        <div className="absolute top-[40%] left-[45%] text-xl font-bold text-white md:text-4xl lg:text-6xl">
          <h2>Strongest Web3</h2>
          <h3 className="text-gray-400">Community</h3>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center">
        <h2 className="md:text-4xl lg:text-6xl mb-14"><span className="text-white">Our</span> Believers and Partners</h2>
       
        <div className="  grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {
                EightImageList2.map((el,i)=>{
                    return(
                        <div className="p-2 rounded-lg flex items-center justify-center bg-[#1f1440] ">
                            <img className="w-20 h-20 md:w-44 object-contain" src={el.url} alt={el.name} />
                        </div>
                    )
                })
            }
        </div>

      </div>
    </div>
  );
};

export default Community;
