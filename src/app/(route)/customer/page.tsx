"use client";

import React, { useState } from "react";
import CustomerTalkToolbar from "./_components/CustomerTalkToolbar";
import NoticeItem from "./_components/NoticeItem";
import useGetNoticeDataList from "@/_hooks/fetcher/customer/useGetNoticeDataList";
import EmptyNoticeItem from "./_components/EmptyNoticeItem";
import NoticeItemSkeleton from "./_components/NoticeItemSkeleton";
import { NoticeContentType } from "@/app/_constants/customer/NoticeItemType";
import { useSearchParams } from "next/navigation";
import { noticeListConfig } from "./_types/customer";
import { useQueryClient } from "@tanstack/react-query";
import { getAdminRole } from "@/app/(route)/customer/_utils/adminChecker";

const Page = () => {
  const queryClient = useQueryClient();
  const adminRole = getAdminRole(queryClient);
  const searchParams = useSearchParams();

  const noticeOption: noticeListConfig = {
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
    size: 10,
    orderType:
      (searchParams.get("order_type") as noticeListConfig["orderType"]) || "",
    searchType:
      (searchParams.get("search_type") as noticeListConfig["searchType"]) || "",
    search: searchParams.get("search") || "",
  };

  const {
    data: noticeListData,
    isLoading,
    isError,
  } = useGetNoticeDataList(noticeOption);

  return (
    <>
      <div className="w-[720px] min-h-[120px] rounded-t-[5px]">
        <CustomerTalkToolbar
          showOptions={false}
          paginationData={noticeListData?.pageInfo}
          adminChecker={adminRole}
        />
      </div>

      <div className="w-[720px] h-auto rounded-b-[5px] mb-10 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.05)]">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <NoticeItemSkeleton key={index} />
          ))
        ) : noticeListData?.content?.length === 0 || isError ? (
          <EmptyNoticeItem />
        ) : (
          noticeListData?.content?.map((noticeListData: NoticeContentType) => (
            <NoticeItem key={noticeListData?.id} noticeData={noticeListData} />
          ))
        )}
      </div>
    </>
  );
};

export default Page;
