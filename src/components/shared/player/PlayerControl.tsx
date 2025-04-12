"use client";

import React, { useState } from "react";
import { HTMLMediaState } from "react-use/lib/factory/createHTMLMediaHook";
import { IoVolumeHigh, IoShuffle, IoVolumeLow } from "react-icons/io5";
import { CiRepeat } from "react-icons/ci";
import MobileController from "./MobileController";

import { Slider } from "@/components/ui/slider";

interface controls {
  play: () => Promise<void> | undefined;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
}

export default function PlayerControl({
  controls,
  state,
}: {
  controls: controls;
  state: HTMLMediaState;
}) {
  const [volume, setVolume] = useState(0.5);
  const volumeChange = (value: number[]) => {
    setVolume(value[0]);
    controls.volume(value[0]);
  };

  const volumeClick = () => {
    if (state.muted) {
      setVolume(0.5);
      controls.volume(0.5);
      controls.unmute();
    }
    if (!state.muted) {
      setVolume(0);
      controls.volume(0);
      controls.mute();
    }
  };

  return (
    <div className="player-control flex items-center gap-5">
      <div className="volume-control flex items-center relative group">
        <button className="px-3 xxs:block hidden" onClick={volumeClick}>
          {state.muted ? (
            <IoVolumeLow size={26} className="opacity-55" />
          ) : (
            <IoVolumeHigh size={26} className="opacity-55" />
          )}
        </button>
        <Slider
          orientation="horizontal"
          defaultValue={[0]}
          min={0}
          max={1}
          step={0.01}
          value={[volume]}
          onValueChange={volumeChange}
          className="w-[100px] absolute right-full hidden ssm:group-hover:flex"
        />
        <Slider
          orientation="vertical"
          defaultValue={[0]}
          min={0}
          max={1}
          step={0.01}
          value={[volume]}
          onValueChange={volumeChange}
          className="w-[100px] absolute bottom-full left-1/2 -translate-x-1/2 hidden group-hover:flex ssm:group-hover:hidden"
        />
      </div>
      <button className="px-3 xxs:block hidden">
        <CiRepeat size={26} className="opacity-55" />
      </button>
      <button className="px-3 xxs:block hidden">
        <IoShuffle size={26} className="opacity-55" />
      </button>
      <MobileController
        state={state}
        volume={volume}
        volumeChange={volumeChange}
        volumeClick={volumeClick}
      />
    </div>
  );
}
