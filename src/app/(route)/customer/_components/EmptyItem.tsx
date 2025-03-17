import React from "react";
import Image from "next/image";

interface EmptyNoticeItemProps {
  title: string;
}

const EmptyItem = ({ title }: EmptyNoticeItemProps) => {
  return (
    <div className="w-[720px] h-[248px] rounded-b-[10px] bg-[#FAFAFA] flex items-center">
      <div className="w-full min-h-[80px] flex flex-col gap-4 items-center justify-center">
        <Image src="/Empty_news.png" alt="empty img" width={148} height={40} />
        <div className="w-full min-h-[24px] flex gap-1 text-center items-center justify-center">
          <p className="text-bold text-[16px] leading-6 tracking-[-0.02em] text-[#424242]">
            등록된 <span>{title}</span> 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyItem;
