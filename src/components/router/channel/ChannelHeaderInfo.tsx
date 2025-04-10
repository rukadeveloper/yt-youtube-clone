import React from "react";
import { allSongList, playList } from "@/types/types";
import { IoShuffle } from "react-icons/io5";

interface channel {
  id: number;
  subscribers: number;
  name: string;
  songList: allSongList[];
  playlistArray: playList[];
}

export default function ChannelHeaderInfo({ channel }: { channel: channel }) {
  return (
    <div className="channel-header-info mt-[300px]">
      <h2 className="text-[28px] pb-[1rem]" style={{ fontWeight: "800" }}>
        {channel.name}
      </h2>
      <div className="channel-button-wrapper flex items-center gap-2 mb-[50px]">
        <button className="w-[130px] bg-white text-black py-2 rounded-3xl flex flex-row-reverse justify-center items-center gap-2 cursor-pointer">
          <span className="text-[14px] leading-[14px]">셔플</span>
          <IoShuffle />
        </button>
        <button className="w-[120px] py-2 box-border border border-solid border-red-700 text-[14px] leading-[14px] text-red-700 rounded-3xl cursor-pointer">
          구독자 {channel.subscribers / 10000}만
        </button>
      </div>
    </div>
  );
}
