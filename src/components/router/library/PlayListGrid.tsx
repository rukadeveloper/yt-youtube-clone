import React from "react";
import PlayListCard from "@/components/private/carousel/PlayListCard";
import { getRandomElementFromArray } from "../../../lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

export default function PlayListGrid() {
  return (
    <div className="playlist-grid mt-12 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
      <PlayListCard playList={getRandomElementFromArray(dummyPlaylistArray)} />
    </div>
  );
}
