import React, { Dispatch, SetStateAction } from "react";
import { HTMLMediaState } from "react-use/lib/factory/createHTMLMediaHook";
import MobileButtons from "./MobileButtons";
import { IoMdMore } from "react-icons/io";

export default function MobileController({
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
    <div className="mobile-controller group relative">
      <button className="px-3 xxs:hidden block cursor-pointer">
        <IoMdMore size={26} />
      </button>
      <MobileButtons
        state={state}
        volume={volume}
        volumeChange={volumeChange}
        volumeClick={volumeClick}
      />
    </div>
  );
}
