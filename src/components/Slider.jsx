import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const items = [
  {
    id: 1,
    url: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD-EsygV7OvZQ-Nwh72B6UXhNWe3aw4ad-Jj0vKvr0jMqDSGtNEiN-Hu6ephKnqoCXMn5o~FjD8R9kiCZ7veTUK0nmS3waDAj6KOkQT3e7zA-OEOlnV0XKS2xHWSlPy1CBv6Y5qFeQvFDNh~iu1k7r843wPISlcVygw5iwjOiv7g62UFGxViTmlwhEn9i6wJyy5w0c31rJmBfv4yq-wqwLPTiWw7utr3JCZGcQE0Xt-yRXMKEk6b0cdx8VMiGhU12fhBtkPmHNLy-DZ6Rs4B9a1B-miCN2tGd6oO6mmjfNR7zr3498yMVHZ178An2o99SaLxndgk-1KHvfoRShqBSw__",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
  },
  {
    id: 2,
    url: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD-EsygV7OvZQ-Nwh72B6UXhNWe3aw4ad-Jj0vKvr0jMqDSGtNEiN-Hu6ephKnqoCXMn5o~FjD8R9kiCZ7veTUK0nmS3waDAj6KOkQT3e7zA-OEOlnV0XKS2xHWSlPy1CBv6Y5qFeQvFDNh~iu1k7r843wPISlcVygw5iwjOiv7g62UFGxViTmlwhEn9i6wJyy5w0c31rJmBfv4yq-wqwLPTiWw7utr3JCZGcQE0Xt-yRXMKEk6b0cdx8VMiGhU12fhBtkPmHNLy-DZ6Rs4B9a1B-miCN2tGd6oO6mmjfNR7zr3498yMVHZ178An2o99SaLxndgk-1KHvfoRShqBSw__",
    description: "Description of Article 2 Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support  and helpful throughout the process. Highly recommended!",
  },
  {
    id: 3,
    url: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD-EsygV7OvZQ-Nwh72B6UXhNWe3aw4ad-Jj0vKvr0jMqDSGtNEiN-Hu6ephKnqoCXMn5o~FjD8R9kiCZ7veTUK0nmS3waDAj6KOkQT3e7zA-OEOlnV0XKS2xHWSlPy1CBv6Y5qFeQvFDNh~iu1k7r843wPISlcVygw5iwjOiv7g62UFGxViTmlwhEn9i6wJyy5w0c31rJmBfv4yq-wqwLPTiWw7utr3JCZGcQE0Xt-yRXMKEk6b0cdx8VMiGhU12fhBtkPmHNLy-DZ6Rs4B9a1B-miCN2tGd6oO6mmjfNR7zr3498yMVHZ178An2o99SaLxndgk-1KHvfoRShqBSw__",
    description: "Description of Article 3 Absolutely blown  of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
  },
  {
    id: 4,
    url: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD-EsygV7OvZQ-Nwh72B6UXhNWe3aw4ad-Jj0vKvr0jMqDSGtNEiN-Hu6ephKnqoCXMn5o~FjD8R9kiCZ7veTUK0nmS3waDAj6KOkQT3e7zA-OEOlnV0XKS2xHWSlPy1CBv6Y5qFeQvFDNh~iu1k7r843wPISlcVygw5iwjOiv7g62UFGxViTmlwhEn9i6wJyy5w0c31rJmBfv4yq-wqwLPTiWw7utr3JCZGcQE0Xt-yRXMKEk6b0cdx8VMiGhU12fhBtkPmHNLy-DZ6Rs4B9a1B-miCN2tGd6oO6mmjfNR7zr3498yMVHZ178An2o99SaLxndgk-1KHvfoRShqBSw__",
    description: "Description of Article 4 Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly  throughout the process. Highly recommended!",
  },
  {
    id: 5,
    url: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD-EsygV7OvZQ-Nwh72B6UXhNWe3aw4ad-Jj0vKvr0jMqDSGtNEiN-Hu6ephKnqoCXMn5o~FjD8R9kiCZ7veTUK0nmS3waDAj6KOkQT3e7zA-OEOlnV0XKS2xHWSlPy1CBv6Y5qFeQvFDNh~iu1k7r843wPISlcVygw5iwjOiv7g62UFGxViTmlwhEn9i6wJyy5w0c31rJmBfv4yq-wqwLPTiWw7utr3JCZGcQE0Xt-yRXMKEk6b0cdx8VMiGhU12fhBtkPmHNLy-DZ6Rs4B9a1B-miCN2tGd6oO6mmjfNR7zr3498yMVHZ178An2o99SaLxndgk-1KHvfoRShqBSw__",
    description: "Description of Article 5 Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level.  incredibly responsive and helpful throughout the process. Highly recommended!",
  },
];

const Slider = () => {
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
    <div className="text-white relative w-[90%] mx-auto">
      <h2 className="w-[70%] mx-auto text-center text-white font-bold text-2xl">
        From our <span>Blog</span>
      </h2>
      <p className="w-[70%] mx-auto text-center text-white">
        Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights,
        Tips, and Innovations in Gaming SDKs!
      </p>
      <div className="relative flex items-center justify-center mt-4">
        <button
          className="bg-[#282222] border-[1px] rounded-full p-2 absolute left-2 z-10"
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft fontSize={"20px"} />
        </button>
        <div className="flex overflow-hidden w-full justify-center">
          {getVisibleSlides().map((el, i) => (
            <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="w-full h-full border-2 rounded-lg bg-[#282222] p-4">
                <div className="">
                  {/* You can add an image or any other content here */}
                </div>
                <div className="flex flex-col gap-5">
                  <img src={el.url} alt="" />
                  <p className="text-[14px]">{el.description}</p>
                  <button
                    className="w-[90px] flex items-center text-black bg-white hover:bg-blue-800 hover:text-white rounded-lg text-sm px-2 py-1 lg:px-3 lg:py-2 text-center"
                    type="button"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#282222] border-[1px] rounded-full p-2 absolute right-2 z-10"
          onClick={handleNext}
        >
          <MdKeyboardArrowRight fontSize={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
