import React from "react";
import CustomerLeftSidebar from "./_components/CustomerLeftSidebar";
import { RightSideBar } from "../_components/RightSideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="w-[1200px] min-h-[120px] flex items-center">
        <h1 className="font-bold text-[28px] leading-10 tracking-[-0.04em] ">
          고객센터
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto flex gap-4 items-start justify-center">
        {/* 수정필요 */}
        <div className="w-[160px] min-h-[260px] rounded-5px overflow-hidden bg-[#FFFFFF] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.05)]">
          <CustomerLeftSidebar />
        </div>
        <div>{children}</div>
        <div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
