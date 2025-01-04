import React from "react";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

const ScrollButton = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: 75, behavior: "smooth" });
  };

  const handleScrollUp = () => {
    window.scrollBy({ top: -75, behavior: "smooth" });
  };
  return (
    <div className="flexColCenter gap-7 w-[70px] fixed bottom-0 right-2 md:top-1/2 md:left-5 -translate-y-1/2 z-[998]">
      <div></div>
      <div className="flexColCenter gap-7">
        <button
          onClick={handleScrollUp}
          className="p-3 bg-[rgba(255,255,255,0.5)]  rounded-full shadow-xl  shadow-[rgba(168,175,247,0.1)]"
        >
          <IoIosArrowRoundUp size={25} />
        </button>
        <button
          onClick={handleScrollDown}
          className="p-3 bg-[rgba(255,255,255,0.5)] rounded-full shadow-xl  shadow-[rgba(168,175,247,0.1)]"
        >
          <IoIosArrowRoundDown size={25} />
        </button>
      </div>
    </div>
  );
};

export default ScrollButton;
