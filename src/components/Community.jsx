import React from "react";
import { community_image_url, EightImageList } from "../utils/constant";

const Community = () => {
  return (
    <div>
      <div className="w-[90%]  flex flex-col items-center relative">
        <img
          className="  mx-auto"
          src={community_image_url}
          alt="community_image_url"
        />
        <div className="absolute top-[40%] left-[45%] text-xl font-bold text-white">
          <h2>Strongest Web3</h2>
          <h3 className="text-gray-400">Community</h3>
        </div>
      </div>
      <div className="w-[90%] mx-auto text-center">
        <h2><span>Our</span> Believers and Partners</h2>
       
        <div className="  grid grid-cols-2 gap-3">
            {
                EightImageList.map((el,i)=>{
                    return(
                        <div className="p-2 border-2 flex items-center justify-center bg-[#1f1440] ">
                            <img className="w-20 object-contain" src={el.url} alt={el.name} />
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
