import React from "react";
import { imageData } from "../../constants/imageData";

function MainPage() {
  return (
    <div>
      <div className="max-w-[1200px] m-auto">
        <div>
          <div>
            <div className="h-[300px] relative">
              <img
                src={imageData.banner}
                alt=""
                className="w-[1200px] h-[300px]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-[30px] font-semibold mb-[66px]">
                기업소개
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[97px]">
            <p className="font-bold text-[40px] mb-[120px]">기업소개</p>
          </div>
          <div className=" ml-[58px] flex items-center mb-[70px]">
            <div className="w-[4px] h-[15px] bg-[#7ecef4] flex mr-[20px]"></div>
            <p className="font-semibold text-[20px]">기업소개</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
