"use client";

import React from "react";
import { HTMLMediaState } from "react-use/lib/factory/createHTMLMediaHook";
import { ClipLoader } from "react-spinners";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
  IoPlaySharp,
} from "react-icons/io5";
import { GiPauseButton } from "react-icons/gi";
import { allSongList } from "@/types/types";

interface controls {
  play: () => Promise<void> | undefined;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
}

export default function PlayerPlay({
  isLoading,
  state,
  controls,
  prevPlayerQueue,
  nextPlayerQueue,
  activeSong,
  playNext,
  playBack,
}: {
  isLoading: boolean;
  state: HTMLMediaState;
  controls: controls;
  prevPlayerQueue: allSongList[];
  nextPlayerQueue: allSongList[];
  activeSong: allSongList;
  playNext: () => void;
  playBack: () => void;
}) {
  const playPaused = () => {
    controls.pause();
  };

  const playPlaying = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };

  const prevButton = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };

  const nextButton = () => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  };

  return (
    <div className="player-play-wrapper h-full flex ssm:gap-10 gap-3 items-center px-10">
      <button className="cursor-pointer" onClick={prevButton}>
        <span className="sr-only">이전 재생</span>
        <IoPlaySkipBackSharp className="md:text-[24px] text-[20px]" />
      </button>
      <button
        className="cursor-pointer flex items-center"
        onClick={state.playing ? playPaused : playPlaying}>
        <span className="sr-only">재생</span>
        {isLoading ? (
          <ClipLoader color="#fff" />
        ) : state.playing ? (
          <GiPauseButton className="md:text-[36px] text-[30px]" />
        ) : (
          <IoPlaySharp className="md:text-[36px] text-[30px]" />
        )}
      </button>
      <button
        className="cursor-pointer disabled:opacity-45"
        onClick={nextButton}>
        <span className="sr-only">다음 재생</span>
        <IoPlaySkipForward className="md:text-[24px] text-[20px]" />
      </button>
    </div>
  );
}
