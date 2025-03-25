"use client";

import React, { Suspense } from "react";
import CustomerTalkToolbar from "./_components/CustomerTalkToolbar";
import NoticeItem from "./_components/NoticeItem";
import useGetNoticeDataList from "@/_hooks/fetcher/customer/useGetNoticeDataList";
import EmptyItem from "./_components/EmptyItem";
import NoticeItemSkeleton from "./_components/NoticeItemSkeleton";
import { NoticeContentType } from "@/app/_constants/customer/NoticeItemType";
import { noticeListConfig } from "./_types/noticeListConfig";
import { useAdminRole } from "@/app/(route)/customer/_utils/adminChecker";
import { useSearchParams } from "next/navigation";

const Page = () => {
  return (
    <Suspense fallback={""}>
      <NoticePageContent />
    </Suspense>
  );
};

const NoticePageContent = () => {
  const searchParams = useSearchParams();
  const adminChecker = useAdminRole();

  const noticeOption: noticeListConfig = {
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
    size: 20,
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
      <div className="max-w-[720px] min-h-[120px] rounded-[5px] border-b bg-white mx-auto">
        <div className="sticky top-0 z-10">
          <CustomerTalkToolbar
            showOptions={false}
            paginationData={noticeListData?.pageInfo}
            adminChecker={adminChecker}
          />
        </div>

        <div className="w-[720px] h-auto rounded-b-[5px] mb-10 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.05)]">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <NoticeItemSkeleton key={index} />
            ))
          ) : noticeListData?.content?.length === 0 || isError ? (
            <EmptyItem title="공지사항이" />
          ) : (
            noticeListData?.content?.map(
              (noticeListData: NoticeContentType) => (
                <NoticeItem
                  key={noticeListData?.id}
                  noticeData={noticeListData}
                />
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
