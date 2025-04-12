"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useLibrary from "@/hooks/useLibrary";
import { cn } from "@/lib/utils";

export default function LibraryCategory() {
  const libraryCategory = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];
  const { setClickedContent, clickedContent } = useLibrary();
  const { push } = useRouter();

  const clickedCategory = (item: string) => {
    if (item === clickedContent) {
      setClickedContent("");
      push(`/library`);
    } else {
      setClickedContent(item);
      push(`/library?q=${item}`);
    }
  };

  return (
    <ul className="top-category flex flex-wrap gap-4 max-w-full overflow-x-auto xl:w-full sm:w-[600px] w-[350px]">
      {libraryCategory.map((item: string) => (
        <li
          key={item}
          className={cn(
            "h-[38px] min-w-fit px-3 flex justify-center items-center rounded-lg  cursor-pointer",
            clickedContent === item
              ? "bg-white text-black"
              : "bg-[rgba(144,144,144,.2)] text-white"
          )}>
          <button
            className={cn("cursor-pointer")}
            onClick={() => {
              clickedCategory(item);
            }}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
