import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Images/DSC_7359_.png";
const Nav = () => {
  return (
    <>
      <div className=" flex pt-5 background-color text-white text-sm pb-4">
        <div className=" border border-white rounded-full h-18 w-20">
          <img src={img1} alt="an image" className=" h-20 w-20 rounded-full " />
        </div>
        <div className=" border-r-2 border-gray-500  justify-end flex gap-3 w-[50%] pr-6 pt-4">
          <Link className="cursor-pointer p-2  rounded-xl font2 text-xl" to="/">
            Home
          </Link>
          <Link
            className="cursor-pointer p-2  rounded-gl font2 text-xl"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="cursor-pointer p-2  rounded-xl font2 text-xl"
            to="/aritisan"
          >
            Artisans
          </Link>
        </div>
        <div className="flex justify-around w-[50%]">
          <div className=" flex gap-3 pt-4">
            <Link
              className="cursor-pointer p-2 rounded-xl font2 text-xl"
              to="#"
            >
              Topic
            </Link>
            <Link
              className="cursor-pointer p-2  rounded-xl font2 text-xl"
              to="#"
            >
              About us
            </Link>
            <Link
              className="cursor-pointer p-2  rounded-xl font2 text-xl"
              to="#"
            >
              Contact
            </Link>
          </div>
          <div className=" flex gap-3 pt-4 ">
            <Link
              className="cursor-pointer px-2 p-2 mb-5 rounded-xl font2 text-xl hover:bg-black "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="cursor-pointer px-2 p-2 mb-5 rounded-xl text-xl font2 bg-orange-600 hover:bg-orange-800"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
