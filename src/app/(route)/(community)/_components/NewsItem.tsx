import React from "react";
import Image from "next/image";

const NewsItem = () => {
  return (
    <div className="min-w-[288px] min-h-[92px] flex justify-start items-center border-b border-gray2 p-3 cursor-pointer gap-3">
      <Image
        src="/NewsItem_fake2.png"
        alt="news img"
        width={68}
        height={68}
        className="w-[68px] h-[68px] rounded-[4.25px]"
      />
      <div className="min-w-[184px] h-auto min-h-[68px] flex flex-col justify-center items-start gap-1">
        <div className="w-[184px] h-[24px] font-[700] text-[16px] text-gray9 leading-6 tracking-[-0.02em]">
          유승민, "체육인 위한 민...
        </div>
        <div className="w-[184px] h-[40px] text-[14px] text-gray7 leading-5 tracking-[0%] opacity-90">
          제42대 대한체육회 회장 선거에 출마한 유승민(42) 전 IOC...
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
