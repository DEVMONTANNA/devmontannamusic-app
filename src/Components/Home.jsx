import React, { useState, useRef } from "react";
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
  const [newReleases, setNewReleases] = useState([]);
  const [isplaying, setIsPlaying] = React.useState(false);
  const [music1, setMusic11] = React.useState(false);
  const [music3, setMusic3] = React.useState(false);
  const [music4, setMusic4] = React.useState(false);

  async function callData() {
    const clientId = "1a5edc32fe6a4be68052e06f3660f8b0";

    const clientSecret = "3c357d7bd1164d7996db8328f051113d";

    // ✅ Make sure this line comes before using encodedCredentials
    const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

    try {
      const fetchData = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredentials}`, // Make sure it's declared
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });

      console.log("Fetch Response:", fetchData);

      if (!fetchData.ok) {
        const errorMessage = await fetchData.text();
        console.log("Error:", errorMessage);
        return;
      }

      const data = await fetchData.json();
      console.log("Access Token Data:", data);

      return data.access_token;
    } catch (error) {
      console.log("Network or Other Error:", error);
    }
  }
  // callData(); // Call the function
  // const tracks = [
  //   new Audio("/Sounds/come and go.mp3"),
  //   new Audio("/Sounds/burna.mp3"),
  //   new Audio("/Sounds/always.mp3"),
  // ];

  const music11 = useRef(new Audio("/Sounds/chike.mp3")).current;

  const playMusic11 = () => {
    if (music1) {
      music11.pause();
      setMusic11(false);
    } else {
      music11.play();
      setMusic11(true);
    }
  };

  const music2 = useRef(new Audio("/Sounds/come-and-go.mp3")).current;
  const playMusic2 = () => {
    if (isplaying) {
      music2.pause();
      setIsPlaying(false);
    } else {
      music2.play();
      setIsPlaying(true);
    }
  };
  const music33 = useRef(new Audio("/Sounds/chike.mp3")).current;
  const playMusic3 = () => {
    if (music3) {
      music33.pause();
      setMusic3(false);
    } else {
      music33.play();
      setMusic3(true);
    }
  };
  const music44 = useRef(new Audio("/Sounds/second-Sermon.mp3")).current;
  const playMusic4 = () => {
    if (music4) {
      music44.pause();
      setMusic4(false);
    } else {
      music44.play();
      setMusic4(true);
    }
  };

  return (
    <>
      <div className="desktopview">
        <DesktopHeader />
      </div>
      <button onClick={callData}>click</button>
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
        <div className="block container pl-[15px]  justify-between">
          <div className=" white flex mt-[10px]  ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image6} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">Cold Play</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>

            <div className="love-button flex">
              <button onClick={playMusic2}>
                {isplaying ? (
                  <i className=" lovebuttonicon fa-solid fa-pause text-[darkgoldenrod]"></i>
                ) : (
                  <i className=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
                )}
              </button>
            </div>
          </div>
          <div className=" white flex  mt-[10px] ">
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
              <div className="love-button flex">
                <button onClick={playMusic11}>
                  {music1 ? (
                    <i className=" lovebuttonicon fa-solid fa-pause text-[darkgoldenrod]"></i>
                  ) : (
                    <i className=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=" white flex mt-[10px]  ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image3} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">ROJU</div>
              <div className="text-[white] text-[12px] font-normal">Chike</div>
            </div>

            <div className="love-button">
              <div className="love-button flex">
                <button onClick={playMusic3}>
                  {music3 ? (
                    <i className=" lovebuttonicon fa-solid fa-pause text-[darkgoldenrod]"></i>
                  ) : (
                    <i className=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=" white flex mt-[10px]  ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image3} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">Black Sermon</div>
              <div className="text-[white] text-[12px] font-normal">Black Sheriff</div>
            </div>
            <div className="love-button">
              <div className="love-button flex">
                <button onClick={playMusic4}>
                  {music4 ? (
                    <i className=" lovebuttonicon fa-solid fa-pause text-[darkgoldenrod]"></i>
                  ) : (
                    <i className=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=" white flex mt-[10px]  ">
            <div className=" flex w-[16%] bg-[red] h-[59px] ">
              <img src={image3} alt="Image" className=" w-[100%]" />
            </div>
            <div className=" center h-[59px] w-[60%]  bg-[#121212]">
              <div className="text-[white] mb-[5px]">The 1975</div>
              <div className="text-[white] text-[12px] font-normal">
                Guyon waton
              </div>
            </div>
            {/* <div className="love-button flex">
              <button onClick={playMusic}>
                <i className=" lovebuttonicon fa-solid fa-play text-[darkgoldenrod]"></i>
              </button>
              <button onClick={pauseMusic}>
                <i className=" lovebuttonicon fa-solid fa-pause text-[darkgoldenrod]"></i>
              </button>
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
