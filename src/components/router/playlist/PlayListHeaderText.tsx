import React from "react";
import { playList } from "@/types/types";
import PlayListHeaderButtons from "./PlayListHeaderButtons";

export default function PlayListHeaderText({
  playlist,
}: {
  playlist: playList;
}) {
  const { playlistName, owner, songList } = playlist;

  return (
    <div className="playlist-header-text">
      <h2 className="text-[26px]" style={{ fontWeight: "800" }}>
        {playlistName}
      </h2>
      <span className="block text-[14px] text-neutral-500">
        EP / {owner} / 2019{" "}
      </span>
      <span className="block text-[14px] text-neutral-500">
        {songList.length}곡{" "}
      </span>
      <PlayListHeaderButtons />
    </div>
  );
}
