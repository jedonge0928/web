"use client";

import React, { useState } from "react";
import BaseballStrengthItem from "./BaseballStrengthItem";
import BaseballStrengthPlayerItem from "./BaseballStrengthPlayerItem";
import BaseballNavbar from "./BaseballNavbar";
import BaseballPlayerInfo from "./BaseballPlayerInfo";
import Fake_scheduleItem from "@/app/_components/icon/Fake_scheduleItem";
import BenchPlayers from "./BenchPlayers";
import BenchPitchers from "./BenchPitchers";
import LiveMatchPanel from "./LiveMatchPanel";
import CommentBox from "./CommentBox";

const BaseballTab = () => {
  const [selectedCategory, setSelectedCategory] = useState("전력");

  return (
    <div className="w-[800px] min-h-[935px] flex flex-col gap-6">
      <BaseballNavbar setSelectedCategory={setSelectedCategory} />
      {selectedCategory === "전력" && (
        <>
          <BaseballStrengthItem />
          <BaseballStrengthPlayerItem />
        </>
      )}

      {selectedCategory === "라인업" && (
        <>
          <div className="w-full min-h-[1306px] flex gap-10">
            <BaseballPlayerInfo
              title={"삼성"}
              teamLogo={<Fake_scheduleItem />}
              photo="/Fake_baseballLineupPlayer.png"
            />
            <div className="w-[2px] height-[1306px] bg-[#EEEEEE]" />
            <BaseballPlayerInfo
              title={"삼성"}
              teamLogo={<Fake_scheduleItem />}
              photo="/Fake_baseballLineupPlayer2.png"
            />
          </div>
          <BenchPlayers />
          <BenchPitchers />
        </>
      )}
      {selectedCategory === "기록" && <div></div>}
      {selectedCategory === "승부예측" && (
        <div className="flex flex-col gap-3">
          <LiveMatchPanel />
          <CommentBox />
        </div>
      )}
    </div>
  );
};

export default BaseballTab;
