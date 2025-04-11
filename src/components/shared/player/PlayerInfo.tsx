import React from "react";
import Image from "next/image";
import { allSongList } from "@/types/types";

export default function PlayerInfo({
  activeSong,
}: {
  activeSong: allSongList;
}) {
  return (
    <div className="player-info absolute top-1/2 -translate-y-1/2 xxs:left-1/2 left-[60%] xxs:-translate-x-1/2 translate-x-0 flex items-center gap-3">
      <div className="image-wrapper w-[80px] h-[40px] relative lg:block hidden">
        <Image
          src={activeSong.imageSrc}
          fill
          alt="player-song-img"
          className="object-cover"
        />
      </div>
      <div className="song-info flex flex-col justify-center gap-[2px]">
        <span>{activeSong.name}</span>
        <span className="text-neutral-500 md:inline hidden">
          {activeSong.channel}
        </span>
      </div>
    </div>
  );
}
