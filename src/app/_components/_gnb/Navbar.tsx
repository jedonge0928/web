"use client";

import { useRouter, usePathname } from "next/navigation";
import { Search } from "../icon/Search";
import Link from "next/link";
import { NAVBARS } from "@/app/_constants/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isCurrentPath = (path: string) => pathname === path;

  const navbarClass =
    "min-h-[60px] p-[16px] whitespace-nowrap font-medium text-[18px] leading-7 tracking-[-0.04em] text-center cursor-pointer";

  return (
    <div className="w-full max-w-[1200px] min-h-[60px] flex justify-between items-center mx-auto">
      <div className="max-w-[447px] min-h-[60px] flex justify-around gap-2.5">
        {NAVBARS.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className={`${navbarClass} flex justify-around items-center ${
                isCurrentPath(item.link)
                  ? "font-normal text-[#00ADEE]"
                  : "font-normal text-[#424242]"
              } ${index === 0 ? "pl-0" : ""}`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center mb-2">
        <div className="relative w-[414px]">
          <input
            className="w-full min-h-[48px] py-[12px] px-[16px] border-[0.5px] rounded-full pl-10"
            placeholder="검색어를 입력해주세요"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
