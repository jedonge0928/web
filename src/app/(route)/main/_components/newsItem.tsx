"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useReadNews } from "@/_hooks/useNews/useReadNews";
import { NewsItemType } from "@/app/_constants/newsItemType";
import { updateImageUrl } from "@/utils/newsUtils/updatedImgUrl";

interface NewsPostItemProps {
  newsItem: NewsItemType;
}

const NewsItem = ({ newsItem }: NewsPostItemProps) => {
  const router = useRouter();
  const updatedImgUrl = updateImageUrl(newsItem?.thumbImg, "w68");
  const { handleRead } = useReadNews(newsItem?.id, false);

  const handleToNewsInfo = () => {
    router.push(`/news/news-detail/${newsItem?.id}`);
  };

  const handleOnClick = () => {
    handleRead();
    handleToNewsInfo();
  };

  return (
    <div
      className="flex items-center min-w-[436px] max-h-[68px] p-2 border-gray-300 cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex-shrink-0 max-w-[68px] max-h-[68px] rounded overflow-hidden bg-gray-300">
        <Image
          src={newsItem?.thumbImg ? updatedImgUrl : "/Empty_news.png"}
          alt="News img"
          width={68}
          height={68}
          className="max-w-[68px] min-h-[68px] rounded-[4.25px] object-cover"
        />
      </div>
      <div className="w-[368px] h-[68px] flex flex-col justify-center px-4 gap-1">
        <h2 className="w-full h-[24px] font-[700] text-[16px] leading-6 text-ellipsis overflow-hidden whitespace-nowrap">
          {newsItem.title}
        </h2>
        <p className="w-full h-[40px] font-[500] text-[14px] leading-5 overflow-hidden line-clamp-2">
          {newsItem?.content}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
