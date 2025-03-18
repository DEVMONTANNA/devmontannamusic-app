import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image6 from "../assets/image6.jpg";
import image5 from "../assets/image5.jpg";
import image4 from "../assets/image3.jpg";
import image3 from "../assets/image2.jpg";
import image2 from "../assets/image1.jpg";
import image1 from "../assets/image4.jpg";
import { Link } from "react-router-dom";
import Discover from "./Discover";
import Footer from "./Footer";
import DesktopHeader from "./desktopHeader";

const Home = () => {
  const playMusic = () => {
    const music = new Audio("/Sounds/chike.mp3");
    music.play();
  };

  return (
    <>
      <div className="desktopview">
        <DesktopHeader />
      </div>

      {/* <Discover /> */}
      <div className="Home mobileview">
        <Discover />
        <div className="mb-[15px] pl-[15px]">
          <p className="text-[white]  mt-[20px]  font-system font-semibold -[300] text-[24px]">
            Popular Artist
          </p>
        </div>
        <div className="w-[100%] pl-[15px] overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            <div className="inline-block w-[10%] ">
              <img
                src={image6}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">Cold Play</p>
            </div>
            <div className="inline-block w-[10%] ">
              <img
                src={image6}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">Cold Play</p>
            </div>{" "}
            <div className="inline-block w-[10%] ">
              <img
                src={image6}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">Cold Play</p>
            </div>
            <div className="inline-block w-[10%] ">
              <img
                src={image5}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">Black Pink</p>
            </div>
            <div className="inline-block w-[10%]  ">
              <img
                src={image3}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">The 1975</p>
            </div>
            <div className="inline-block w-[10%] ">
              <img
                src={image4}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">Eminem</p>
            </div>
            <div className="inline-block w-[10%] ">
              <img
                src={image5}
                alt="Image"
                className="rounded-[30px] w-[100%]"
              />
              <p className="text-[white] text-[15px] text-center">Venom</p>
            </div>
          </div>
        </div>
        <div className="pl-[15px]">
          <p className="text-[white]  mt-[20px]  font-system font-semibold -[300] text-[24px]">
            Recently Played
          </p>
        </div>
        <div className="block container pl-[15px]">
          <div className=" white flex mt-[10px] ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image6} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">Cold Play</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>
            <div className="love-button">
              <i class=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
            </div>
          </div>
          <div className=" white flex  mt-[10px]">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image6} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">Black pink</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>
            <div className="love-button">
              <i class=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
            </div>
          </div>
          <div className=" white flex mt-[10px] ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image3} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">The 1975</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>
            <div className="love-button">
              <i class=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
            </div>
          </div>
          <div className=" white flex mt-[10px] ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image3} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">The 1975</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>
            <div className="love-button">
              <i class=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
            </div>
          </div>
          <div className=" white flex mt-[10px] ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image3} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">The 1975</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>
            <div className="love-button">
              <button onClick={playMusic}>
                <i class=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
