"use client";

import React from "react";
import useGetBoardDetail from "@/_hooks/getBoardDetail";
import Image from "next/image";
import parse from "html-react-parser";
import { Spinner, user } from "@heroui/react";
import useAuthCheck from "@/_hooks/useAuthCheck";
import useDeletePost from "@/_hooks/fetcher/board/useDeletePost";
import { useEditStore } from "@/utils/Store";
import { useRouter } from "next/navigation";
import PostAction from "@/app/(route)/(community)/_components/PostAction";
import Single_logo from "@/app/_components/icon/Single_logo";
import usePostRecommend from "@/_hooks/fetcher/board/usePostRecommend";
import useDeleteRecommendPost from "@/_hooks/fetcher/board/useDeleteRecommnedPost";

interface BoardDetailProps {
  boardId: string;
}

const BoardDetail = ({ boardId }: BoardDetailProps) => {
  const router = useRouter();
  const { setEditMode, setBoardId, setBoardData } = useEditStore();
  const { data: boardDetailData, isLoading } = useGetBoardDetail(boardId);
  const { data: userData } = useAuthCheck();
  const { mutate: mutateDeletePost } = useDeletePost(boardId);
  const { mutate: mutatePostRecommend } = usePostRecommend({ boardId });
  const { mutate: mutateDeleteRecommend } = useDeleteRecommendPost({ boardId });

  const boardTypeMap: { [key: string]: string } = {
    FOOTBALL: "축구",
    BASEBALL: "야구",
    ESPORTS: "E스포츠",
  };

  const categoryTypeMap: { [key: string]: string } = {
    FREE: "자유",
    QUESTION: "질문",
    ISSUE: "이슈",
    VERIFICATION: "리뷰",
    TIP: "플레이 팁",
  };

  const getKoreanBoardType = (type: string) => {
    return boardTypeMap[type] || type;
  };

  const getKoreanCategoryType = (type: string) => {
    return categoryTypeMap[type] || type;
  };

  const maskIP = (ip: string) => {
    if (!ip) return "";
    const parts = ip.split(".");
    if (parts.length !== 4) return ip;
    return `${parts[0]}.${parts[1]}.**.**`;
  };

  const handleDeletePost = () => {
    mutateDeletePost();
  };

  const handleEditClick = () => {
    setEditMode(true);
    setBoardId(boardId);
    const editableData = {
      categoryType: boardDetailData?.data?.categoryType,
      content: boardDetailData?.data?.content,
      title: boardDetailData?.data?.title,
      link: boardDetailData?.data?.link || "",
    };
    setBoardData(editableData);

    const routeBoardType = boardDetailData?.data?.boardType.toLowerCase();
    router.push(
      `/${routeBoardType}/${editableData?.categoryType}/write?edit=true`
    );
  };

  const handleRecommend = () => {
    mutatePostRecommend({ boardId });
  };

  const handleDeleteRecommend = () => {
    mutateDeleteRecommend({ boardId });
  };

  const isEditable =
    userData?.data?.data?.publicId === boardDetailData?.data?.publicId;

  const content = boardDetailData?.data?.content || "";

  const link = boardDetailData?.data?.link || "";

  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(link);

  const options = {
    replace: (domNode: any) => {
      if (domNode.name === "img") {
        const src = domNode.attribs?.src || "";
        if (src.includes("52.79.222.87")) {
          return (
            <Image
              src={src}
              alt="게시글 이미지"
              width={800}
              height={600}
              className="max-w-full h-auto mx-auto block"
              onError={() => console.error("Image failed to load")}
            />
          );
        }
      }
      return domNode;
    },
  };

  return (
    <div className="flex flex-col gap-[16px] w-[720px] rounded-5px border-b p-[24px] bg-white shadow-[0_0_10px_0_#0000000D]">
      <div className="w-[672px]">
        {isLoading ? (
          <div className="py-4">
            <h1 className="font-bold text-[18px] leading-[28px] text-[#303030] opacity-50 animate-pulse">
              로딩 중...
            </h1>
            <hr />
          </div>
        ) : (
          <div className="flex flex-col gap-y-[8px] text-gray6">
            <h1 className="font-bold text-[18px] leading-[28px] text-[#303030]">
              {boardDetailData?.data?.title}
            </h1>
            <div className="flex gap-x-[16px] max-w-[672px] min-h-[20px]">
              <div className="flex gap-x-[4px] w-[421px] h-[20px]">
                <p className="font-bold text-[14px] leading-[20px] ">
                  {getKoreanBoardType(boardDetailData?.data?.boardType)}
                </p>
                <p className="font-medium text-[14px] leading-[20px]">
                  {getKoreanCategoryType(boardDetailData?.data?.categoryType)}
                </p>
                <p className="font-medium text-[14px] leading-[20px]">1분 전</p>
                <div className="flex gap-x-[4px] font-medium text-[14px] leading-[20px]">
                  <p className="font-bold">조회수</p>
                  <p> {boardDetailData?.data?.viewCount}</p>
                </div>
                <div className="flex gap-x-[4px] font-medium text-[14px] leading-[20px]">
                  <p className="font-bold">댓글</p>
                  <p> {boardDetailData?.data?.commentCount}</p>
                </div>
                <div className="flex gap-x-[4px] font-medium text-[14px] leading-[20px]">
                  <p className="font-bold">추천</p>
                  <p> {boardDetailData?.data?.recommendCount}</p>
                </div>
              </div>
              <div className="flex justify-end w-[235px] h-[20px] whitespace-nowrap gap-x-[4px] font-medium text-[14px] leading-[20px]">
                <p>{boardDetailData?.data?.nickname}</p>
                <p>IP {maskIP(boardDetailData?.data?.clientIp)}</p>
              </div>
            </div>
            {isEditable && (
              <div className="w-full min-h-[32px] flex justify-end my-[16px]">
                <div className="max-w-[106px] h-[32px] flex gap-x-[8px] text-[14px] font-medium leading-[14px] text-gray7">
                  <button
                    onClick={handleEditClick}
                    className="w-[49px] h-[32px] rounded-[5px] border border-gray3 bg-white pt-[9px] py-[12px]"
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    onClick={handleDeletePost}
                    className="w-[49px] h-[32px] rounded-[5px] border border-gray3 bg-white pt-[9px] py-[12px]"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
            <hr className={isEditable ? "" : "mt-[16px]"} />
          </div>
        )}
      </div>

      <div className="content flex flex-col gap-[12px] font-medium text-[16px] leading-[24px] text-gray7">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Spinner className="w-10 h-10" />
          </div>
        ) : (
          <>
            {youtubeEmbedUrl && (
              <iframe
                width="100%"
                height="408"
                src={youtubeEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {parse(content, options)}
            {!youtubeEmbedUrl && (
              <div className="w-[679px] min-h-[42px]">
                <div>{boardDetailData?.data?.link}</div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="w-full h-auto flex justify-center">
        <button
          onClick={() => handleRecommend()}
          className="min-w-[120px] w-auto h-[40px] gap-x-[4px] flex items-center text-[14px] justify-center px-4 py-[13px] bg-primary text-white font-bold rounded-[5px]"
        >
          <Single_logo />
          추천
          <p>{boardDetailData?.data?.recommendCount}</p>
        </button>
      </div>
      <PostAction
        type="community"
        onReport={() => alert("신고하기 기능 추가예정!")}
      />
    </div>
  );
};

export default BoardDetail;
