import React from "react";
import { allSongList, playList } from "@/types/types";
import SongCardRowExpand from "./SongCardRowExpand";

export default function SongCardRowWrapper({
  playlist,
}: {
  playlist: playList;
}) {
  const { songList } = playlist;

  return (
    <div className="song-card-row-wrapper pt-26 flex flex-col gap-6">
      {songList.map((song: allSongList, idx: number) => (
        <SongCardRowExpand song={song} key={idx} />
      ))}
    </div>
  );
}
