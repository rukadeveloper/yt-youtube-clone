import Image from "next/image";
import React from "react";
import { TopSong } from "@/types/types";

import { FaCircle } from "react-icons/fa";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

export default function SongListColumn({ ch }: { ch: TopSong }) {
  return (
    <div className="song-list-column w-full flex items-center">
      <div className="thumbnail_wrapper w-[50px] aspect-square relative m-2">
        <Image
          src={ch.imageSrc}
          alt="thumbnail"
          fill
          className="object-cover"
        />
      </div>
      <div className="ranked w-[24px] flex justify-center items-center">
        {ch.rank === ch.prevRank ? (
          <FaCircle size={8} />
        ) : ch.rank > ch.prevRank ? (
          <FaCaretDown color="red" />
        ) : (
          <FaCaretUp color="#486a3f" />
        )}
      </div>
      <div className="rank text-[16px] leading-[16px] mr-10">{ch.rank + 1}</div>
      <div className="names flex flex-col">
        <span>{ch.name}</span>
        <span className="text-neutral-500">{ch.channel}</span>
      </div>
    </div>
  );
}
