import React from "react";
import Footer from "./Footer";
import BackgroundVideo from "./backgroundVideo";

const Search = () => {
  return (
    <div className="text-[white] p-[10px]   ">
      <div className="w-[100%] mt-[10px] mb-[10px] ">
        <p className="text-[30px] text-[verdana]">Search</p>
      </div>
      <div className="w-[100%] h-[40px] pt-[10px] flex items-center ">
        <div className="flex items-center">
          <i className="fa fa-search text-[black]  text-[22px] absolute ml-[14px] mt-[2px] "></i>
        </div>
        <input
          className="w-[100%] mobilesearch text-[black] font-[verdana] pl-[20px] pr-[20px] bg-[white] h-[40px] focus:outline-none "
          placeholder="What do you want to listen to?"
        />
      </div>
      <div className="w-[100%]   pl-[5px] pr-[5px] h-[200px] mt-[20px] ">
        <p className="font-[verdana] ">Discover some thing new</p>
        <BackgroundVideo />
      </div>
      <div className="pl-[5px] pr-[5px]">
        <p className="font-[verdana] ">Browse all</p>
      </div>
      <div className="gridHolder">
        <div className="gridContainer pl-[10px] pr-[10px]">
          <div className="white bg-[white] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="white bg-[blue] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="white bg-[red] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="white bg-[green] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="white bg-[orange] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="black bg-[yellow] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="black bg-[purple] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="black bg-[black] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="black bg-[grey] w-[135px] h-[110px] mt-[30px]"></div>
          <div className="black bg-[pink] w-[135px] h-[110px] mt-[30px]"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
