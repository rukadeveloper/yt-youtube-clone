"use client";

import React from "react";
import { playList } from "../../../types/types";
import { getRandomElementFromArray } from "@/lib/utils";
import CardImage from "./CardImage";
import { useRouter } from "next/navigation";

export default function PlayListCard({ playList }: { playList: playList }) {
  const router = useRouter();
  const { id, owner, playlistName, songList } = playList;
  const imgSrc = getRandomElementFromArray(songList).imageSrc;

  const goPlayList = () => {
    if (id) router.push(`/playlist?list=${id}`);
  };

  return (
    <div className="play-list-card group">
      <button onClick={goPlayList} className="w-full cursor-pointer">
        <CardImage imgSrc={imgSrc} playList={playList} />
        <span className="block mt-3">{owner}</span>
        <span className="block text-neutral-700">{playlistName}</span>
      </button>
    </div>
  );
}
