import React, { useEffect } from "react";
import { useAudio } from "react-use";
import usePlayerState from "@/hooks/usePlayerState";
import PlayerSliderWrapper from "./PlayerSliderWrapper";
import PlayerText from "./PlayerText";

export default function PlayerContent() {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playNext, playBack } =
    usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong!.src!,
    autoPlay: true,
  });

  useEffect(() => {
    const onEventFinish = () => {
      if (nextPlayerQueue.length === 0) controls.pause();
      playNext();
    };

    ref?.current?.addEventListener("ended", onEventFinish);
    return () => ref?.current?.removeEventListener("ended", onEventFinish);
  }, [ref]);

  const isLoading: boolean = Boolean(
    activeSong?.src && state.buffered!.length === 0
  );

  return (
    <div className="player-contents relative flex items-center w-full h-[calc(100%_-_6px)]">
      {audio}
      <PlayerSliderWrapper state={state} controls={controls} />
      <PlayerText
        isLoading={isLoading}
        state={state}
        controls={controls}
        activeSong={activeSong!}
        prevPlayerQueue={prevPlayerQueue}
        nextPlayerQueue={nextPlayerQueue}
        playNext={playNext}
        playBack={playBack}
      />
    </div>
  );
}
