"use client";

import React from "react";
import usePlayerState from "@/hooks/usePlayerState";
import { playList } from "@/types/types";
import { FaPlayCircle } from "react-icons/fa";

export default function PlayListNav({ pl }: { pl: playList }) {
  const { addSongList } = usePlayerState();
  const { owner, playlistName, songList } = pl;
  const clickPlay = () => {
    //TODO : Play Music
    addSongList(songList);
  };

  return (
    <div className="playlist-nav text-white flex flex-col-reverse gap-2 relative m-4 p-2 hover:bg-neutral-700 rounded-lg group">
      <span className="text-[12px] text-[rgb(141,141,141)]">{owner}</span>
      <span className="text-[14px]">{playlistName}</span>
      <button
        className="absolute hidden top-1/2 -translate-y-1/2 right-[0.5rem] group-hover:block cursor-pointer"
        onClick={clickPlay}>
        <FaPlayCircle size={22} />
      </button>
    </div>
  );
}
