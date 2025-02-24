import React from "react";
import Banner from "../_components/Banner";
import LeftSidebar from "../_components/LeftSidebar";
import { RightSideBar } from "../_components/RightSideBar";

export const metadata = {
  title: "야구 페이지",
  description: "야구 페이지입니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray1">
      <Banner url={"baseball_banner.png"} />
      <div className="mt-[20px] max-w-[1200px] mx-auto flex gap-[10px]">
        <div className="w-[160px] min-h-[364px]">
          <div>
            <LeftSidebar />
          </div>
        </div>
        <div className="flex-1 max-w-[720px]">{children}</div>
        <div className="flex-1">
          <div>
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
