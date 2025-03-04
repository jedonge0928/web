"use client";

import useSortedNewsDataList from "@/_hooks/useNews/useSortedPosts";
import { useNewsPageLogic } from "@/utils/newsUtils/useNewsPageLogic";
import React from "react";
import NewsTalkToolbar from "./_components/NewsTalkToolbar";
import NewsListContent from "./_components/NewsListContent";

const Page = () => {
  const { orderType, setOrderType, pageNum, onPageChange } = useNewsPageLogic();
  const {
    data: newsListData,
    isLoading,
    isError,
  } = useSortedNewsDataList({
    orderType,
    pageNum,
  });

  console.log("NewsListData: ", newsListData);

  return (
    <div className="w-[720px] h-auto flex flex-col justify-start bg-gray1 rounded-[5px] overflow-hidden">
      <NewsTalkToolbar
        setOrderType={setOrderType}
        onPageChange={onPageChange}
      />

      <NewsListContent
        data={newsListData}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default Page;
