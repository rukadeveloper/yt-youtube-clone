import React from "react";
import { HTMLMediaState } from "react-use/lib/factory/createHTMLMediaHook";
import { CiRepeat } from "react-icons/ci";
import { IoShuffle, IoVolumeHigh, IoVolumeLow } from "react-icons/io5";
import { Slider } from "@/components/ui/slider";

export default function MobileButtons({
  state,
  volume,
  volumeChange,
  volumeClick,
}: {
  state: HTMLMediaState;
  volume: number;
  volumeChange: (value: number[]) => void;
  volumeClick: () => void;
}) {
  return (
    <div className="mobile-buttons hidden w-[80px] bg-[#333] p-3 mr-4 rounded-2xl group-hover:flex flex-col gap-4 absolute bottom-full right-0">
      <div className="volume-control flex items-center relative group">
        <button className="px-3" onClick={volumeClick}>
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
          className="w-[100px] absolute right-full hidden group-hover:flex"
        />
      </div>
      <button className="px-3">
        <CiRepeat size={26} className="opacity-55" />
      </button>
      <button className="px-3">
        <IoShuffle size={26} className="opacity-55" />
      </button>
    </div>
  );
}
