import React from "react";
import { allSongList } from "@/types/types";
import Image from "next/image";

export default function HeaderImage({ songList }: { songList: allSongList }) {
  return (
    <div className="playlist-header-img w-[240px] h-[240px] relative">
      <Image
        src={songList?.imageSrc}
        alt="song-images"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );
}
