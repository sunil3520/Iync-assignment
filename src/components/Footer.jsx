import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { PiGameController } from "react-icons/pi";
const Footer = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl">LYNC</h1>
        <h3>Got a game idea ? Let's make it big together !!!</h3>
        <button
          type="button"
          className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-sm rounded-full text-sm px-3 py-3 lg:px-3 lg:py-2"
        >
          Get started
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-bold">LINK</h1>
          <p>A GameFi Infrastructure</p>
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
        <div className="text-gray-400 grid grid-cols-2">
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
          <div>
            <input type="text" placeholder="enter your email">
              
            </input>
            <button
                type="button"
                className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-sm rounded-full text-sm px-3 py-3 lg:px-3 lg:py-2"
              >
                submit
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
