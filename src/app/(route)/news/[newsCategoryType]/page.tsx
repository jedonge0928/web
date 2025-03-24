"use client";

import React, { useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import useSortedNewsDataList from "@/_hooks/fetcher/news/useSortedNewsDataList";
import NewsTalkToolbar from "../_components/NewsTalkToolbar";
import NewsPostItemSkeleton from "../_components/NewsPostItemSkeleton";
import NewsPostItem from "../_components/NewsPostItem";
import { newsListConfig } from "../_types/newsListConfig";
import EmptyNews from "../_components/EmptyNews";
import { NewsItemType } from "../_types/newsItemType";

type NewsCategoryType = "" | "ESPORTS" | "FOOTBALL" | "BASEBALL";

export default function NewsPage() {
  const params = useParams<{ newsCategoryType: string }>();
  const searchParams = useSearchParams();

  const category =
    params.newsCategoryType === "ALL" ? "" : params.newsCategoryType;

  const orderType = () => {
    const orderTypeParam = searchParams.get("order_type");

    if (!orderTypeParam) {
      return "DATE";
    }

    switch (searchParams.get("order_type")) {
      case "RECOMMEND":
        return "VIEW";
      case "CREATE":
        return "DATE";
      case "COMMENT":
        return "COMMENT";
      default:
        return "COMMENT";
    }
  };

  const newsOption: newsListConfig = {
    page: Number(searchParams.get("page")) || 1,
    size: 20,
    category: (category as NewsCategoryType) || "",
    orderType: orderType() as newsListConfig["orderType"],
    searchType:
      (searchParams.get("search_type") as newsListConfig["searchType"]) || "",
    content: searchParams.get("search") || "",
    timePeriod:
      (searchParams.get("time") as newsListConfig["timePeriod"]) || "DAILY",
  };

  const { data: newsData, isLoading } = useSortedNewsDataList(newsOption);

  return (
    <div className="flex justify-center bg-gray1 min-h-[calc(100vh-476px)]">
      <div className="max-w-[720px] min-h-[120px] rounded-[5px] border-b bg-white mx-auto">
        <div className="sticky top-0 z-10">
          <NewsTalkToolbar newsType={category} pageInfo={newsData?.pageInfo} />
        </div>
        <div className="w-[720px]">
          {isLoading ? (
            Array(10)
              .fill(0)
              .map((_, index) => <NewsPostItemSkeleton key={index} />)
          ) : newsData?.content?.length === 0 || !newsData ? (
            <EmptyNews />
          ) : (
            newsData?.content?.map((newsItem: NewsItemType) => (
              <NewsPostItem key={newsItem?.id} newsItem={newsItem} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
