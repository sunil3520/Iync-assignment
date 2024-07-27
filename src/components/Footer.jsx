import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { PiGameController } from "react-icons/pi";
const Footer = () => {
  return (
    <div>
      <div className="mb-24 relative w-[80%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-8xl font-serif">LYNC</h1>
        <h3 className=" md:w-[40%]  absolute md:text-4xl text-white">Got a game idea ? Let's make it big together !!!</h3>
        <button
          type="button"
          className=" mt-12 flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-sm rounded-full text-sm px-3 py-3 lg:px-3 lg:py-2"
        >
          Get started
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div className="lg:w-[80%] mx-auto lg:flex lg:justify-evenly">
        <div className="text-white">
          <h1 className="text-3xl font-bold md:text-6xl font-serif">LINK</h1>
          <p >A GameFi Infrastructure</p>
          <div className="flex gap-2 items-center">
            <span className="border-2 border-slate-600 rounded-full p-1">
              <CiLinkedin />{" "}
            </span>{" "}
            <span className="border-2 border-slate-600 rounded-full p-1">
              <CiTwitter />
            </span>
            <span className="border-2 border-slate-600 rounded-full p-1">
              <PiGameController />
            </span>
          </div>
        </div>
        <div className="text-gray-400 grid grid-cols-2 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="text-white">Product</h3>
            <p>SDK's</p>
            <p>Transfer API's</p>
            <p>Token API's</p>
            <p>NFT API's</p>
          </div>
          <div>
            <h3 className="text-white">Company</h3>
            <p>About us</p>
            <p>Press Kit</p>
            <p>Security</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3 className="text-white">Contact</h3>
            <p>Email</p>
            <p>Discord</p>
            <p>Telegram</p>
            <p>Press</p>
          </div>
        </div>
        <div>
          <h3 className="text-white">Supercharge your inbox</h3>
          <p>Sign up for our newsletter</p>
          <div className="relative w-full max-w-sm">
            <input type="text" placeholder="enter your email" className="w-full pr-20 py-3 px-6 rounded-full text-black"/>
              
         
            <button
                type="button"
                className=" absolute right-0 top-1 flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-sm rounded-full text-sm px-3 py-3 lg:px-8 lg:py-2"
              >
                submit
              </button>
          </div>
        </div>
      </div>
      <div className="border-[0.5px]"></div>
      <div className="flex justify-center text-white">
      <div>2024 LYNC World  · Terms of service</div>
      </div>
    </div>
  );
};

export default Footer;
