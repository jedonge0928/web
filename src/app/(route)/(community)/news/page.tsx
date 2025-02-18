"use client";

import React from "react";
import { NewsTalkToolbar } from "../_components/NewsTalkToolbar";
import EmptyNews from "./_components/EmptyNews";
import NewsPostItem from "./_components/NewsPostItem";
import NewsItem from "../../main/_components/newsItem";
import useGetNewsDataList from "@/_hooks/useGetNewsDataList";

const Page = () => {
  const { data, isLoading, isError } = useGetNewsDataList();

  console.log("NewsListData: ", data);

  return (
    <div className="w-[720px] min-h-[1508px] flex flex-col justify-start bg-[#FAFAFA] rounded-[5px] overflow-hidden">
      <div className="w-[720px] min-h-[120px] rounded-tl-[5px] rounded-tr-[5px] bg-[#FFFFFF] mx-auto">
        <NewsTalkToolbar />
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error...</p>
        ) : data.length === 0 ? (
          <EmptyNews />
        ) : (
          data.map((newsItem: NewsItem) => (
            <NewsPostItem key={newsItem.id} newsItem={newsItem} />
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
