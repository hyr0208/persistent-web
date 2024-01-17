import React from "react";
import { imageData } from "../../constants/imageData";

function MainPage() {
  return (
    <div className="overflow-hidden">
      <div className="max-w-[1920px] m-auto ">
        <div className="relative">
          <img src={imageData.banner} alt="" className="w-[1920px] h-[300px]" />
        </div>
        <div className="flex justify-center mt-[97px]">
          <p className="font-bold text-[40px]">기업소개</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
