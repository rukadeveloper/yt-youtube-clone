import React from "react";
import { playList } from "@/types/types";
import HeaderImage from "@/components/shared/playlist/HeaderImage";
import PlayListHeaderText from "./PlayListHeaderText";
import { getRandomElementFromArray } from "@/lib/utils";

export default function PlayListHeader({ playlist }: { playlist: playList }) {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  return (
    <div className="playlist-header mt-12 flex items-center gap-10">
      <HeaderImage songList={randomSong} />
      <PlayListHeaderText playlist={playlist} />
    </div>
  );
}
