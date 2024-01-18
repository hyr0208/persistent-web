import React from "react";
import { imageData } from "../../constants/imageData";

function MainPage() {
  return (
    <div className="relative">
      <img
        src={imageData.banner}
        alt=""
        className="h-[300px] w-full object-cover absolute top-0 left-0 right-0"
      />
      <div className="max-w-[1200px] m-auto">
        <div>
          <div>
            <div className="h-[300px] relative">
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

          <div className="flex justify-center">
            <img
              src={imageData.logoBlack}
              alt=""
              className="w-[300px] mb-[70px]"
            />
          </div>
          <div className="flex justify-center text-center mb-[60px] mx-6">
            <p className="font-semibold text-[20px]">
              "외식분야에서 음식 이상의 가치를 통해 미래의 행복한 식사문화를
              만들어 가겠습니다."
            </p>
          </div>
          <div className="flex justify-center text-center mb-[140px] mx-6">
            <p className="text-[18px]">
              집요한사람들은, 우리나라에서 고급도시락의 시장을 열었다는 평을
              듣는
              <br />
              고급도시락 브랜드의 원조 "옹가솜씨"를 만든 옹수민 셰프가 설립한
              기업입니다.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-[100px] mx-6 ">
            <div className="flex flex-col items-center ">
              <img
                src={imageData.heart}
                alt=""
                className="w-[200px] mb-[30px]"
              />

              <p className="text-center">
                음식 뿐아니라 경험에도 큰 가치를 갖게 함으로서
                <br />
                일상에서 행복지수가 높아 지는것을 돕는것이 우리의 비젼
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={imageData.fire}
                alt=""
                className="w-[200px] mb-[30px]"
              />
              <p className="text-center">
                우리의 고객 뿐 아니라 집요한사람들의 모든 구성원들이
                <br />
                행복할 수 있는 길을 찾아가는 여정에서, 가치를 추구하는 조직
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={imageData.mind}
                alt=""
                className="w-[200px] mb-[30px]"
              />
              <p className="text-center">
                스타가 되려는 노력보다 팀웍으로 고성과를 내는 아름다운 모습
                <br />
                열심히 일한만큼 성과로 당당히 평가받는 조직
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
