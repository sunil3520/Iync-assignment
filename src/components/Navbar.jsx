import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
let navArr = ["Home", "Documentaion", "Blog", "Lync Portal", "Request a demo"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="pt-20 sticky top-0 z-50">
      <nav className="text-[white] p-4 bg-[#3d2e5a] w-[90%] md:w-[70%] mx-auto  border-red-700 rounded-full">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-2 md:p-3">
          <button
            onClick={() => setToggle(!toggle)}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-last items-center text-[black]  bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 lg:px-3 lg:py-2 text-center">
            {/* Get stated button */}
            <button className="hidden sm:block" type="button">
              Get started
            </button>
            <IoIosArrowRoundForward />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex  text-[12px] md:text-[14px] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {navArr.map((tab) => {
                return (
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 md:p-0 text-white hover:bg-blue-500 "
                      aria-current="page"
                    >
                      {tab}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="md:hidden">
        {toggle &&
          navArr.map((tab) => {
            return (
              <li className="hover:bg-blue-700 p-2 border-2">
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 "
                  aria-current="page"
                >
                  {tab}
                </a>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
