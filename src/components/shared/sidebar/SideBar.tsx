"use client";

import React, { useState } from "react";
import LogoButton from "./LogoButton";
import Navigator from "./navigator/Navigator";
import NewPlayList from "./navigator/NewPlayList";
import PlayList from "./navigator/PlayList";

export default function SideBar() {
  return (
    <header className="hidden lg:block w-[240px] h-full border-r border-solid border-neutral-600">
      <LogoButton isInDrawer={false} />
      <Navigator />
      <NewPlayList />
      <PlayList />
    </header>
  );
}
