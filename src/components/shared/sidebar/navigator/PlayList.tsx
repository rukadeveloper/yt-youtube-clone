import React from "react";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "./PlayListNav";
import { playList } from "@/types/types";

export default function PlayList() {
  return (
    <div className="real-playlist flex flex-col">
      {dummyPlaylistArray.map((pl: playList) => (
        <PlayListNav pl={pl} />
      ))}
    </div>
  );
}
