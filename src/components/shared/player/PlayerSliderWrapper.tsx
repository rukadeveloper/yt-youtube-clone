import React from "react";
import { HTMLMediaState } from "react-use/lib/factory/createHTMLMediaHook";
import { Slider as PlayerSlider } from "@/components/ui/slider";

interface controls {
  play: () => Promise<void> | undefined;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
}

export default function PlayerSliderWrapper({
  state,
  controls,
}: {
  state: HTMLMediaState;
  controls: controls;
}) {
  return (
    <div className="player-slider-wrapper absolute top-[-22px] w-full">
      <PlayerSlider
        defaultValue={[0]}
        value={[state.time]}
        onValueChange={(value) => {
          controls.seek(value[0]);
        }}
        max={state.duration}
      />
    </div>
  );
}
