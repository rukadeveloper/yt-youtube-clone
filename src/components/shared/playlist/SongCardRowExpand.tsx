import React from "react";
import { allSongList } from "@/types/types";
import SongCardRowImage from "./SongCardRowImage";

export default function SongCardRowExpand({ song }: { song: allSongList }) {
  return (
    <div className="song-card flex gap-5 items-center group">
      <SongCardRowImage song={song} />
      <span>{song.name}</span>
    </div>
  );
}
