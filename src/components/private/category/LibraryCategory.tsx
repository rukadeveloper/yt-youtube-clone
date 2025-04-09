"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function LibraryCategory() {
  const libraryCategory = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];

  return (
    <ul className="top-category flex flex-wrap gap-4 max-w-full overflow-x-auto xl:w-full sm:w-[600px] w-[350px]">
      {libraryCategory.map((item: string) => (
        <li
          key={item}
          className={cn(
            "h-[38px] min-w-fit px-3 flex justify-center items-center rounded-lg bg-[rgba(144,144,144,.2)] cursor-pointer"
          )}>
          <button className="cursor-pointer">{item}</button>
        </li>
      ))}
    </ul>
  );
}
