"use client";

import React from "react";
import usePlayerState from "@/hooks/usePlayerState";
import PlayerContent from "./PlayerContent";

export default function PlayerWrapper() {
  const { isVisiblePlayer } = usePlayerState();

  if (!isVisiblePlayer) return null;

  return (
    <div className="player-wrapper flex items-end fixed bottom-0 left-0 right-0 h-[70px] bg-black z-[200]">
      <PlayerContent />
    </div>
  );
}
