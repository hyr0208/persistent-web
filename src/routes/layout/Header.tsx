import React from "react";
import { imageData } from "../../constants/imageData";

function Header() {
  return (
    <header className="h-[88px] z-10 bg-[#444444] fixed w-screen">
      <div className="max-w-[1200px] m-auto ">
        <div className="relative flex justify-between">
          <img
            src={imageData.logoWhite}
            alt=""
            className="w-[150px] cursor-pointer mt-[36px] mx-8"
          />

          <nav>
            <ul className="flex flex-row font-semibold text-white gap-20 mt-[36px] mr-8">
              <li className="cursor-pointer">기업소개</li>
              <li className="cursor-pointer">브랜드소개</li>
              <li className="cursor-pointer">채용공고</li>
              <li className="cursor-pointer">공지사항</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
