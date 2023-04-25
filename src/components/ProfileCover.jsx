import React from "react";
import IT from "../asset/images/IT.png"
const ProfileCover = () => {
  return (
    <div>
      <div>
        <img
          src="https://thewowstyle.com/wp-content/uploads/2015/01/Free-Wallpaper-Nature-Scenes.jpg"
          alt=""
          className="rounded"
        />
      </div>
      <div className="relative md:px-[50px] lg:min-h-[200px]">
        <div className="absolute w-fit rounded-[50%] lg:top-[-35%] top-[-40%] border-4 border-[#009fff] p-[1px] lg:left-auto lg:right-auto left-0 right-0 mx-auto">
          <img
            src={IT}
            alt=""
            className="w-[200px] rounded-[50%] border-2 border-green-700"
          />
        </div>
        <div className="mt-5 lg:block w-full flex justify-center">
          <div className="lg:ml-[250px] lg:mt-auto mt-[120px] lg:block flex flex-col gap-3 items-center mb-5">
            <h1 className="text-[30px] font-semibold">Horleng Ly</h1>
            <div className="flex items-center lg:flex-row flex-col gap-3 justify-between">
              <span className="flex items-center gap-3">
                <span>4.8M followers</span>
                <span>0 following</span>
              </span>
              <button className="w-[80px] bg-blue-700  hover:bg-blue-600 text-gray-200">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
