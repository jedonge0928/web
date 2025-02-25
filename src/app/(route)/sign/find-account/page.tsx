"use client";

import { useState } from "react";
import FindId from "./_components/FindId";
import FindPassword from "./_components/FindPassword";

interface Tabs {
  id: "findId" | "findPassword";
  label: string;
}

const FindAccount = () => {
  const [findAccountState, setFindAccountState] = useState<
    "findId" | "findPassword"
  >("findId");

  const tabs: Tabs[] = [
    { id: "findId", label: "아이디 찾기" },
    { id: "findPassword", label: "비밀번호 찾기" },
  ];

  const findIdPasswordStyle =
    "w-1/2 flex items-center justify-center rounded-t-[5px] cursor-pointer border-gray-600 border-[#303030] text-[#424242]";
  return (
    <div className="w-[328px] min-h-[480px] mb-[356px] mx-auto mt-[40px] select-none">
      <div className="w-full min-h-[52px] flex">
        {tabs.map(({ id, label }) => (
          <div
            key={id}
            className={`${findIdPasswordStyle} ${
              findAccountState === id
                ? "border-[1px] border-b-0 font-[700]"
                : "border-b text-[#A6A6A6] border-[#A6A6A6]"
            }`}
            onClick={() => setFindAccountState(id)}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="w-full mt-[24px]">
        {findAccountState === "findId" ? <FindId /> : <FindPassword />}
      </div>
    </div>
  );
};

export default FindAccount;
