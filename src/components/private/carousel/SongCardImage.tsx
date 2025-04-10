import React from "react";
import { TopSong } from "@/types/types";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

export default function SongCardImage({ song }: { song: TopSong }) {
  return (
    <button className="song-card-images w-[48px] h-[48px] relative cursor-pointer">
      <Image
        src={song.imageSrc}
        alt="song_card_img"
        fill
        className="object-cover"
        suppressHydrationWarning
      />
      <FaGooglePlay className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden group-hover:block" />
    </button>
  );
}
