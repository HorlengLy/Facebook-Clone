import React from "react";
import {AiFillInfoCircle,AiFillHeart} from "react-icons/ai"
import {HiHome} from "react-icons/hi2"
import {MdWork} from "react-icons/md"
import {BsFillBookFill} from "react-icons/bs"
const Introducts = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h1 className="text-[20px] font-semibold">Introductions</h1>
      <div className="text-center w-[50%] mx-auto mt-5">
        Web Developer https://videocaller.netlify.app/
      </div>
      <button className="bg-gray-300 hover:bg-gray-200 w-full mt-3 font-semibold">
        Edit bio
      </button>
      <div className="mt-5">
        <ul>
          <li className="flex gap-6 mt-3">
            <span>
              <AiFillInfoCircle size="25" />
            </span>
            <span>
              <span className="capitalize font-semibold">Profile</span> ~
              digital creator
            </span>
          </li>
          <li className="flex gap-6 mt-3">
            <span>
              <MdWork size="25" />
            </span>
            <span>
              <span className="capitalize font-semibold">work at</span> ~
              digital creator
            </span>
          </li>
          <li className="flex gap-6 mt-3">
            <span>
              <BsFillBookFill size="20" />
            </span>
            <span className="capitalize">
              <span className="capitalize font-semibold">study at</span> ~
              student
            </span>
          </li>
          <li className="flex gap-6 mt-3">
            <span>
              <HiHome size="25" />
            </span>
            <span className="capitalize">
              <span className="capitalize font-semibold">live in</span> ~
              Phnom Penh
            </span>
          </li>
          <li className="flex gap-6 mt-3">
            <span>
              <AiFillHeart size="25" />
            </span>
            <span className="capitalize font-semibold">
              single
            </span>
          </li>
        </ul>
        <button className="bg-gray-300 hover:bg-gray-200 w-full mt-3 font-semibold">Edit details</button>
      </div>
    </div>
  );
};

export default Introducts;
