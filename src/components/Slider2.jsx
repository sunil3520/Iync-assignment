import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Article 1",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
  },
  {
    id: 2,
    title: "Article 2",
    description:
      "Description of Article 2 Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support  and helpful throughout the process. Highly recommended!",
  },
  {
    id: 3,
    title: "Article 3",
    description:
      "Description of Article 3 Absolutely blown  of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
  },
  {
    id: 4,
    title: "Article 4",
    description:
      "Description of Article 4 Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly  throughout the process. Highly recommended!",
  },
  {
    id: 5,
    title: "Article 5",
    description:
      "Description of Article 5 Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level.  incredibly responsive and helpful throughout the process. Highly recommended!",
  },
];

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const updateVisibleItems = () => {
    if (window.innerWidth >= 1024) {
      setVisibleItems(3);
    } else if (window.innerWidth >= 768) {
      setVisibleItems(2);
    } else {
      setVisibleItems(1);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleItems; i++) {
      slides.push(items[(currentIndex + i) % items.length]);
    }
    return slides;
  };

  return (
    <div className="text-white relative w-[90%] md:w-[70%] mx-auto">
      <h2 className="w-[70%] mx-auto text-center text-white font-bold text-2xl md:text-6xl md:mt-28 md:mb-12">
        Valuable <span>Reviews</span>
      </h2>

      <div className="relative flex items-center justify-center mt-4">
        <button
          className="bg-[#282222] border-[1px] rounded-full p-2 absolute -left-8 z-10"
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft fontSize={"20px"} />
        </button>
        <div className="flex overflow-hidden w-full justify-center">
          {getVisibleSlides().map((el, i) => (
            <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="w-full h-full  rounded-lg bg-[#282222] p-4">
                <div className="">
                  {/* You can add an image or any other content here */}
                </div>
                <div className="flex flex-col gap-5 ">
                  <p className="text-[14px] ">{el.description}</p>
                  <div className="flex gap-3">
                    <div className=" w-4 bg-cyan-50 border-[1px] rounded-full p-3"></div>
                    <h4 className="color-white">ALEX GEORGE</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#282222] border-[1px] rounded-full p-2 absolute -right-8 z-10"
          onClick={handleNext}
        >
          <MdKeyboardArrowRight fontSize={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default Slider2;
