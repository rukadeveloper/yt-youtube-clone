"use client";

import React from "react";
import { useUIState } from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { homeCategory } from "@/types/types";
import { cn } from "@/lib/utils";

export default function Category() {
  const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } =
    useUIState();

  const clickEmotion = (item: homeCategory) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory("");
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  return (
    <ul className="top-category flex gap-4 max-w-full overflow-x-auto w-full">
      {homeCategoryList.map((item: homeCategory) => (
        <li
          key={item.label}
          className={cn(
            "h-[38px] min-w-fit px-3 flex justify-center items-center rounded-lg bg-[rgba(144,144,144,.2)] cursor-pointer",
            item.label === homeCategory && "bg-white text-black"
          )}>
          <button
            className="cursor-pointer"
            onClick={() => {
              clickEmotion(item);
            }}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
