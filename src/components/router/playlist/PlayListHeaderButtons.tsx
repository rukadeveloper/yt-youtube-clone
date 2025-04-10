"use client";

import React from "react";
import { allSongList, playList } from "@/types/types";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getRandomElementFromArray } from "@/lib/utils";

export default function PlayListHeaderButtons({
  playlist,
  addSongList,
}: {
  playlist: playList;
  addSongList: (songList: allSongList[]) => void;
}) {
  const { push } = useRouter();

  const clickPlay = () => {
    addSongList(playlist.songList);
  };

  console.log(getRandomElementFromArray(playlist.songList));

  return (
    <div className="playlist-header-buttons flex gap-6 mt-10">
      <button
        className="py-2 px-3 w-[80px] box-border flex flex-row-reverse justify-between items-center bg-white text-black rounded-4xl cursor-pointer"
        onClick={clickPlay}>
        <span>재생</span>
        <FaPlay />
      </button>
      <button className="py-2 px-3 w-[140px] box-border flex flex-row-reverse justify-between items-center bg-transparent text-white border border-white rounded-4xl cursor-pointer">
        <span>보관함에 저장</span>
        <BsBookmarkPlus />
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <span className="sr-only">더보기</span>
            <IoMdMore size={24} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-5" align="end">
          <DropdownMenuLabel className="hidden p-0 border-none">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuItem
            onSelect={() => {
              push(
                `/channel/${
                  getRandomElementFromArray(playlist.songList).channelId
                }`
              );
            }}>
            해당 아티스트 채널로 가기
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
