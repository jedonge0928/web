"use client";

import Arrow_left from "@/app/_components/icon/Arrow_left";
import NewsItem from "./NewsItem";
import Arrow_right from "@/app/_components/icon/Arrow_right";
import Arrow_up from "@/app/_components/icon/Arrow_up";

export const RightSideBar = () => {
  return (
    <div className="w-[288px] h-auto max-h-[880px] top-[250px] left-[1272px] flex flex-col gap-6">
      <div className="w-full h-auto max-h-[808px] flex flex-col gap-4 pb-6 shadow-md bg-[#f8fdff] rounded-[10px]">
        <div className="w-full h-auto max-h-[736px] rounded-[10px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <NewsItem key={index} />
          ))}
        </div>

        <div className="w-[160px] h-[32px] flex gap-4 items-center justify-center m-auto">
          <button className="w-[32px] h-[32px] rounded-[5px] border border-[#EEEEEE] p-[9px] flex gap-[10px] justify-center items-center">
            <Arrow_left />
          </button>
          <div className="w-[64px] h-[32px] font-[500] text-[14px] leading-[20px] tracking-[0%] text-[#656565] flex items-center justify-center align-center">
            1 / 3
          </div>
          <button className="w-[32px] h-[32px] rounded-[5px] border border-[#EEEEEE] p-[9px] flex gap-[10px] justify-center items-center">
            <Arrow_right />
          </button>
        </div>
      </div>

      <div className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-[5px] shadow-md flex justify-center items-center p-[10px] gap-[10px]">
        <Arrow_up />
      </div>
    </div>
  );
};
