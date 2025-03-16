"use client";

import React from "react";
import { NewsItemType } from "@/app/_constants/newsItemType";
import NewsItemSkeleton from "./NewsItemSkeleton";
import useGetNewsDataList from "@/_hooks/fetcher/news/useGetNewsDataList";
import NewsItem from "./newsItem";

const NewsComponent = () => {
  const { data, isLoading } = useGetNewsDataList();

  const slicedNewsData = data?.slice(1, 4);

  return (
    <div className="w-[436px] min-h-[236px] flex flex-col gap-4">
      {isLoading
        ? Array(3)
            .fill(0)
            .map((_, index) => <NewsItemSkeleton key={index} />)
        : slicedNewsData?.map((newsItem: NewsItemType) => (
            <NewsItem key={newsItem.id} newsItem={newsItem} />
          ))}
    </div>
  );
};

export default NewsComponent;
