import React from "react";
import { HTMLMediaState } from "react-use/lib/factory/createHTMLMediaHook";
import PlayerPlay from "./PlayerPlay";
import { allSongList } from "@/types/types";
import PlayerInfo from "./PlayerInfo";
import PlayerControl from "./PlayerControl";

interface controls {
  play: () => Promise<void> | undefined;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
}

export default function PlayerText({
  isLoading,
  state,
  controls,
  activeSong,
  prevPlayerQueue,
  nextPlayerQueue,
  playNext,
  playBack,
}: {
  isLoading: boolean;
  state: HTMLMediaState;
  controls: controls;
  activeSong: allSongList;
  prevPlayerQueue: allSongList[];
  nextPlayerQueue: allSongList[];
  playNext: () => void;
  playBack: () => void;
}) {
  return (
    <div className="player-text w-full h-full flex justify-between items-center relative">
      <PlayerPlay
        isLoading={isLoading}
        state={state}
        controls={controls}
        prevPlayerQueue={prevPlayerQueue}
        nextPlayerQueue={nextPlayerQueue}
        activeSong={activeSong!}
        playNext={playNext}
        playBack={playBack}
      />
      <PlayerInfo activeSong={activeSong!} />
      <PlayerControl controls={controls} state={state} />
    </div>
  );
}
