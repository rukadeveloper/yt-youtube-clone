import { TopSong } from "@/types/types";
import React from "react";
import SongCardImage from "./SongCardImage";
import { FaCircle } from "react-icons/fa";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

export default function SongCard({ song }: { song: TopSong }) {
  return (
    <div className="song-card flex items-center group">
      <SongCardImage song={song} />
      <div className="ml-2 mr-4 flex gap-2 items-center">
        {song.rank === song.prevRank ? (
          <FaCircle size={8} />
        ) : song.rank < song.prevRank ? (
          <BsCaretUpFill size={6} fill="#ff0000" />
        ) : (
          <BsCaretDownFill size={6} fill="#3ca63f" />
        )}
        <span className="text-[14px]">{song.rank + 1}</span>
      </div>
      <span>{song.name}</span>
    </div>
  );
}
