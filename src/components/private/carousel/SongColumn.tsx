import { TopSong } from "@/types/types";
import React from "react";
import SongCard from "./SongCard";

export default function SongColumn({ songList }: { songList: TopSong[] }) {
  return (
    <div className="song-column flex flex-col gap-5">
      {songList.map((song: TopSong, idx: number) => (
        <SongCard key={idx} song={song} />
      ))}
    </div>
  );
}
