"use client";

import React, { use } from "react";
import Image from "next/image";
import Single_logo from "@/app/_components/icon/Single_logo";
import { NewsItemType } from "@/app/_constants/newsItemType";
import useTimeAgo from "@/utils/useTimeAgo";
import ChangedCategory from "@/utils/newsUtils/changedCategory";
import CommentSection from "../../../_components/CommentSection";
import { useNewsPageLogic } from "@/utils/newsUtils/useNewsPageLogic";
import { updateImageUrl } from "@/utils/newsUtils/updatedImgUrl";
import EmptyNews from "../../../_components/EmptyNews";
import NewsPostItem from "../../../_components/NewsPostItem";
import NewsTalkToolbar from "../../../_components/NewsTalkToolbar";
import PostAction from "@/app/(route)/(community)/_components/PostAction";
import NewsInfoSkeleton from "./_components/NewsInfoSkeleton";
import NewsPostItemSkeleton from "../../../_components/NewsPostItemSkeleton";
import useGetNewsInfoData from "@/_hooks/fetcher/news/useGetNewInfo";
import useSortedNewsDataList from "@/_hooks/fetcher/news/useSortedNewsDataList";
import usePatchRecommend from "@/_hooks/fetcher/news/usePatchRecommend";
import { useQueryClient } from "@tanstack/react-query";
import useDeleteRecommend from "@/_hooks/fetcher/news/useDeleteRecommend";
import useGetNewsComment from "@/_hooks/fetcher/news/comment/useGetNewsComment";
import NewsSendCommentBox from "./_components/NewsSendCommentBox";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const queryClient = useQueryClient();

  const {
    orderType,
    setOrderType,
    timePeriod,
    setTimePeriod,
    page,
    onPageChange,
    searchType,
    setSearchType,
  } = useNewsPageLogic();

  const { data: newsInfoData, isLoading } = useGetNewsInfoData(id);
  const formattedTime = useTimeAgo(newsInfoData?.postDate);
  const { mutate: newsAddCommend } = usePatchRecommend();
  const { mutate: newsDeleteRecommend } = useDeleteRecommend();
  const { data: newsCommentData } = useGetNewsComment(id);
  console.log("newsCommentData: ", newsCommentData?.content);

  const { data: newsListData } = useSortedNewsDataList({
    orderType,
    page,
    timePeriod,
    searchType,
  });
  const updatedImgUrl = updateImageUrl(newsInfoData?.thumbImg, "w360");
  const sliceNewsListData = newsListData ? newsListData.slice(0, 3) : [];

  const handleNewsCommend = () => {
    if (!newsInfoData?.recommend) {
      newsAddCommend(id, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["getNewsInfo", id] });
        },
        onError: (error) => {
          console.error("추천 실패:", error);
        },
      });
    } else if (newsInfoData?.recommend) {
      newsDeleteRecommend(id, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["getNewsInfo", id] });
        },
        onError: (error) => {
          console.error("추천 실패:", error);
        },
      });
    }
  };

  console.log("newsInfoData: ", newsInfoData);

  return (
    <>
      {isLoading ? (
        <NewsInfoSkeleton />
      ) : (
        <div className="flex flex-col gap-4 w-[720px] h-auto bg-white p-6 rounded-[5px] border-b border-white shadow-sm mb-2">
          <div className="w-full h-auto flex flex-col gap-2">
            <h1 className="w-full h-auto font-bold text-[18px] leading-7 tracking-[-0.72px] text-gray8">
              {newsInfoData?.title}
            </h1>

            <div className="w-full h-auto min-h-[20px] gap-4 flex justify-between text-gray2">
              <div className="flex gap-2 text-gray6 font-[700] leading-5 text-[14px]">
                <div className="flex gap-1 font-medium text-[14px] leading-5">
                  <ChangedCategory category={newsInfoData?.category} />
                  <p>{formattedTime}</p>
                </div>
                <div className="flex gap-1 font-medium text-[14px] leading-5">
                  <p className="font-bold">조회수 {newsInfoData?.viewCount}</p>
                  <p>댓글 {newsInfoData?.commentCount}</p>
                </div>
                <div className="flex gap-1 font-medium text-[14px] leading-5">
                  <p className="font-bold">추천</p>
                  <p>{newsInfoData?.recommendCount}</p>
                </div>
              </div>
              <div className="text-[14px] flex font-[500] leading-5 gap-1 text-gray6">
                <p>네이버 스포츠</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full h-auto flex flex-col gap-3">
            <Image
              src={newsInfoData ? updatedImgUrl : "/Empty_news.png"}
              alt="News detail img"
              width={672}
              height={338}
              className="object-cover"
            />
            <p className="font-[500] text-[16px] leading-6 tracking-[-0.02em] text-gray7 overflow-hidden line-clamp-2">
              {newsInfoData?.content}
            </p>
          </div>

          <div className="w-full h-auto flex justify-center gap-2">
            <button
              onClick={handleNewsCommend}
              className="min-w-[120px] w-auto h-[40px] flex items-center text-[14px] justify-center gap-1 px-4 py-[13px] bg-[#00ADEE] text-white font-bold rounded-[5px]"
            >
              <Single_logo />
              추천 <span>{newsInfoData?.recommendCount}</span>
            </button>
          </div>
          <PostAction type="news" source={newsInfoData?.source} />
          <CommentSection
            newsInfoData={newsInfoData}
            newsCommentData={newsCommentData}
          />
        </div>
      )}

      <NewsTalkToolbar
        setOrderType={setOrderType}
        setTimeType={setTimePeriod}
        onPageChange={onPageChange}
        setSearchType={setSearchType}
      />

      <div className="w-[720px] h-auto rounded-b-[5px] overflow-hidden shadow-md">
        {isLoading ? (
          Array(3)
            .fill(0)
            .map((_, index) => <NewsPostItemSkeleton key={index} />)
        ) : sliceNewsListData?.length === 0 ? (
          <EmptyNews />
        ) : (
          sliceNewsListData.map((newsInfoData: NewsItemType) => (
            <NewsPostItem newsItem={newsInfoData} key={newsInfoData.id} />
          ))
        )}
      </div>
      <div className="shadow-md sticky bottom-0">
        <NewsSendCommentBox id={id} />
      </div>
    </>
  );
};

export default Page;
