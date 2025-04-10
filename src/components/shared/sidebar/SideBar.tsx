import React from "react";
import LogoButton from "./LogoButton";
import Navigator from "./navigator/Navigator";
import NewPlayList from "./navigator/NewPlayList";
import PlayList from "./navigator/PlayList";

export default function SideBar() {
  return (
    <header className="hidden md:block mlg:w-[240px] mlg:min-w-[240px] w-[100px] min-w-[100px] border-r border-solid border-neutral-600 relative z-[100]">
      <LogoButton isInDrawer={false} />
      <Navigator />
      <NewPlayList />
      <PlayList />
    </header>
  );
}
