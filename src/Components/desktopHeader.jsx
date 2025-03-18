import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const desktopHeader = () => {
  return (
    <div className="flex w-[100%] justify-evenly  h-[70px] mt-[10px]  ">
      <div className="w-[20%]  flex items-center p-[10px]">
        <i className="fa-brands fa-spotify fa-2x text-[white]"></i>
      </div>
      <div className="w-[50%]   pl-[10px] flex justify-between">
        <div className="circle bg-[black] ">
          <i className="fa-solid fa-house  absolute text-white mt-[25px] ml-[5px] text-[20px]"></i>
        </div>
        <div className="w-[100%]   h-[70px] p-[10px] flex items-center justify-start">
          <div className="relative  w-[90%] ml-[30px]">
            <input
              className="text-[white] p-[10px] w-full   rounded-3xl searchbar focus:outline-none border border-[white] bg-transparent pr-[70px]"
              placeholder="What do you want to play?"
            />
            <div className="absolute   left-[20px] top-1/2 transform -translate-y-1/2">
              <i className="fa fa-search text-[white]"></i>
            </div>
            <div className=" absolute right-[10px] top-1/2 transform -translate-y-1/2">
              <i className="fa-solid fa-folder-open text-[white] hover:scale-y-110 "></i>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%]  p-[10px] flex items-center">
        <div className="flex w-[70%] justify-center items-center ml-[30px]">
          {" "}
          <div>
            <i class="fa fa-download text-[white] ml-[30px] hover:scale-x-120 flex items-center mt-[5px]"></i>
            <button className="ml-[10px] p-[5px] rounded-2xl installbutton hover:scale-110  mt-[5px] ">
              <p className="text-[white] ">Install App</p>
            </button>
          </div>
          <i className="fa fa-bell ml-[20px]  hover:scale-110 mt-[5px] text-[white]"></i>
        </div>
      </div>
    </div>
  );
};

export default desktopHeader;
