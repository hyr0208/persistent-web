import React from "react";
import { imageData } from "../../constants/imageData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="h-[88px] z-10 bg-[#444444] fixed w-screen top-0">
      <div className="max-w-[1200px] m-auto ">
        <div className="relative flex justify-between">
          <img
            src={imageData.logoWhite}
            alt=""
            className="w-[150px] cursor-pointer my-8 mx-8"
            onClick={() => {
              navigate("/");
            }}
          />

          <nav>
            <ul className="flex flex-row font-semibold text-white gap-20 my-8 mr-8">
              <li className="cursor-pointer">
                <Link to={"/"}>기업소개</Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"/brandintroduction"}>브랜드소개</Link>
              </li>
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
