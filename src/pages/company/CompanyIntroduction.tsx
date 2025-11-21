import React from "react";
import { imageData } from "../../constants/imageData";

function CompanyIntroduction() {
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
          <div className="flex flex-row justify-center gap-[25px] mx-4 text-[14px] mb-[150px]">
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
      <div>
        <img src={imageData.banner2} alt="" className="w-full mb-[100px]" />
      </div>

      <div className="max-w-[1200px] m-auto">
        <div className="text-center mx-6 mb-[200px]">
          <span className="text-[#7ecef4] font-bold text-[50px] mr-[800px] ">
            "
          </span>
          <span className="text-[#7ecef4] font-bold text-[50px]">"</span>

          <p>
            집요한사람들은, 누구나 좋아하는 브런치 메뉴들을 독창적으로 풀어내 .
            그어디에서도 맛보기 힘든 맛있는 요리들을 선보이는
            <br />
            브런치 레스토랑 브랜드 "썬데이브리즈"와 프리미엄 도시락 및 룸서비스
            전문 브랜드 "드시옹"을 운영하고 있습니다.
            <br />
            앞으로 많은 사람들에게 사랑 받는 외식브랜드들을 오랫동안 지켜가는
            외식전문기업으로서, 매년 폭풍 성장해 나아갈 것입니다.
            <br />
            또한 철저히 준비되지 않는 상태로 창업을 하여 어려움을 겪고 있는
            외식업 자영업자들에게 "죽은 매장 살리기 프로젝트" 교육서비스를
            제공하고 있습니다.
          </p>
        </div>

        <div className=" ml-[58px] flex items-center mb-[70px]">
          <div className="w-[4px] h-[15px] bg-[#7ecef4] flex mr-[20px]"></div>
          <p className="font-semibold text-[20px]">경영</p>
        </div>
        <div className="flex justify-center text-center mb-[100px] mx-6">
          <p className="font-semibold text-[20px]">
            부동산 개발회사와 연계하여 공실을 채워주고, 위탁 운영 사업을 진행
            중입니다.
          </p>
        </div>

        <div className="flex flex-row justify-center gap-[25px] mx-4 text-[14px] mb-[150px]">
          <div className="flex flex-col items-center ">
            <img src={imageData.heart} alt="" className="w-[200px] mb-[30px]" />

            <p className="text-center">
              부동산 개발법인과 연계하여, 그 부동산의 상권과 입지에
              <br />
              적합한 테넌트를 기획하여 공실을 채워주는 사업
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={imageData.fire} alt="" className="w-[200px] mb-[30px]" />
            <p className="text-center">
              텔이나 리조트, 혹은 특수상권 등에서 직접 운영은 하고 싶으나,
              <br />
              운영노하우나 실력이 없어 어려움을 겪는 곳에 위탁운영
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={imageData.mind} alt="" className="w-[200px] mb-[30px]" />
            <p className="text-center">
              온라인 채널을 통해 다년간의 노하우와 전문지식 등으로
              <br />
              매장 활성화나 실패하지 않는 창업 노하우를 교육하는 사업
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyIntroduction;
