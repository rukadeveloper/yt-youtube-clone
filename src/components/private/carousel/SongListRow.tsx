import React from "react";
import { TopSong } from "@/types/types";
import SongListColumn from "./SongListColumn";

export default function SongListRow({ chunked }: { chunked: TopSong[] }) {
  return (
    <div className="song-list-row">
      {chunked.map((ch: TopSong) => (
        <SongListColumn ch={ch} key={ch.songId} />
      ))}
    </div>
  );
}
