"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NewsItemType } from "@/app/_constants/newsItemType";
import Link from "next/link";
import { useReadNews } from "@/_hooks/useReadNews";

interface NewsPostItemProps {
  newsItem?: NewsItemType;
}

const NewsPostItem = ({ newsItem }: NewsPostItemProps) => {
  const updatedImgUrl = newsItem?.thumbImg?.replace("type=w140", "type=w160");
  const { isRead, handleRead } = useReadNews(newsItem?.id);

  const changeCategory = (category?: string) => {
    switch (category) {
      case "BASEBALL":
        return "야구";
      case "FOOTBALL":
        return "축구";
      case "ESPORTS":
        return "E스포츠";
      default:
        return "기타";
    }
  };

  // 뉴스 기사 올라온 시간 확인하는 로직
  const changeDateAgo = (newsTime: string | undefined) => {
    if (!newsTime) return "알 수 없음";

    const newsDate = new Date(newsTime);
    const now = new Date();

    const diffMs = now.getTime() - newsDate.getTime(); // 현재 시간과 뉴스 시간의 차이를 밀리초 단위로 계산
    const diffMinutes = Math.floor(diffMs / (1000 * 60)); // 밀리초 차이를 분 단위로 변환
    const diffHours = Math.floor(diffMinutes / 60); // 분 차이를 시 단위로 변환
    const diffDays = Math.floor(diffHours / 24); // 시 차이를 24시간 단위로 변환하여 일 수 계산

    // 24시간 이상인 경우 일 단위로 표시
    if (diffDays > 0) {
      return `${diffDays}일 전`;
    }

    // 1시간 이상 24시간 미만인 경우 시, 분 단위로 표시
    if (diffHours > 0) {
      return `${diffHours}시간 전`;
    }

    // 1시간 미만인 경우 분 단위로 표시
    return diffMinutes > 0 ? `${diffMinutes}분 전` : "방금 전";
  };

  // 뉴스 시간 24시간이 지났는지 확인하는 로직
  const newNews = (newsTime: string | undefined) => {
    if (!newsTime) return false;

    const newsDate = new Date(newsTime);
    const now = new Date();

    const diffMs = now.getTime() - newsDate.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    return diffMinutes < 1440;
  };

  // 스타일 객체로 함축
  const styles = {
    title: isRead
      ? "font-bold text-[16px] leading-6 tracking-[-2%] text-gray5 text-ellipsis overflow-hidden whitespace-nowrap"
      : "font-bold text-[16px] leading-6 tracking-[-2%] text-gray9 text-ellipsis overflow-hidden whitespace-nowrap",

    content: isRead
      ? "w-[524px] h-[40px] font-medium text-[14px] leading-5 text-gray5 overflow-hidden line-clamp-2"
      : "w-[524px] h-[40px] font-medium text-[14px] leading-5 text-gray7 overflow-hidden line-clamp-2",

    info: "font-medium text-[12px] leading-[18px] letter-[-2%] text-gray5",
    category: "font-bold text-[12px] leading-[18px] letter-[-2%] text-gray5",
  };

  return (
    <Link href={`/news/news-detail/${newsItem?.id}`}>
      <div
        onClick={handleRead}
        className="min-w-[720px] min-h-[116px] flex justify-start gap-3 border-b border-gray1 p-3 bg-white cursor-pointer hover:bg-[#F8FDFF]"
      >
        <div className="w-[160px] h-[92px] rounded-[3.83px] relative">
          <Image
            src={updatedImgUrl || "/Empty_news.png"}
            alt="thumbImg"
            width={newsItem?.thumbImg ? 160 : 94.39}
            height={newsItem?.thumbImg ? 92 : 26}
            className={`
            ${
              newsItem?.thumbImg
                ? "w-full h-full object-cover rounded-[5px] gap-[10px] "
                : "absolute top-[33.5px] left-[33.05px] gap-[3.24px] rounded-[3.83px]"
            }
          `}
          />
        </div>

        <div className="w-[524px] h-auto min-h-[90px] flex flex-col gap-1">
          <div className="w-[524px] h-auto min-h-[24px] flex gap-[2px] text-start items-center justify-start">
            <h1 className={styles.title}>{newsItem?.title}</h1>
            <p className="font-medium text-[14px] leading-5 text-[#00ADEE]">
              [24]
            </p>
            {newNews(newsItem?.postDate) && (
              <p className="font-black text-[10px] leading-[18px] align-center text-[#00ADEE]">
                N
              </p>
            )}
          </div>

          <div>
            <p className={styles.content}>
              컨텐츠들어갈부분 컨텐츠들어갈부분 컨텐츠들어갈부분
              컨텐츠들어갈부분 컨텐츠들어갈부분 컨텐츠들어갈부분
              컨텐츠들어갈부분 컨텐츠들어갈부분 컨텐츠들어갈부분
              컨텐츠들어갈부분 컨텐츠들어갈부분 컨텐츠들어갈부분
            </p>
          </div>

          <div className="flex gap-1">
            <p className={styles.category}>
              {changeCategory(newsItem?.category)}
            </p>
            <p className={styles.info}>{changeDateAgo(newsItem?.postDate)}</p>
            <p className={styles.info}>네이버 스포츠 {/* 목 데이터 */}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsPostItem;
