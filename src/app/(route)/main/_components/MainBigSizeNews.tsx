"use client";

import React from "react";
import Image from "next/image";
import useGetNewsDataList from "@/_hooks/useGetNewsDataList";
import { useRouter } from "next/navigation";

const MainBigSizeNews = () => {
  const router = useRouter();
  const { data, isLoading } = useGetNewsDataList();
  const mainPageData = data ? data[0] : null;
  const updatedImgUrl = mainPageData?.thumbImg?.replace(
    "type=w140",
    "type=w410"
  );

  const handleToNewsInfo = () => {
    router.push(`/news/news-detail/${mainPageData?.id}`);
  };

  return (
    <div
      className="relative w-[410px] h-[236px] rounded-[10px] overflow-hidden"
      onClick={handleToNewsInfo}
    >
      <Image
        src={mainPageData?.thumbImg ? updatedImgUrl : "/mainNews_fake.png"}
        // 목 데이터
        alt="main news"
        width={410}
        height={236}
        className="w-[410px] h-[236px] rounded-[10px]"
      />
      <div className="absolute top-[128px] w-[410px] min-h-[108px] py-4 flex flex-col gap-2 bg-gradient-to-b from-[#00000000] to-[#000000]">
        <h3 className="w-[410px] h-[28px] font-bold text-[18px] leading-7 text-[#FFFFFF] tracking-[0.04em] text-ellipsis overflow-hidden whitespace-nowrap">
          {isLoading ? "Loading..." : mainPageData?.title}
        </h3>
        <p className="w-[410px] h-[40px] opacity-90 font-medium text-[14px] leading-5 text-[#FFFFFF]">
          {isLoading ? "Loading..." : mainPageData?.title}
        </p>
      </div>
    </div>
  );
};

export default MainBigSizeNews;
