"use client";

import { useState } from "react";
import { MypageToolbar } from "../../_components/MypageToolbar";
import useMyPostList from "@/_hooks/useMyPostList";
import MyPagePostItem from "./MyPagePostItem";
import MyPagePostEmpty from "./MypagePostEmpty";

interface PostListConfig {
  page: number;
  size: number;
  orderType: "CREATE" | "RECOMMEND" | "COMMENT";
  searchType: "TITLE" | "CONTENT" | "TITLE_CONTENT" | "NICKNAME" | "COMMENT";
  search: string;
}

interface PostListData {
  content: {
    id: number;
    boardType: string;
    categoryType: string;
    title: string;
    createdIp: string;
    thumbnail: string;
    publicId: string;
    nickname: string;
    commentCount: number;
    createDate: string;
    lastModifiedDate: string;
  }[];
  pageInfo: {
    currentPage: number;
    totalPage: number;
    totalElement: number;
  };
}

const MyPagePostList = () => {
  const [postListConfig, setPostListConfig] = useState<PostListConfig>({
    page: 1,
    size: 5,
    orderType: "CREATE",
    searchType: "TITLE_CONTENT",
    search: "",
  });
  const { data, isLoading } = useMyPostList(postListConfig);
  const { content, pageInfo } = data?.data?.list || {};

  return (
    <div>
      <MypageToolbar
        mode="posts"
        listConfig={postListConfig}
        setListConfig={setPostListConfig}
        pageInfo={pageInfo}
      />
      <div className="flex flex-col items-center w-full bg-[#FFFFFF] rounded-b-[5px]">
        {pageInfo?.totalElement !== 0 ? (
          content?.map((post: PostListData["content"][number]) => (
            <MyPagePostItem key={post.id} data={post} />
          ))
        ) : (
          <MyPagePostEmpty />
        )}
      </div>
    </div>
  );
};

export default MyPagePostList;
