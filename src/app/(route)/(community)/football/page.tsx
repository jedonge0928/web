"use client";

import PostItem from "../_components/PostItem";
import { CommunityToolbar } from "../_components/CommunityToolbar";
import { usePathname } from "next/navigation";

const Football = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="flex justify-center bg-[#FAFAFA] mt-3.5">
      <div className="max-w-[720px] min-h-[120px] rounded-[5px] border-b bg-[#FFFFFF] mx-auto">
        <CommunityToolbar />
        <PostItem />
        {Array.from({ length: 15 }).map((_, index) => (
          <PostItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default Football;
