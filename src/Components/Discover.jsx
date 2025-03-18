import React from "react";
import Footer from "./Footer";
import image6 from "../assets/image6.jpg";
import image5 from "../assets/image5.jpg";
import image4 from "../assets/image3.jpg";
import image3 from "../assets/image2.jpg";
import image2 from "../assets/image1.jpg";

const Discover = () => {
  return (
    <div>
      <div className="mb-[10px] pl-[15px]">
        <p className="text-[white]  mt-[20px]  font-system font-semibold -[400] text-[24px]">
          DISCOVER
        </p>
      </div>
      <div className="w-[100%] pl-[15px] overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          <div className="inline-block w-[8%] ">
            <img src={image6} alt="Image" className="rounded-lg w-[100%]" />
            <p className="text-[white] text-[15px]">
              Iwan Fals, Rhoma Irama, Dewa-19, Adella
            </p>
          </div>
          <div className="inline-block w-[8%] ">
            <img src={image2} alt="Image" className="rounded-lg w-[100%]" />
            <p className="text-[white] text-[15px]">
              Iwan Fals, Rhoma Irama, Dewa-19, Adella
            </p>
          </div>
          <div className="inline-block w-[8%]  ">
            <img src={image3} alt="Image" className="rounded-lg w-[100%]" />
            <p className="text-[white] text-[15px]">
              {" "}
              Iwan Fals, Rhoma Irama, Dewa-19, Adella
            </p>
          </div>
          <div className="inline-block w-[8%]">
            <img src={image4} alt="Image" className="rounded-lg w-[100%]" />
            <p className="text-[white] text-[15px]">
              {" "}
              Iwan Fals, Rhoma Irama, Dewa-19, Adella
            </p>
          </div>
          <div className="inline-block w-[8%] ">
            <img src={image5} alt="Image" className="rounded-lg w-[100%]" />
            <p className="text-[white] text-[15px]">
              {" "}
              Iwan Fals, Rhoma Irama, Dewa-19, Adella
            </p>
          </div>
          <div className="inline-block w-[8%] ">
            <img src={image5} alt="Image" className="rounded-lg w-[100%]" />
            <p className="text-[white] text-[15px]">
              {" "}
              Iwan Fals, Rhoma Irama, Dewa-19, Adella
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
