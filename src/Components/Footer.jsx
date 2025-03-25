import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="fixed flex  bottom-0 w-[100%] bg-[#121212] text-white p-2 z-50  footer">
        <div className="discover ">
          <Link to="/discover">
            <div className="flex justify-center">
              <i className="fa-solid fa-compass "></i>
            </div>
            <div>
              <span className="text-sm">Discover</span>
            </div>
          </Link>
        </div>
        <div className="discover ">
          <Link to="/">
            <div className="flex justify-center">
              <i className="fa-solid fa-home "></i>
            </div>
            <div>
              <span className="text-sm">Home</span>
            </div>
          </Link>
        </div>
        <div className="discover  ">
          <Link to="/Search">
            <div className="flex justify-center">
              <i className="fa-solid fa-search "></i>
            </div>
            <div>
              <span className="text-sm">Search</span>
            </div>
          </Link>
        </div>
        <div className="discover ">
          <Link to="/Account">
            <div className="flex justify-center">
              <i className="fa-solid fa-home "></i>{" "}
            </div>
            <div>
              <span className="text-sm">Account</span>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
